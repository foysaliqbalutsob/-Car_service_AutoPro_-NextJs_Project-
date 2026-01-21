# 🏎️ AutoPro: Advanced Fleet & Service Management System

AutoFleet is a high-performance, full-stack enterprise solution designed for vehicle tracking, service management, and real-time fleet diagnostics. Built with the **Next.js 15 App Router**, it provides a seamless user experience with real-time data synchronization and a robust administrative dashboard.

---

## 🛠️ Technology Stack & Architecture

I chose this stack to ensure scalability, type safety, and optimized performance:

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend** | Next.js 15 (App Router) | SSR/ISR for performance and SEO-friendly dashboards. |
| **Backend** | Next.js API Routes | Serverless architecture to reduce maintenance and costs. |
| **Database** | MongoDB Atlas | Flexible JSON-like document schema for dynamic vehicle data. |
| **State Management** | Zustand | Lightweight and faster alternative to Redux for global loading/UI states. |
| **Styling** | Tailwind CSS + DaisyUI | For rapid UI development and consistent design system. |
| **Networking** | Axios + Interceptors | Centralized API logic and automatic loading state triggers. |
| **Auth** | NextAuth.js | Secure OAuth and credential-based authentication. |

---

## 🏗️ System Architecture



The application follows a **Modular Architecture**:
1. **API Layer:** Centralized `lib/axios.js` with request/response interceptors to manage a global `isLoading` state.
2. **Context Layer:** Theme and Auth providers wrap the application for consistent state access.
3. **Data Layer:** MongoDB client with `clientPromise` to prevent multiple database connections during hot reloads in development.

---

## 🚀 Key Features

### 1. Unified Dashboard
A fully responsive command center for users to monitor their fleet health and service history at a glance.


### 2. Fleet Management (CRUD)
- **Real-time Synchronization:** Add, Edit, or Delete vehicles without refreshing the page using optimized state updates.
- **Dynamic Filtering:** View vehicles by status (Active, In Service, Inactive).

### 3. Smart Service Tracking
- Automated service scheduling based on mileage.
- Status tracking with color-coded indicators.

### 4. Global UX Enhancements
- **Global Loader:** A custom-built Zustand-powered loader that triggers on every API call.
- **Dark/Light Mode:** Full implementation using Tailwind's `dark:` classes and LocalStorage persistence.

---

## 📦 Key Packages Used

- `axios`: For robust HTTP requests.
- `zustand`: For minimalist state management.
- `react-icons`: For a clean, visual-first UI.
- `sweetalert2`: For professional-grade user notifications and confirmations.
- `next-auth`: For secure, industry-standard authentication.
- `mongodb`: Official driver for high-performance database queries.

---

## 🔧 Demo
Live Link: https://car-management-topaz-eta.vercel.app/
