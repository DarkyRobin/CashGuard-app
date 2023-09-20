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
