// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const form = document.getElementById('contact-form');
  const formContainer = document.getElementById('form-container');
  const thankYouMessage = document.getElementById('thank-you-message');
  const sendAnotherBtn = document.getElementById('send-another');
  
  // Only add event listener if we're on the homepage with the form
  if (form) {
    // Add event handler for form submission
    form.addEventListener('submit', function() {
      // The form will naturally submit to the mailto action
      // We just need to show the thank you message after a slight delay
      setTimeout(function() {
        formContainer.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
      }, 500);
    });
    
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