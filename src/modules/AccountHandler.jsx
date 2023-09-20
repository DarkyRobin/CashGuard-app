import { json } from "react-router-dom";

export const getAccount = (uuid) => {
  const accounts = JSON.parse(localStorage.getItem("accounts") || []);
  const account = accounts.find((account) => account.uuid === uuid);
  return account;
};

export const validateAmount = (amount, operation) => {
  if(!amount) {
    return { status: 0, msg: "Please enter amount." }
  }
  if (isNaN(amount) || parseFloat(amount) <= 0) {
    return { status: 0, msg: "Not a valid amount" }
  }

  return { status: 1, msg: "Successful." }
};

export const transactAccount = (account_id, balance, amount, operation) => {
  console.log(account_id, balance, amount, operation)
  const accountsArr = JSON.parse(localStorage.getItem('accounts') || []);
  const accountExists = accountsArr.findIndex(account => account.id === account_id);
  if(accountExists !== -1) {
    const newBalance = balance + amount;
    accountsArr[accountExists].balance = newBalance;
  }
  localStorage.setItem('accounts', JSON.stringify(accountsArr));
}
