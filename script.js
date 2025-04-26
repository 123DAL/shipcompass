// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const form = document.getElementById('consultation-form');
  
  // Only add event listener if we're on the homepage with the form
  if (form) {
    // Add loading state to form
    form.addEventListener('submit', function() {
      const button = this.querySelector('button[type="submit"]');
      button.innerHTML = 'Sending...';
      button.disabled = true;
    });
    
    // The form submission is now handled by FormSubmit
    // No need to prevent default or manually handle form data
  }
}); 