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
    form.addEventListener('submit', function(event) {
      // Prevent the default form action
      event.preventDefault();
      
      // Show button loading state
      const button = this.querySelector('button[type="submit"]');
      const originalText = button.innerHTML;
      button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Processing...';
      button.disabled = true;
      
      // Simulate form processing (in a real app, you'd send this data to a server)
      setTimeout(function() {
        // Hide form, show thank you message
        formContainer.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
        
        // Reset form for future use
        form.reset();
        button.innerHTML = originalText;
        button.disabled = false;
        
        // Scroll to thank you message
        thankYouMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 1500); // Simulate processing time
    });
    
    // Add event listener for the "Send Another Request" button
    if (sendAnotherBtn) {
      sendAnotherBtn.addEventListener('click', function() {
        // Hide thank you message, show form
        thankYouMessage.classList.add('hidden');
        formContainer.classList.remove('hidden');
        
        // Focus on first form field
        const firstInput = form.querySelector('input');
        if (firstInput) {
          firstInput.focus();
        }
      });
    }
  }
}); 