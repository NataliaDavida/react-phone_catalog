# React Product Catalog (Phone & Gadget E-Commerce)

This is a fully functional responsive E-commerce web application for a product catalog (Phones, Tablets, and Accessories) built using React, TypeScript, and modern web development practices.

## 🚀 Live Demo
[DEMO LINK](https://nataliadavida.github.io/react-phone_catalog/)

---

## 🛠️ Tech Stack & Tooling

* **Frontend Core:** React (with Hooks, Context API & Reducers for State Management), TypeScript
* **Routing:** React Router Dom (with `Root.tsx` entry point)
* **Styling:** SCSS Modules, Global SCSS Styles (variables, mixins, custom fonts)
* **Build & Quality Tools:** Vite, ESLint, Prettier

---
## 📂 Architecture & Project Structure

The project is organized with a clean, flat architecture optimized for reusability and scalability:

```text
src/
├── components/          # Layout and global components
├── pages/               # Application pages and views
├── shared/              # Reusable global UI elements
├── providers/           # React Context Providers & Reducers
├── server/              # Data fetching mock layer / API
├── types/               # TypeScript interfaces & types
├── utils/               # Helper utilities and functions
├── icons/ & images/     # Assets and vector graphics
└── App.tsx / Root.tsx   # Application entry & routing
```

### 🧩 Component Isolation Rule
Each standalone component is strictly isolated in its own folder containing:
* `index.ts` — Clean and unified component exports.
* `ComponentName.tsx` — Component core logic and JSX markup.
* `ComponentName.module.scss` — Scoped styling using CSS Modules.

---

## ✨ Features Implemented

### 🏪 Core Pages

#### 🏠 Home Page (`/`)
* **PicturesSlider:** Dynamic carousel featuring 5-second automatic rotation, infinity loop, navigation arrows, and pagination dashes.
* **Hot Prices Block:** Displays discounted products sorted dynamically by absolute discount value.
* **Brand New Block:** Displays the latest models sorted by production year using a reusable slider instance.
* **Shop by Category:** Quick-navigation links to dedicated sub-catalogs.

#### 📱 Product Catalog Pages (`/phones`, `/tablets`, `/accessories`)
* **Navigation:** Custom dynamic breadcrumbs (`TopNav`) and responsive category headers.
* **Sorting & Pagination:** Advanced filtering (Newest, Alphabetically, Cheapest) synced directly with URL search params (`?sort=`, `?page=`, `?perPage=`).
* **Data Flow:** Asynchronous data fetching backed by a custom `Loader` component and robust error handling.

#### 🔍 Product Details Page (`/product/:productId`)
* **Interactive UI:** Dynamic attribute selection (Color, Capacity) via customized UI Kit radio buttons.
* **Media Gallery:** Image viewer with an interactive main image switcher.
* **UX Extras:** Fully functional browser-like "Back" button and a randomized "You may also like" product recommendation engine.

#### 🛒 Shopping Cart Page (`/cart`)
* **State Management:** Fully managed via `CartProvider` and `CartReducer` for explicit action dispatching.
* **Interactions:** Real-time quantity adjustments (`+` / `-`), individual item removal (`x`), and auto-calculating price/item counters.
* **Checkout:** Simulation modal including automatic state-clearing mechanics upon purchase.

#### ❤️ Favorites Page (`/favorites`)
* **State Tracking:** Independent state tracking via `FavoritesProvider`, seamlessly synchronized with heart buttons on every `ProductCard`.

### ⚙️ Core Architecture & Shared Logic

* 💾 **Global Persistent State:** Cart items and Favorite products automatically synchronize with `localStorage` inside their respective providers.
* 🗺️ **Adaptive Navigation:** Sticky `Header` containing active route highlighting, real-time cart/favorite item counters, and a responsive mobile `BurgerMenu`.
* 🔍 **Global Search Input:** Appears in the header dynamically when the active page contains a `ProductsList`. Features a built-in **Debounce** mechanism to optimize rendering and syncs with `?query=` URL parameters.

---

### 🔧 Getting Started

Follow these steps to clone the repository and run the development server locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nataliadavida/react-phone_catalog.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd react-phone-catalog
   ```

3. **Installation:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
