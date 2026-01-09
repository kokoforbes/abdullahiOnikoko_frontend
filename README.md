# Social Care Wales - Registration Page

A pixel-perfect recreation of the Social Care Wales (SCWonline) registration page, built as a presentational form with a focus on accessibility, responsive design, and attention to detail.

## Approach

### Mobile-First Design

The project follows a mobile-first responsive design strategy:

- Base styles are optimized for mobile devices (320px+)
- Progressive enhancement using `min-width` media queries for tablets (768px+) and desktops (1300px+)
- Hamburger menu on mobile that transforms into a horizontal navigation bar on larger screens

### Accessibility-First Development

Accessibility is a core requirement for public sector websites:

- Semantic HTML5 elements (`header`, `nav`, `main`, `form`)
- ARIA labels and roles throughout the interface
- Screen reader-only text for additional context
- Proper form labels linked to inputs with `for` attributes
- Keyboard navigation support (Tab, Escape, Enter)
- Focus states with clear visual indicators
- Proper color contrast ratios

### Design Fidelity

Close attention to the original design:

- Color-matched teal/turquoise brand palette (#007b67, #006252, #247c86)
- SVG background pattern from the provided assets
- Proper spacing, typography hierarchy, and visual rhythm
- Custom-styled form inputs and dropdowns

## Assumptions

1. **Presentational Only**: The form does not submit data or perform validation, as specified in the requirements
2. **Font Fallback**: Gibson font family is specified with Arial as the approved digital alternative
3. **No Backend**: This is a static HTML/CSS/JS implementation with no server-side processing
4. **Form Data**: All form fields are present but non-functional (no state management or submission)

## Tech Choices

### Pure HTML/CSS/JavaScript

- **No frameworks or build tools**: Simple, lightweight, and easy to deploy
- **No dependencies**: Fast loading times and minimal maintenance
- **Vanilla JavaScript**: For hamburger menu functionality with event delegation and proper cleanup

### Why No Package.json?

- This is a static website that doesn't require Node.js, npm, or any build process
- All assets (HTML, CSS, JS, SVG) are served directly to the browser
- Eliminates complexity and deployment overhead for a presentational form
- Can be hosted on any static file server or CDN

### CSS Architecture

- Single `styles.css` file with clear section organization
- Mobile-first media queries using `min-width`
- Gibson font family with Arial fallback as specified
- BEM-like naming conventions for clarity

### JavaScript Architecture

- Single `script.js` file handling:
  - Mobile menu toggle functionality
  - Click outside to close menu
  - Escape key to close menu
  - Window resize handler to reset menu state
  - Body scroll lock when menu is open
- Event listeners with proper cleanup considerations

## File Structure

```
.
├── index.html          # Main HTML structure
├── styles.css          # All styles (mobile-first)
├── script.js           # Hamburger menu functionality
└── README.md           # This file
```

## Running the Project

Simply open `index.html` in a web browser:

1. **Local File System**: Double-click `index.html`
2. **Local Server** (recommended for testing):

   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (if you have it)
   npx http-server
   ```

3. Visit `http://localhost:8000` in your browser

## Key Features

### Responsive Navigation

- Mobile: Hamburger menu with slide-in overlay navigation
- Desktop: Horizontal navigation bar with utility links

### Form Elements

- Title dropdown with custom arrow styling
- Text inputs for forename, surname, email, and mobile
- Date input with DD/MM/YYYY placeholder
- Preferred language dropdown
- Password input with masked characters
- Sign up button
- Login link for existing users

### Accessibility Features

- Accessibility toolbar with text size controls
- Language switcher (English/Cymraeg)
- Keyboard navigation support
- ARIA labels and roles
- Focus management in mobile menu
- Semantic HTML structure

### Visual Elements

- Official Social Care Wales SVG logo
- Navigation icons for each menu item
- Decorative SVG background pattern
- Custom dropdown styling with SVG arrows
- Check mark icons for feature list
- Hover and focus states

## Future Enhancements

If this were to become a functional form:

- Form validation (client and server-side)
- Backend API integration
- Password strength indicator
- CSRF protection
- Rate limiting
- Email verification flow
- Error messaging
- Success confirmation page
- Analytics integration
- Welsh language translation toggle
- Progressive Web App (PWA) features
