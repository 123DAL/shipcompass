// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const form = document.getElementById('contact-form');
  const formContainer = document.getElementById('form-container');
  const thankYouMessage = document.getElementById('thank-you-message');
  const sendAnotherBtn = document.getElementById('send-another');
  
  // Only add event listener if we're on the homepage with the form
  if (form) {
    // We're using FormSubmit with a redirect to thanks.html now
    // No need for form submission handling here
    
    // Add event listener for the "Send Another Request" button
    if (sendAnotherBtn) {
      sendAnotherBtn.addEventListener('click', function() {
        // Reset form
        form.reset();
        
        // Hide thank you message, show form
        thankYouMessage.classList.add('hidden');
        formContainer.classList.remove('hidden');
      });
    }
  }
}); 