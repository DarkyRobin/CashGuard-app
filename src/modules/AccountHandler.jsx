import { v4 as uuidv4 } from "uuid";
const generateAccountID = () => {
  const randomUID = uuidv4();
  const numberOnly = randomUID.replace(/\D/g, "");
  const accountID = numberOnly.slice(0, 10);

  return parseFloat(accountID);
};

const autoID = (localStorageKey) => {
  let counter = parseInt(localStorage.getItem(localStorageKey)) || 0;
  return () => {
    counter++;
    return counter;
  };
};

export const getAccount = (uuid) => {
  const accounts = JSON.parse(localStorage.getItem("accounts") || []);
  const account = accounts.find((account) => account.uuid === uuid);

  if (!account) {
    const newAccount = {
      id: generateAccountID(),
      uuid: uuid,
      balance: 0,
      status: "Active",
    };
    accounts.push(newAccount);
    localStorage.setItem("accounts", JSON.stringify(accounts)); // Update local storage
    return newAccount; // Return the newly created account
  } else {
    return account; // Return the found account
  }
};

export const getUser = (uuid) => {
  const users = JSON.parse(localStorage.getItem("users") || []);
  const user = users.find((user) => user.uuid === uuid);
  return user;
};

export const validateAmount = (
  amount,
  operation,
  balance,
  recipient_acct_id
) => {
  const accountsArr = JSON.parse(localStorage.getItem("accounts") || []);

  if (!amount) {
    return { status: 0, msg: "Please enter amount." };
  }
  if (isNaN(amount) || parseFloat(amount) <= 0) {
    return { status: 0, msg: "Not a valid amount" };
  }
  if (operation !== "deposit") {
    if (balance < amount) {
      return { status: 0, msg: "Insufficient funds" };
    }
  }

  if (recipient_acct_id) {
    const recipientExist = accountsArr.findIndex(
      (recipient) => recipient.id === recipient_acct_id
    );

    if (recipientExist === -1) {
      return { status: 0, msg: "Transcation Failed. Please try again." };
    }
  }

  return { status: 1, msg: "Successful." };
};

export const transactAccount = (
  account_id,
  balance,
  amount,
  operation,
  recipient_acct_id
) => {
  const accountsArr = JSON.parse(localStorage.getItem("accounts") || []);
  const senderAccount = accountsArr.find(
    (account) => account.id === account_id
  );

  if (senderAccount) {
    switch (operation) {
      case "send":
        {
          const recipientAccount = accountsArr.find(
            (account) => account.id === recipient_acct_id
          );
          // Update balances
          senderAccount.balance -= amount;
          recipientAccount.balance += amount;

          // Update the accounts array
          const updatedAccountsArr = accountsArr.map((account) => {
            if (account.id === senderAccount.id) {
              return senderAccount;
            } else if (account.id === recipientAccount.id) {
              return recipientAccount;
            } else {
              return account;
            }
          });

          // Store the updated accounts array in localStorage
          localStorage.setItem("accounts", JSON.stringify(updatedAccountsArr));
          TransactionLog(operation, recipientAccount, senderAccount, amount);
        }
        break;

      case "deposit":
        {
          senderAccount.balance += amount;
          // Update the accounts array
          const updatedAccountsArr = accountsArr.map((account) => {
            if (account.id === senderAccount.id) {
              return senderAccount;
            } else {
              return account;
            }
          });

          // Store the updated accounts array in localStorage
          localStorage.setItem("accounts", JSON.stringify(updatedAccountsArr));

          //Log transaction
        }

        break;

      case "withdraw":
        {
          // Withdraw operation for the sender's account
          senderAccount.balance -= amount;

          // Update the accounts array
          const updatedAccountsArr = accountsArr.map((account) => {
            if (account.id === senderAccount.id) {
              return senderAccount;
            } else {
              return account;
            }
          });

          // Store the updated accounts array in localStorage
          localStorage.setItem("accounts", JSON.stringify(updatedAccountsArr));
        }
        break;

      default:
        break;
    }
  }
};

export const TransactionLog = (operation, recipient, account, amount) => {
  console.log(operation, recipient, account, amount);
  const localStorage = "transactions";
  const transaction_id = autoID(localStorage);
  const transactionDate = new Date();
  const senderAccount = getUser(account.uuid);
  const recipientAccount = getUser(recipient.uuid);

  console.log(senderAccount, recipientAccount);

  const transaction = {
    id: transaction_id(),
    account_name: account.id,
    recepient_name: recipient.id,
    amount: amount,
    date: transactionDate.toLocaleDateString(),
    time: transactionDate.toLocaleTimeString(),
    transaction_type: operation,
    description: ()=> {
      return ``
    }
  };

  console.log(transaction);

  
};
