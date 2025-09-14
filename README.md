# Shalom's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and is optimized for deployment on Netlify.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Beautiful UI**: Tailwind CSS with custom design system
- **Smooth Animations**: Framer Motion for delightful interactions
- **Responsive Design**: Mobile-first approach with perfect scaling
- **Dark Mode**: Built-in dark/light theme support
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Performance**: Optimized bundle with code splitting
- **Netlify Ready**: Pre-configured for easy deployment

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Netlify

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd shaloms-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Your site will be deployed automatically on every push to main

### Manual Build

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects showcase
│   └── Contact.tsx     # Contact form
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Colors
Edit the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary colors
  },
  dark: {
    // Your dark theme colors
  }
}
```

### Content
- Update personal information in each page component
- Replace placeholder project data in `Projects.tsx`
- Update contact information in `Contact.tsx` and `Footer.tsx`
- Modify the hero section in `Home.tsx`

### Styling
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind classes
- Custom animations are defined in `tailwind.config.js`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [Vite](https://vitejs.dev/) - Build tool
