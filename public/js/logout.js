// will be linked to on the main handlebars page

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  

    // replaces / with logout
    if (response.ok) {
      document.location.replace('/');
      
    } else {
      alert("Logout failed. Try again.");
    }
  };
  

  const logoutButton = document.querySelector('#logout')
  logoutButton.addEventListener('click', logout);