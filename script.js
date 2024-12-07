fetch('https://final-grade.vercel.app/api/login', {  // Update to your Vercel URL
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ username, password }),
})
  .then(response => response.json())
  .then(data => {
    if (data.message === 'Login successful') {
      window.location.href = `grades.html?username=${username}&grade=${data.grade}`;
    } else {
      document.getElementById('error-message').innerText = 'Invalid username or password';
    }
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('error-message').innerText = 'Error occurred. Please try again.';
  });
