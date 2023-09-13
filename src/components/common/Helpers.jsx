export const validateAccount = (username, password) => {
  const accounts = JSON.parse(localStorage.getItem('user') || []);

  //If user is empty
  if(!username) {
    return {status:0, msg:'Username is required.'};
  }

  //If password is empty
  if(!password) {
    return {status: 0, msg:'Password is required.'};
  }
  // If the username exists in accounts
  const userExists = accounts.some((user) => user.username === username);

  if (!userExists) {
    return {status:0, msg:'Username does not exist.'};
  }

  //If user is found and not found
  const user = accounts.find((user) => user.username === username && user.password === password);
  if(!user) {
    return {status:0 , msg:'Username and password did not match.'};
  } else {
    return {status:1, msg:'Login successful.'};
  } 
}