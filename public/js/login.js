const loginFormHandler = async (event) => {

    // prevents event bubbling
    event.preventDefault();

    // need to match these ID's later in handlebars
    const loginName = document.querySelector('#username-login');
    const loginPassword = document.querySelector('#password-login');
  

    // will redirect user to the dashboard handlebars page if login name and password is correct
    if (loginName && loginPassword) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ loginName, loginPassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');

      } else {
        alert("Incorrect username or password.");
      }
    }
  };
  

//   will match class in handlebars later
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);