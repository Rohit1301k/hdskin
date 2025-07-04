# HD Skin & Hair Clinic Website

A modern, responsive website for HD Skin & Hair Clinic featuring services, academy courses, and online appointment booking.

## Features

- Responsive design optimized for all devices
- Modern UI with smooth animations
- Service showcase with detailed information
- Academy course listings
- Before/After treatment gallery
- Testimonials slider
- Online appointment booking system
- WhatsApp integration
- Google Maps integration
- Instagram feed integration (to be implemented)

## Setup Instructions

1. Clone the repository:
```bash
git clone [repository-url]
cd hdskin
```

2. Customize the content:
   - Replace placeholder images in the `images/` directory
   - Update contact information in `index.html`
   - Modify service details and course information
   - Add your Google Maps embed code
   - Update WhatsApp number in links

3. Testing locally:
   - Open `index.html` in a web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## Customization Guide

### Colors
The website uses a customizable color scheme. Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #4a90e2;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
    --light-bg: #f8f9fa;
    --dark-bg: #343a40;
}
```

### Images
- Place your images in the `images/` directory
- Recommended sizes:
  - Hero banner: 1920x1080px
  - Service images: 800x600px
  - Gallery images: 800x600px
  - Doctor's profile: 600x800px

### Forms
The appointment form is set up to be handled by your backend server. Update the form handling in `js/main.js`:
```javascript
// Form submission
if (form.checkValidity()) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Replace with your API endpoint
    fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}
```

### Social Media Integration
1. Update WhatsApp number:
   - Find all instances of `https://wa.me/your-number`
   - Replace with your WhatsApp business number

2. Instagram Feed:
   - Add your Instagram API credentials
   - Implement the feed integration in the gallery section

### Google Maps
Replace the iframe src in the contact section with your Google Maps embed code:
```html
<iframe src="https://www.google.com/maps/embed?pb=your-embed-code"></iframe>
```

## Dependencies

- Bootstrap 5.3.0
- Font Awesome 6.0.0
- Swiper.js (latest)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. #   h d s k i n  
 