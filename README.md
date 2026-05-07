# Tripical 🌴

**Tripical** is a modern, high-performance travel and adventure exploration platform designed to help users discover breathtaking destinations and plan their next unforgettable journey.

![Tripical Banner](src/assets/beach.jpeg)

## 🚀 Features

- **Interactive Destination Showcases:** Explore popular spots like Coastal Exploration, Jungle Canyons, and Sunset Experiences with stunning visuals.
- **Seamless Navigation:** Smooth, client-side routing using React Router 7.
- **Dynamic Animations:** Fluid and engaging user interface powered by Framer Motion.
- **Automated Contact Form:** Secure and validated contact form using React Hook Form and Zod, integrated with Netlify Functions and Resend for instant email notifications.
- **Responsive Design:** Fully optimized for all devices using Tailwind CSS 4.
- **Modern Tech Stack:** Built with React 19 and Vite 7 for ultimate speed and developer experience.

## 🛠️ Tech Stack

- **Frontend:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite 7](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Backend/Serverless:** [Netlify Functions](https://www.netlify.com/products/functions/)
- **Email Service:** [Resend](https://resend.com/)

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) (optional, for local function testing)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tripical.git
   cd tripical
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your Resend API key:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

### Running Locally

To start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

To test Netlify Functions locally:
```bash
npm run dev:netlify
```

## 🏗️ Project Structure

```text
├── netlify/
│   └── functions/        # Serverless functions (Email handling)
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # Reusable UI components
│   ├── pages/            # Main application pages
│   ├── App.tsx           # Main application entry and routing
│   └── main.tsx          # React mounting point
├── netlify.toml          # Netlify configuration
└── vite.config.ts        # Vite configuration
```

## 🚀 Deployment

This project is optimized for deployment on **Netlify**.

1. Connect your GitHub repository to Netlify.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.
4. Add the `RESEND_API_KEY` to your Netlify Environment Variables.

## 📄 License

This project is MIT licensed.

---

Developed with ❤️ for adventurers everywhere.
