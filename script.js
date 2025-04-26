// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const form = document.getElementById('consultation-form');
  
  // Only add event listener if we're on the homepage with the form
  if (form) {
    // Add loading state to form and confirmation message
    form.addEventListener('submit', function(event) {
      // Don't prevent default here to allow mailto to work
      
      // Show button loading state
      const button = this.querySelector('button[type="submit"]');
      button.innerHTML = 'Opening Email...';
      
      // Set a timeout to reset the button (in case they stay on the page)
      setTimeout(function() {
        button.innerHTML = '<span>Get Your Free Consultation</span><i class="fas fa-arrow-right ml-2"></i>';
        button.disabled = false;
        
        // Show confirmation to user
        alert('Thank you for your interest! Your default email client should have opened with your form information. Please send the email to complete your request.');
      }, 2000);
    });
  }
}); 