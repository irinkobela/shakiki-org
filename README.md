# Georgian Migraine Association Website – README

## 🌍 Project Overview
This repository contains the source code for the official website of the **Georgian Migraine Association** (GMA). It is a modern, responsive, and multilingual single-page React application serving as an informational and advocacy platform for migraine patients, their families, and healthcare professionals across Georgia.

The website aims to:
- Disseminate accurate, accessible information on migraine.
- Offer support resources and community initiatives.
- Advocate for improved migraine care, treatment access, and awareness nationwide.

Website: [shakiki.org](http://shakiki.org)

## 📈 Key Features
- **Multilingual Support**: Fully localized in Georgian (`ka`) and English (`en`).
- **Responsive Design**: Built with Tailwind CSS for optimal viewing across all screen sizes.
- **Modern UX**: Includes scroll-triggered animations and dark mode toggle.
- **Component-Based Architecture**: Developed with React for scalability and maintainability.
- **Client-Side Routing**: React Router DOM allows seamless transitions between sections.
- **Optimized Assets**: Images and content served in WebP and modern formats for fast loading.

## 🧑‍🤝‍🧑 Organizational Background
The Georgian Migraine Association is a non-profit (non-commercial) legal entity founded on July 1, 2025 in Tbilisi, Georgia, at Lviv Street 73. Its objectives include:
- Uniting patients, families, and professionals affected by migraines.
- Offering peer and expert support groups.
- Advocating for improved patient care.
- Collaborating with national and international organizations (e.g., EMHA).
- Running awareness campaigns and annual events like Migraine Awareness Day (Sept 12).

More details are available in the official charter (see `წესდება.docx`).

## 🛠 Technologies Used
- **React** – Frontend framework for building dynamic user interfaces.
- **Vite** – High-speed build tool and development server.
- **Tailwind CSS** – Utility-first CSS framework.
- **React Router DOM** – Client-side routing.
- **gh-pages** – Deployment via GitHub Pages.

## 📚 Local Setup Instructions
To run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/irinkobela/shakiki-org.git
   cd shakiki-org
   ```

2. **Install dependencies** *(requires Node.js and npm)*:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Then open: [http://localhost:5173](http://localhost:5173)

## 🚀 Deployment to GitHub Pages
This app is set up for deployment with `gh-pages`:

### 1. **vite.config.js**:
Ensure the base matches your repo name:
```js
export default defineConfig({
  plugins: [react()],
  base: '/shakiki-org/'
});
```

### 2. **src/main.jsx**:
Make sure the basename is set correctly:
```jsx
<BrowserRouter basename="/shakiki-org">
  <App />
</BrowserRouter>
```

### 3. **Deploy**:
```bash
npm run deploy
```
This runs `npm run build` and pushes the `dist/` folder to the `gh-pages` branch.

### 4. **Configure GitHub Pages**:
- Go to your GitHub repository > Settings > Pages.
- Set source to `gh-pages` branch and folder to `/ (root)`.
- Visit: `https://<your-username>.github.io/shakiki-org/`

## 👥 How to Contribute
We welcome contributions to improve the website, expand resources, or fix bugs.

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make and commit your changes.
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

## 🌿 License & Non-Profit Status
The Georgian Migraine Association is a registered **non-profit (non-commercial)** legal entity in Georgia. All proceeds and grants go directly toward achieving its stated objectives. Redistribution of resources or income to founders or members is strictly prohibited.

## 🚫 Legal Notes
- Any revenue is exclusively used to advance the organization's goals.
- The association is governed by a dual-leadership model (President and Founders).
- Reorganization or liquidation may occur only with unanimous consent.

For full legal structure and operating principles, refer to the attached founding document: `წესდება.docx`.

---

Made with ❤️ by the Georgian Migraine Association Team
