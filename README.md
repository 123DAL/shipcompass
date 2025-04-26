# Ship Compass

A simple landing page for a freight logistics company, designed to be deployed on Cloudflare Pages.

## Project Structure

- `index.html` - Main HTML page
- `styles.css` - CSS styles
- `script.js` - JavaScript for form handling
- `images/logo.svg` - Ship Compass logo

## Deployment to Cloudflare Pages

1. Push this repository to GitHub
2. Connect your GitHub account to Cloudflare Pages
3. Create a new Pages project and select this repository
4. Configure build settings:
   - No build command needed (static site)
   - Build output directory: `/` (root)
5. Deploy!

## Local Development

To develop locally, simply open the index.html file in your browser, or use a simple HTTP server:

```bash
# Using Python
python -m http.server

# Using Node.js (with http-server package)
npx http-server
``` 