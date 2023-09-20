export const validateAccount = (username, password) => {
  const users = JSON.parse(localStorage.getItem('users') || []);
  //If user is empty
  if(!username) {
    return {status:0, msg:'Username is required.'};
  }

  //If password is empty
  if(!password) {
    return {status: 0, msg:'Password is required.'};
  }
  // If the username exists in accounts
  const userExists = users.some((user) => user.username === username);

  if (!userExists) {
    return {status:0, msg:'Username does not exist.'};
  }

  //If user is found and not found
  const user = users.find((user) => user.username === username && user.password === password);
  if(!user) {
    return {status:0 , msg:'Username and password did not match.'};
  } else {
    return {status:1, msg:'Login successful.', uuid:user.uuid};
  } 
}

export const validateRules = (username, password, confirmPassword, uuid) => {
  //If user is empty
  if(!username) {
    return {status:0, msg:'Username is required.'};
  }

  //If password is empty
  if(!password) {
    return {status: 0, msg:'Password is required.'};
  }

  //If confirmpassword is empty
  if(!confirmPassword) {
    return {status: 0, msg:'Confirmation password is required.'};
  }

  
  // If the username exists in accounts
  const accounts = JSON.parse(localStorage.getItem('users') || []);
  const userExists = accounts.some((user) => user.username === username);

  if (userExists) {
    return {status:0, msg:'Username not available.'};
  }

  //Validate if password pass requirements
  // const validatePassword = (password) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password);
  // console.log(validatePassword(password))
  // if (!validatePassword(password)) {
  //   return {status: 0, msg:'Password should have at least a minimum of 8 characters and combination of uppercase letters, lowercase letters, numbers, and special characters.'};
  // }

  //validate if password is match
  const doPasswordsMatch = (password, confirmPassword) => password === confirmPassword;

  if (!doPasswordsMatch(password, confirmPassword)) {
    return {status: 0, msg:'Password does not match.'};
  } else {
    const newUser = { username: username, password:password, uuid:uuid };
    accounts.push(newUser);
    localStorage.setItem('users', JSON.stringify(accounts));                                                                 
    return {status: 1, msg:'User successfully registered.'};
  }
}