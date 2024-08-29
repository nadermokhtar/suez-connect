# SuezConnect Website Project

## Project Overview

SuezConnect is a company founded by Nader Mokhtar, focused on bridging tech opportunities between the US and the Middle East & North Africa (MENA) region. This project is a Next.js website with TypeScript and Daisy UI, designed to showcase SuezConnect's services and facilitate client engagement.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   └── social-feed/
│       └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── BookingForm.tsx
├── styles/
│   └── globals.css
└── lib/
    └── api.ts (for fetching social media posts)
```

## Daisy UI Theme

The project uses a custom Daisy UI theme named "desert" with the following color scheme:

```javascript
daisyui: {
  themes: [
    {
      desert: {
        "primary": "#d9a566",
        "secondary": "#8c7851",
        "accent": "#e6c8a0",
        "neutral": "#5c4f3d",
        "base-100": "#f5e6d3",
        "info": "#3abff8",
        "success": "#36d399",
        "warning": "#fbbd23",
        "error": "#f87272",
      },
    },
  ],
},
```

## Pages and Their Purposes

1. Home Page (src/app/page.tsx):
   - Provide a brief introduction to SuezConnect
   - Display an overview of services
   - Include a prominent call-to-action for booking consultations

2. About Page (src/app/about/page.tsx):
   - Present detailed information about SuezConnect
   - Highlight Nader Mokhtar's background and expertise
   - Articulate the company's mission and values

3. Services Page (src/app/services/page.tsx):
   - List and describe all services offered by SuezConnect
   - Emphasize the benefits of outsourcing through SuezConnect
   - Showcase case studies or success stories

4. Contact Page (src/app/contact/page.tsx):
   - Feature a contact form for general inquiries
   - Include a booking form to schedule consultations
   - Display SuezConnect's contact information

5. Blog Page (src/app/blog/page.tsx):
   - Present a list of blog posts
   - Provide individual pages for each blog post

6. Social Feed Page (src/app/social-feed/page.tsx):
   - Display recent posts from TikTok, YouTube, and Instagram
   - Integrate with social media APIs to fetch and display content

## TODO List

1. [x] Set up the basic Next.js project structure
2. [x] Implement the custom Daisy UI theme
3. [x] Create reusable components (Header, Footer, BookingForm)
4. [x] Develop the Home page with key information and CTA
5. [x] Build the About page with company and founder details
6. [x] Create the Services page with comprehensive service descriptions
7. [x] Implement the Contact page with forms and contact information
8. [x] Develop the Blog page and individual blog post functionality
9. [ ] Integrate social media APIs for the Social Feed page
10. [ ] Ensure responsive design across all pages
11. [ ] Implement SEO best practices
12. [ ] Set up analytics to track user engagement
13. [ ] Perform thorough testing across different devices and browsers
14. [ ] Optimize performance and loading times
15. [ ] Prepare deployment scripts and documentation

## Getting Started

To run the project:

1. Ensure you have Node.js and pnpm installed
2. Clone the repository
3. Run `pnpm install` to install dependencies
4. Use `pnpm dev` to start the development server
5. Open `http://localhost:3000` in your browser

## Additional Notes

- The project uses TypeScript for enhanced type safety
- Daisy UI is used for UI components and styling
- The website aims to attract clients, showcase services, and facilitate easy booking of consultations
- Social media integration is a key feature to display latest content from TikTok, YouTube, and Instagram