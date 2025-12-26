# Portfolio - React + Vite Application

A stunning, fully-functional portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases a unique design with directional navigation and smooth transitions.

## 🎨 Design Features

- **Central Hub Navigation**: A unique central hub interface with directional navigation to all portfolio sections
- **Dark Mode Design**: Sleek dark theme with purple (#3713ec) as the primary color
- **Smooth Animations**: Subtle animations and transitions throughout
- **Responsive Layout**: Fully responsive design that works on all devices
- **Modern UI Components**: Clean, professional components with glassmorphism effects

## 📁 Portfolio Sections

1. **Central Hub** (`/`) - Main navigation interface with directional buttons
2. **About Me** (`/about`) - Introduction, skills, and personal interests
3. **Contact** (`/contact`) - Contact form with social links
4. **Professional Experience** (`/experience`) - Career timeline with achievements
5. **Education & Certifications** (`/education`) - Academic background and certifications
6. **Projects** (`/projects`) - Horizontal scrolling project showcase
7. **Project Details** (`/projects/:id`) - Detailed case studies for individual projects
8. **Tools & Technologies** (`/tools`) - Comprehensive skill showcase with proficiency levels

## 🚀 Technology Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS (CDN)** - Utility-first CSS framework
- **Google Fonts** - Manrope font family
- **Material Symbols** - Google's material design icons

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the project directory**
   ```bash
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The app will be running at `http://localhost:5174` (or another port if 5173 is in use)

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎯 Navigation Flow

The portfolio uses a unique directional navigation system:

```
                    ↑ About Me
                    |
Tools ← → Central Hub ← → Projects
                    |
                    ↓ Experience/Education
```

From About Me, you can scroll down to Contact. All sections have navigation back to the hub or to related sections.

## 🎨 Custom Styling

The application uses Tailwind CSS via CDN with custom configuration:

- **Primary Color**: `#3713ec` (Purple)
- **Background Dark**: `#131022`
- **Card Dark**: `#1c192b`
- **Border Dark**: `#3f3b54`
- **Font Family**: Manrope

## 📂 Project Structure

```
portfolio-app/
├── public/
├── src/
│   ├── pages/
│   │   ├── CentralHub.jsx     # Main navigation hub
│   │   ├── AboutMe.jsx         # About section
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Education.jsx       # Education timeline
│   │   ├── Experience.jsx      # Work experience
│   │   ├── Projects.jsx        # Projects gallery
│   │   ├── ProjectDetails.jsx  # Project case study
│   │   └── Tools.jsx           # Skills showcase
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
└── package.json
```

## ✨ Key Features

### Central Hub
- Unique center-aligned navigation with directional buttons
- Pulsing gradient effect
- Grid pattern background
- Animated navigation indicators

### Projects Section
- Horizontal scrolling carousel
- Project cards with hover effects
- Tag system for technologies
- Smooth scroll behavior

### Experience Timeline
- Vertical timeline with dot indicators
- Color-coded current/past positions
- Skill tags for each role
- Gradient connectors

### Skills Showcase
- Visual proficiency bars (5-level system)
- Categorized sections (Languages, Frameworks, Tools)
- Hover effects on skill cards
- "Always Learning" section

## 🔧 Customization

To customize the portfolio for your own use:

1. **Update Personal Information**
   - Edit text content in each page component
   - Replace placeholder images with your own
   - Update social media links

2. **Change Colors**
   - Edit the Tailwind config in `index.html`
   - Modify the `primary` color value

3. **Add/Remove Sections**
   - Add new route in `App.jsx`
   - Create new page component in `src/pages/`
   - Update navigation in Central Hub

4. **Modify Projects**
   - Edit the `projects` array in `Projects.jsx`
   - Add your own project data and images

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or feedback, please use the contact form in the application.

---

**Built with ❤️ using React + Vite**
