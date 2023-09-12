
let accounts = [];

const getAccounts = () => {
  return JSON.parse(localStorage.getItem('user') || [])
}

export const initializeAccounts = () => {
  accounts = getAccounts();
};
export const validateUsername = (username) => {
  if(!username) {
    return 'Username is required.';
  }
  
  const userExists = accounts.find((user) => user.username === username);
  if(!userExists) {
    return 'Username does not exist';
  }
  return null;
}

export const validatePassword = (username, password) => {
  if(!password) {
    return 'Password is required.'
  }

  const user = accounts.find((user) => user.username === username && user.password === password);
  if(!user) {
    return 'Username and password did not match.'
  }
  
  return null;

}