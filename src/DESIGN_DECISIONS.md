# Design Decisions & Assumptions

## Project: Dashboard Feature  
## Author: Nilima Shinde  
## Date: 03/12/2025  

---

## 1. Overview
This document describes the assumptions made and the design decisions taken during the development of the Dashboard page and routing structure.

---

## 2. Assumptions

1. **React Router Version**
   - Using React Router V7.9.6 for navigation.

2. **Dashboard Page Role**
   - Dashboard will be the main page after login.
   - It will contain multiple UI components (Header, Sidebar, KPI's, Graph, Activities etc.).

3. **Data Flow**
   - Data is currently passed through React Router state.
   - Later, global state tools like Context API or Redux may be used.

4. **Mock Data**
   - Using mock data for now until backend APIs are available.

---

## 3. Design Decisions

### 3.1 Routing Structure
- Created a dedicated route `/dashboard`.
- Reason: clean structure and easier scalability.

```jsx
<Route path="/dashboard" element={<Dashboard userData={data} />} />
````

### 3.2 Component Structure

* Dashboard divided into smaller components to increase reusability and maintainability.

Example structure:

```
/Assets
/css
  /App.css
  /Dashboard.css
  /LeftNav.css
  /login.module.css
/pages
  /App.jsx
  /DashboardPage.jsx
  /LoginPage.jsx
  /NavBar.jsx
  /TopBar.jsx
/widgets
  /ActivityWidget.jsx
  /ChartWidget.jsx
  /StatWidget.jsx

```

### 3.3 Styling Approach

* Using CSS modules also External Css and Inline styling for learning purpose.

---

## 4. Next Steps

* Work on Left Navigation.
* Improve data handling if required.
* Add error handling for routes.

---

## 5. Questions (optional)

* Should we use Tailwind, MUI, or plain CSS for UI?
* Do we need to start global state management now?

```

 