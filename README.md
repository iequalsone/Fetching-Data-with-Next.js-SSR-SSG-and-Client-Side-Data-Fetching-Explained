# Fetching Data with Next.js – SSR, SSG, and Client-Side Data Fetching Explained

Welcome to the **Fetching Data with Next.js** repository! This repository is a companion to the LinkedIn article on **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)**, and **Client-Side Data Fetching** in Next.js. It contains hands-on examples showcasing how to effectively fetch and manage data in a Next.js application using **TypeScript** and best practices.

---

## 📖 Overview

This repository provides practical, real-world examples to demonstrate how to:

- **Server-Side Rendering (SSR):** Fetch data at request time for highly dynamic pages.
- **Static Site Generation (SSG):** Pre-render pages at build time for faster performance.
- **Client-Side Fetching:** Fetch data dynamically in the browser for interactive features.

Each example follows modern coding standards and is structured using Next.js’ **App Router** introduced in Next.js 13+.

---

## 📂 Folder Structure

The project follows a modular structure for clarity and maintainability:

```
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── ssr/
│   │   ├── page.tsx
│   ├── ssg/
│   │   ├── page.tsx
│   ├── client/
│       ├── page.tsx
│
├── components/
│   ├── DataCard.tsx
│   ├── ErrorMessage.tsx
│   ├── Loader.tsx
│
├── lib/
│   ├── fetchData.ts
│
├── types/
│   ├── apiTypes.ts
```


---

## ✨ Features

### 🔄 **Server-Side Rendering (SSR)**
- Example Path: `src/app/ssr/page.tsx`
- Fetches data during every page request using `fetch()` in a server context.
- Ideal for dynamic pages where data changes frequently.

### 🛠 **Static Site Generation (SSG)**
- Example Path: `src/app/ssg/page.tsx`
- Pre-fetches data at build time using `getStaticProps` equivalent.
- Best for pages with content that doesn’t change often.

### 🌐 **Client-Side Fetching**
- Example Path: `src/app/client/page.tsx`
- Fetches data dynamically in the browser using a custom hook (`useClientData`).
- Perfect for interactive or user-specific data.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn**
- **TypeScript**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iequalsone/Fetching-Data-with-Next.js-SSR-SSG-and-Client-Side-Data-Fetching-Explained
   cd Fetching-Data-with-Next.js-SSR-SSG-and-Client-Side-Data-Fetching-Explained
   ```
2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```
4. Open http://localhost:3000 to view the app.

---

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/iequalsone/Fetching-Data-with-Next.js-SSR-SSG-and-Client-Side-Data-Fetching-Explained/blob/main/LICENSE) file for details.

---

## 💬 Contributing

Contributions are welcome! Feel free to fork the repository, create feature branches, and submit pull requests. Suggestions for new examples or optimizations are appreciated.

---

Thank you for exploring this repository! Dive into the world of efficient data fetching with **Next.js** and **TypeScript**. If you enjoyed this project, check out the accompanying [LinkedIn article](https://www.linkedin.com/pulse/fetching-data-nextjs-ssr-ssg-client-side-explained-jon-howard-pgfde/). Happy coding! 🚀


