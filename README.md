# Sushant S Mutta | Portfolio

A high-performance, F1-themed portfolio website built with Next.js and Vanilla CSS.

## 🏎️ Features

- **F1 Aesthetic**: Dark mode with neon red accents (`#ff1e00`) and glassmorphism effects.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Interactive Components**:
  - **Hero Section**: Animated entrance and resume download.
  - **Skills**: Categorized technical skills with custom icons.
  - **Projects**: Grid layout showcasing key projects with GitHub/Live links.
  - **Experience**: Timeline view of professional history.
  - **Contact**: Direct links to Email, LinkedIn, and GitHub.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: Vanilla CSS (CSS Modules & Variables)
- **Icons**: `react-icons`
- **Font**: Outfit (via `next/font`)

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sushantmutta/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & F1 theme variables
│   ├── layout.tsx       # Root layout with font setup
│   └── page.tsx         # Main page assembly
├── components/
│   ├── Hero.tsx         # Hero section with resume link
│   ├── Skills.tsx       # Skills grid with icons
│   ├── Projects.tsx     # Project showcase
│   ├── Experience.tsx   # Work history timeline
│   ├── Contact.tsx      # Contact details
│   └── ...
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
