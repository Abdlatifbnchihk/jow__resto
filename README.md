# Jow Cafe

A modern, responsive single-page cafe website built with React and Vite, showcasing the cafe's menu, services, testimonials, and contact information.

## Description

Jow Cafe is a visually appealing website designed to attract customers to a local cafe. It features smooth animations, responsive design, and an intuitive user interface to provide an engaging experience for visitors browsing the cafe's offerings.

## Features

- **Hero Section**: Welcoming banner with eye-catching visuals
- **About Section**: Information about the cafe's story and values
- **Menu Section**: Display of food and drink items with categories
- **Services Section**: Details on services offered by the cafe
- **Testimonials**: Customer reviews and feedback
- **Contact Section**: Contact form and cafe location details
- **Banner**: Additional promotional content
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Animations**: Smooth scroll animations using AOS library
- **Scroll to Top**: Convenient navigation button

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: AOS (Animate On Scroll)
- **Sliders/Carousels**: Swiper
- **Icons**: Heroicons
- **Linting**: ESLint

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd jow-cafe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint for code quality checks

## Project Structure

```
jow-cafe/
├── public/
│   ├── img/          # Static images (banners, hero, etc.)
│   └── Font/         # Custom fonts
├── src/
│   ├── Components/   # React components
│   │   ├── About.jsx
│   │   ├── Banner.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Main.jsx
│   │   ├── Menu.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Services.jsx
│   │   └── Testimonial.jsx
│   ├── assets/       # Static assets
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
