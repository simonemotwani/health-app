# Patient Profile UI

A React-based Patient Profile interface built as part of a front-end assessment. This project demonstrates component structure, layout fidelity, and styling accuracy based on the provided Figma design.

## 🛠 Tech Stack

- **Framework:** React with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Custom SVG components

## 📁 Project Structure

```
health-app/
├── node_modules/
├── public/
│   └── images/
│       ├── Background.png
│       ├── Range of Motion Restoration 1.png
│       └── vite.svg
├── src/
│   ├── components/
│   │   ├── BackgroundVectors.tsx
│   │   ├── FloatingActionButton.tsx
│   │   ├── Header.tsx
│   │   ├── HEPSummary.tsx
│   │   ├── Layout.tsx
│   │   ├── PatientEducation.tsx
│   │   ├── PatientProfile.tsx
│   │   ├── Sidebar.tsx
│   │   └── StatPanel.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── text
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js 
- npm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd health-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start 
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`


## 🗺 Routing

- **Route:** `/patients/:id` → Renders the complete Patient Profile UI
- **Default redirect:** `/` → Redirects to `/patients/1`

## 🎨 Design Reference

The UI closely follows the provided Figma design specifications:
- Exact spacing and typography measurements
- Consistent color palette and visual hierarchy  
- Proper component proportions and layouts


