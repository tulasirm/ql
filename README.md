# QuantaLeaps - IT Consulting & Services

A modern, responsive website built with Next.js for QuantaLeaps IT Consulting company, showcasing 20+ years of industry experience in identifying high-quality resources for enterprise needs.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark theme
- **Responsive**: Fully responsive design that works on all devices
- **Static Site Generation**: Built with Next.js for optimal performance
- **Interactive Contact Form**: Working contact form integrated with Formspree
- **Blog System**: Dynamic blog with pagination and detailed posts
- **Service Pages**: Dedicated pages for different IT services
- **SEO Optimized**: Built-in SEO optimization and meta tags

## 🛠 Tech Stack

- **Framework**: Next.js 13.4.12
- **Language**: JavaScript/React 18.2.0
- **Styling**: SCSS, Bootstrap
- **Form Handling**: Formspree
- **Deployment**: Static export ready
- **Icons**: Font Awesome, Ionicons

## 📁 Project Structure

```
├── public/                 # Static assets (images, fonts, CSS)
├── src/
│   ├── app/               # Next.js 13 App Router pages
│   ├── components/        # Reusable React components
│   ├── config/           # Configuration files
│   ├── data/             # Static JSON data
│   └── styles/           # Global styles and SCSS files
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd QL
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (creates static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Pages

- **Home**: Main landing page with hero section
- **About**: Company information and team details
- **Services**: IT consulting services offered
- **Technologies**: Technology stack and expertise
- **Insights**: Blog posts and industry insights
- **Contact**: Contact form and company information
- **Works**: Portfolio and case studies

## 📧 Contact Form

The contact form is integrated with Formspree for reliable email delivery:
- Form validation
- Spam protection with honeypot
- Success/error messaging
- Professional email notifications

## 🎨 Customization

### Colors and Branding
- Edit `/src/styles/main.scss` for global styles
- Update logos in `/public/img/`
- Modify theme colors in component styles

### Content
- Update company information in `/src/data/` JSON files
- Modify page content in respective component files
- Add new blog posts to `/src/data/blogs3.json`

## 🚀 Deployment

This project is configured for static export:

1. Build the project
```bash
npm run build
```

2. The static files will be generated in the `/out` directory

3. Upload the contents of `/out` to your web hosting service

### Hosting Options
- Netlify
- Vercel
- GitHub Pages
- Traditional web hosting (upload `/out` contents)

## 📱 Mobile Responsive

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:
```
NEXT_PUBLIC_FORMSPREE_ID=your-formspree-id
```

### SEO
- Page titles and descriptions are configured in each page file
- Meta tags are automatically generated
- Sitemap ready for search engines

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by QuantaLeaps.

## 📞 Support

For support and inquiries:
- Email: [Your Email]
- Website: [Your Website]
- Phone: [Your Phone]

---

Built with ❤️ by QuantaLeaps Team