// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const form = document.getElementById('contact-form');
  const formContainer = document.getElementById('form-container');
  const thankYouMessage = document.getElementById('thank-you-message');
  const sendAnotherBtn = document.getElementById('send-another');
  
  // Only add event listener if we're on the homepage with the form
  if (form) {
    // Add HTMX event listener for successful form submission
    document.body.addEventListener('htmx:afterSwap', function(event) {
      if (event.detail.target.id === 'form-container') {
        // Show thank you message
        formContainer.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
      }
    });
    
    // Also keep the form submit event for browsers with JavaScript but no HTMX support
    form.addEventListener('submit', function(e) {
      // For FormSubmit with HTMX, we don't need to do anything here
      // HTMX will handle the submission, but we'll keep this as a fallback
      
      // If HTMX isn't working for some reason, we still want to show the thank you message
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