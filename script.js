// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const form = document.getElementById('consultation-form');
  
  // Only add event listener if we're on the homepage with the form
  if (form) {
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();
      
      // Get the form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const company = document.getElementById('company').value || 'Not specified';
      const message = document.getElementById('message').value;
      
      // Create email subject and body
      const subject = encodeURIComponent('Ship Compass Consultation Request');
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
      );
      
      // Show button loading state
      const button = this.querySelector('button[type="submit"]');
      button.innerHTML = 'Opening Email...';
      button.disabled = true;
      
      // Create a mailtoLink and trigger it after a short delay
      setTimeout(function() {
        // Create and click a mailto link programmatically
        const mailtoLink = `mailto:123dal@gmail.com?subject=${subject}&body=${body}`;
        
        // Open the email client programmatically without using window.location
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', mailtoLink);
        linkElement.style.display = 'none';
        document.body.appendChild(linkElement);
        linkElement.click();
        document.body.removeChild(linkElement);
        
        // Reset button and show confirmation
        button.innerHTML = '<span>Get Your Free Consultation</span><i class="fas fa-arrow-right ml-2"></i>';
        button.disabled = false;
        
        // Show confirmation to user after a small delay
        setTimeout(function() {
          alert('Thank you for your interest! Your email client should have opened with your form information. Please send the email to complete your request.');
        }, 500);
      }, 500);
    });
  }
}); 