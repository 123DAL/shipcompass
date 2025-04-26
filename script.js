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

// Function to handle form submission without page redirect
function submitForm(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  const formContainer = document.getElementById('form-container');
  const thankYouMessage = document.getElementById('thank-you-message');
  
  // Show loading state if desired
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.innerHTML;
  submitButton.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending...';
  submitButton.disabled = true;
  
  // Send form data to FormSubmit
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    // Reset button state
    submitButton.innerHTML = originalButtonText;
    submitButton.disabled = false;
    
    // Show success message
    form.reset();
    formContainer.classList.add('hidden');
    thankYouMessage.classList.remove('hidden');
  })
  .catch(error => {
    // Handle error if needed
    console.error('Error submitting form:', error);
    submitButton.innerHTML = originalButtonText;
    submitButton.disabled = false;
    alert('There was a problem submitting your form. Please try again.');
  });
} 