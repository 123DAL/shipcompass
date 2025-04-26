// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const form = document.querySelector('form[action^="mailto"]');
  const formContainer = document.getElementById('form-container');
  const thankYouMessage = document.getElementById('thank-you-message');
  const sendAnotherBtn = document.getElementById('send-another');
  
  // Only add event listener if we're on the homepage with the form
  if (form) {
    // Add event handler for form submission
    form.addEventListener('submit', function(event) {
      // Prevent the default form action to handle it with JavaScript
      event.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const company = document.getElementById('company').value || 'Not specified';
      const message = document.getElementById('message').value;
      
      // Create email link
      const subject = encodeURIComponent('Ship Compass Consultation Request');
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
      );
      const mailtoLink = `mailto:123dal@gmail.com?subject=${subject}&body=${body}`;
      
      // Show button loading state
      const button = this.querySelector('button[type="submit"]');
      button.innerHTML = 'Sending...';
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show the thank you message after a short delay
      setTimeout(function() {
        // Hide form, show thank you message
        formContainer.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
      }, 1000);
    });
    
    // Add event listener for the "Send Another Request" button
    if (sendAnotherBtn) {
      sendAnotherBtn.addEventListener('click', function() {
        // Reset the form
        form.reset();
        
        // Hide thank you message, show form
        thankYouMessage.classList.add('hidden');
        formContainer.classList.remove('hidden');
      });
    }
  }
}); 