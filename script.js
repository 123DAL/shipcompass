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
        
        // Reset Turnstile
        turnstileVerified = false;
        turnstileToken = '';
        
        // Reset submit button to disabled state
        const submitButton = document.getElementById('submit-button');
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.classList.add('opacity-70', 'cursor-not-allowed');
        }
        
        // Reset Turnstile widget if it's been initialized
        if (window.turnstile) {
          try {
            window.turnstile.reset();
          } catch (e) {
            console.log('Could not reset Turnstile widget');
          }
        }
      });
    }
  }
});

// Turnstile variables
let turnstileVerified = false;
let turnstileToken = '';

// Called when Turnstile verification is successful
function onTurnstileSuccess(token) {
  console.log('Turnstile verification successful');
  turnstileVerified = true;
  turnstileToken = token;
  
  // Enable submit button
  const submitButton = document.getElementById('submit-button');
  if (submitButton) {
    submitButton.disabled = false;
    submitButton.classList.remove('opacity-70', 'cursor-not-allowed');
  }
}

// Function to handle form submission without page redirect
function submitForm(event) {
  event.preventDefault();
  
  // Verify Turnstile is completed
  if (!turnstileVerified) {
    alert('Please complete the security verification first.');
    return;
  }
  
  const form = event.target;
  const formData = new FormData(form);
  const formContainer = document.getElementById('form-container');
  const thankYouMessage = document.getElementById('thank-you-message');
  
  // Show loading state if desired
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.innerHTML;
  submitButton.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending...';
  submitButton.disabled = true;
  
  // Add Turnstile token to bypass FormSubmit's captcha
  formData.append('cf-turnstile-response', turnstileToken);
  // Disable FormSubmit's captcha since we're using Turnstile
  formData.set('_captcha', 'false');
  
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
    
    // Reset Turnstile for next submission
    turnstileVerified = false;
    turnstileToken = '';
    if (window.turnstile) {
      try {
        window.turnstile.reset();
      } catch (e) {
        console.log('Could not reset Turnstile widget');
      }
    }
  })
  .catch(error => {
    // Handle error if needed
    console.error('Error submitting form:', error);
    submitButton.innerHTML = originalButtonText;
    submitButton.disabled = false;
    alert('There was a problem submitting your form. Please try again.');
  });
} 