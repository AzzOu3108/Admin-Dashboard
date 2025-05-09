# Dashboard Application

## Overview
This is a responsive dashboard application built with React and Tailwind CSS. It includes various pages for managing and analyzing data, such as an overview, products, users, sales, orders, analytics, and settings.

---

## Project Structure
The project is organized into the following key directories and files:

### `src` Directory
- **`App.jsx`**: The main application file that defines the layout and routes for the app.
- **`pages/`**: Contains the main pages of the application.
  - **`OverviewPage.jsx`**: Displays an overview of key metrics.
  - **`ProductsPage.jsx`**: Manages product-related data.
  - **`UsersPage.jsx`**: Manages user-related data.
  - **`SalesPage.jsx`**: Displays sales data and trends.
  - **`OrderPage.jsx`**: Manages order-related data.
  - **`AnalyticsPage.jsx`**: Displays analytics and insights.
  - **`SettingsPage.jsx`**: Manages user settings and configurations.
- **`components/`**: Contains reusable components used across the app.
  - **`SideBar.jsx`**: The sidebar navigation menu.
  - **`settings/`**: Contains components for the settings page:
    - **`Profile.jsx`**: Displays and manages user profile information.
    - **`Notifications.jsx`**: Manages notification preferences.
    - **`Security.jsx`**: Handles security settings like two-factor authentication.
    - **`ConnectedAccounts.jsx`**: Manages connected social accounts.
    - **`DangerZone.jsx`**: Allows users to delete their account.

---

## Key Features

### Responsive Design
- The app is fully responsive and adjusts to different screen sizes using Tailwind CSS utility classes.

### Sidebar Navigation
- A collapsible sidebar for navigating between pages.

### Pages
- **Overview Page**: Displays key metrics and stats.
- **Products Page**: Allows users to manage products.
- **Users Page**: Displays user data and stats.
- **Sales Page**: Shows sales trends and performance.
- **Order Page**: Manages orders and displays order stats.
- **Analytics Page**: Provides insights and analytics.
- **Settings Page**: Allows users to configure their profile, notifications, security, and connected accounts.

---

## Routing
The app uses `react-router-dom` for routing. The routes are defined in `App.jsx`:

```jsx
<Routes>
  <Route path="/" element={<OverviewPage />} />
  <Route path="/products" element={<ProductsPage />} />
  <Route path="/users" element={<UsersPage />} />
  <Route path="/sales" element={<SalesPage />} />
  <Route path="/orders" element={<OrderPage />} />
  <Route path="/analytics" element={<AnalyticsPage />} />
  <Route path="/settings" element={<SettingsPage />} />
</Routes>
```

---

## How to Run the App

### 📦 1. Clone the Repository

```bash
git clone https://github.com/AzzOu3108/Admin-Dashboard
cd DASHBOERD
```

### 📥 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
npm install
```

### 🚀 3. Start the Development Server

```bash
npm run dev
```

> This will start the app at `http://localhost:5173` (default for Vite). You can now view the dashboard in your browser.

---

## 🔧 Build for Production

To generate a production build:

```bash
npm run build
```

Then preview the production build locally:

```bash
npm run preview
```
