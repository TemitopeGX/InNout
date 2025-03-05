# InNout - Food Delivery & Supermarket Landing Page

![InNout Logo](/public/logo.png)

A modern, responsive landing page for InNout, a food delivery and supermarket service built with Next.js 13+, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built with Next.js 13+ for optimal performance
- **SEO Ready**: Implements SEO best practices with Next.js metadata
- **Progressive Web App**: Includes PWA configuration
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Dark Mode Support**: Elegant dark mode implementation
- **Animation**: Smooth animations using Framer Motion
- **Type Safety**: Built with TypeScript for better development experience

## 🚀 Live Demo

[View Live Demo](https://innout.vercel.app)

## 🛠️ Tech Stack

- [Next.js 13+](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Code Formatting

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/food-landingpage.git
```

2. Navigate to the project directory:

```bash
cd food-landingpage
```

3. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

4. Create a `.env.local` file in the root directory and add your environment variables:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
food-landingpage/
├── public/             # Static files
├── src/
│   ├── app/           # App router pages
│   ├── components/    # React components
│   └── styles/        # Global styles
├── .env.example       # Environment variables example
├── package.json       # Dependencies and scripts
└── README.md         # Project documentation
```

## 🎨 Key Components

- **Navbar**: Responsive navigation with mobile menu
- **Hero Section**: Engaging hero section with CTA buttons
- **Services**: Showcase of delivery services
- **Menu Gallery**: Food items display with hover effects
- **Testimonials**: Customer reviews section
- **Footer**: Comprehensive footer with contact information
- **Cookie Consent**: GDPR compliant cookie consent
- **Contact Form**: Interactive contact form

## 🔧 Configuration

### Metadata

Update the metadata in `src/app/layout.tsx` for SEO:

```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  // ... other metadata
};
```

### Styling

Tailwind CSS configuration can be modified in `tailwind.config.js`:

```javascript
module.exports = {
  // ... your custom configuration
};
```

## 📱 Progressive Web App

The website is configured as a PWA. Update the PWA configuration in:

- `public/manifest.json`
- `public/service-worker.js`

## 🚀 Deployment

The project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy!

## 📄 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - [GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 📞 Support

For support, email support@innout.com or join our Slack channel.

## 🔄 Updates

Stay tuned for updates:

- [ ] Add authentication
- [ ] Implement online ordering
- [ ] Add payment integration
- [ ] Real-time order tracking

---

Made with ❤️ by [Your Name](https://github.com/yourusername)
