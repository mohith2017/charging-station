# Charging Station Project

A Next.js application for managing electric vehicle charging stations with a modern, dark-themed UI.

## Live Demo

[App Live Demo](https://charging-station.vercel.app/)

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/mohith2017/charging-station.git
cd charging-station
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure Authentication:

```bash
# Create a .env.local file with the following variables
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here # Generate using `openssl rand -base64 32`

# Add your OAuth provider credentials (if using)
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
# Add other provider credentials as needed
```

## Local Development Instructions

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features Implemented

- **Modern UI Components**: Custom-built components with dark theme support
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS
- **Font Integration**: Custom font implementation using Geist Sans and Geist Mono
- **Form Components**: 
  - Select dropdowns
  - Input fields
  - Buttons with hover states
- **Styling**: 
  - Custom color scheme with CSS variables
  - Consistent spacing and typography
  - Smooth transitions and animations
- **Authentication**: 
  - Next-Auth integration for secure authentication
  - Multiple provider support (OAuth, Credentials, etc.)
  - Protected routes and API endpoints
  - Session management

## Screens implemented

- Dashboard Screen
- Variable editing Slide-Over Card Screen
- Details Screen
- Sign in Screen

## Technical Decisions and Trade-offs

### Architecture
- **Next.js App Router**: Chosen for server-side rendering and modern React features
- **Tailwind CSS**: Used for utility-first styling and rapid development
- **Shadcn UI**: Used for pre-built components
- **CSS Variables**: Implemented for theme customization and maintainability
- **Next-Auth**: Implemented for secure, scalable authentication

### Dependencies
- Next.js 14+: For server-side rendering and modern React features
- Tailwind CSS: For utility-first styling
- Radix UI: For accessible component primitives in Shadcn UI
- Next-Auth: For authentication and session management

### Trade-offs Made
1. **Build Size vs Features**:
   - Included full Tailwind CSS utilities for development speed
   - Custom font hosting increases initial bundle size but improves reliability

2. **Styling Approach**:
   - Chose Tailwind and Shadcn UI over CSS-in-JS for better build performance
   - Mixed utility classes with custom CSS variables for theming

3. **Authentication Strategy**:
   - Chose Next-Auth for rapid implementation and security
   - Trade-off between complexity and feature completeness

## Known Limitations

1. **Browser Support**:
   - Modern browser features required
   - Limited fallback support for older browsers

2. **Development Mode**:
   - Source maps and development tools increase bundle size
   - Production optimization needed for deployment

3. **Font Loading**:
   - Initial font swap might be visible
   - Fallback fonts configured for better UX

4. **Authentication**:
   - Session persistence requires database setup
   - Some providers require additional configuration
   - Rate limiting may apply to OAuth providers

## Time Spent

- Initial setup: 1/2 hour
  - Next.js configuration
  - Tailwind CSS setup
  - Font integration

- Feature development: 5 hours
  - Component development
  - Theme implementation
  - Responsive design

- Testing and bug fixes: 1/2 hour
  - Browser testing
  - Responsive testing
  - Performance optimization

- Authentication setup: 1 hour
  - Next-Auth configuration
  - Provider setup
  - Protected routes implementation

Total time: 7 hours

## Deployment

The easiest way to deploy this application is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
