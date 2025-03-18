# Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS. This website showcases my work as a data scientist focused on social impact.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 📝 Blog section
- 💼 Project portfolio
- 📄 Resume page
- 🔍 SEO optimized

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
personal-website/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── projects/          # Projects page
│   ├── resume/           # Resume page
│   └── page.tsx          # Home page
├── components/            # React components
├── public/               # Static assets
├── styles/              # Global styles
├── types/               # TypeScript type definitions
└── lib/                 # Utility functions
```

## Customization

1. Update the content in the respective page components
2. Modify the theme colors in `tailwind.config.ts`
3. Add your own images to the `public` directory
4. Update the metadata in `app/layout.tsx`

## Deployment

The website can be deployed to any platform that supports Next.js, such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 