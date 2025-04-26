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
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const company = document.getElementById('company').value;
      const message = document.getElementById('message').value;
      
      // Format subject and body for mailto
      const subject = 'Ship Compass Consultation Request';
      const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage: ${message}`;
      
      // Create a hidden link element to trigger the mailto
      const mailtoLink = document.createElement('a');
      mailtoLink.style.display = 'none';
      mailtoLink.href = `mailto:123dal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Append, click, and remove link element
      document.body.appendChild(mailtoLink);
      mailtoLink.click();
      document.body.removeChild(mailtoLink);
      
      // Show thank you message, hide form
      formContainer.classList.add('hidden');
      thankYouMessage.classList.remove('hidden');
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