

// Function to handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  });
  