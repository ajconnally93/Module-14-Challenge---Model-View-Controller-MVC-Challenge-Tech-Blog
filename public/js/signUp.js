// will get linked to on login page if user chooses to sign up instead

const signupHandler = async (event) => {

    // prevent event bubbling
    event.preventDefault();
  
    const loginName = document.querySelector('#username-signup')
    const loginPassword = document.querySelector('#password-signup')
  
    if (loginName && loginPassword) {

      const response = await fetch('/api/users', {
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


  
  const signupForm = document.querySelector('.signup-form')
  signupForm.addEventListener('submit', signupHandler);