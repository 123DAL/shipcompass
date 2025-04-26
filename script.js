// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const form = document.getElementById('consultation-form');
  
  // Add event listener for form submission
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // Here we'll just show an alert message
    alert(`Thanks for your inquiry, ${name}! Our team will contact you shortly at ${email}.`);
    
    // Reset the form
    form.reset();
  });
}); 