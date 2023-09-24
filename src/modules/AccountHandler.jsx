import { v4 as uuidv4 } from "uuid";
const generateAccountID = () => {
  const randomUID = uuidv4();
  const numberOnly = randomUID.replace(/\D/g, "");
  const accountID = numberOnly.slice(0, 10);

  return parseFloat(accountID);
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
    localStorage.setItem("accounts", JSON.stringify(accounts));
    return account;
  }
  return account;
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

  if (balance < amount) {
    return { status: 0, msg: "Insufficient funds" };
  }
  console.log(recipient_acct_id);
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
    const updatedAccountsArr = accountsArr.map((account) => {
      switch (operation) {
        case "send":
          {
            const recipientAccount = accountsArr.find(
              (recipient) => recipient.id === recipient_acct_id
            );
            console.log(recipientAccount, senderAccount);
            senderAccount.balance -= amount;
            recipientAccount.balance += amount;
            if (account.id === senderAccount.id) {
              return senderAccount;
            } else if (account.id === recipientAccount.id) {
              return recipientAccount;
            }
          }
          break;

        case "deposit":
          accountsArr[senderAccount].balance = balance + amount;
          break;

        case "withdraw":
          accountsArr[senderAccount].balance = balance - amount;
          break;

        default:
          break;
      }
    });

    localStorage.setItem("accounts", JSON.stringify(updatedAccountsArr));
  }
};
