# Project Structure Guide

This document outlines the recommended structure for the Smart Lab Equipments frontend.

## Directory Structure

```
src/
├── components/
│   ├── common/              # Reusable components (Header, Footer, Navigation, etc.)
│   │   └── *.jsx
│   └── *.jsx
│
├── pages/
│   ├── Home.jsx            # Homepage
│   ├── Dashboard.jsx       # Main dashboard
│   ├── Equipment.jsx       # Equipment management
│   └── *.jsx
│
├── routes/
│   └── index.jsx           # Route configuration
│
├── services/
│   ├── api.js              # Axios instance configuration
│   ├── equipment.js        # Equipment API calls
│   └── *.js
│
├── context/
│   ├── AuthContext.jsx     # Authentication context
│   ├── EquipmentContext.jsx # Equipment state context
│   └── *.jsx
│
├── data/
│   ├── constants.js        # Application constants
│   └── mockData.js         # Mock data for development
│
├── App.jsx                 # Root component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## File Naming Conventions

- **Components**: PascalCase with `.jsx` extension (e.g., `EquipmentList.jsx`)
- **Services/Utils**: camelCase with `.js` extension (e.g., `apiService.js`)
- **Styles**: camelCase with `.module.css` for scoped styles (e.g., `dashboard.module.css`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)

## Component Guidelines

### Functional Components
All components should be functional components using React Hooks:

```jsx
import React, { useState, useEffect } from 'react';

const MyComponent = ({ prop1, prop2 }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Side effects here
  }, []);

  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};

export default MyComponent;
```

### Component Organization
- Props at the top
- Hooks (useState, useEffect, etc.)
- Helper functions
- Event handlers
- Return JSX

## Services

API services should be organized by feature/domain:

```javascript
// services/equipment.js
import api from './api';

export const getEquipment = () => api.get('/equipment');
export const getEquipmentById = (id) => api.get(`/equipment/${id}`);
export const createEquipment = (data) => api.post('/equipment', data);
export const updateEquipment = (id, data) => api.put(`/equipment/${id}`, data);
export const deleteEquipment = (id) => api.delete(`/equipment/${id}`);
```

## State Management

Use React Context for:
- Authentication state
- User information
- Global application settings
- Equipment data that needs to be accessed by many components

Example:

```jsx
// context/EquipmentContext.jsx
import React, { createContext, useState } from 'react';

export const EquipmentContext = createContext();

export const EquipmentProvider = ({ children }) => {
  const [equipment, setEquipment] = useState([]);

  return (
    <EquipmentContext.Provider value={{ equipment, setEquipment }}>
      {children}
    </EquipmentContext.Provider>
  );
};
```

## Routing

Configure all routes in `src/routes/index.jsx`:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

export const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);
```

## Styling

- Use Bootstrap classes for consistent styling
- Use CSS modules or inline styles for component-specific styles
- Keep CSS organized and maintainable
- Avoid inline styles for complex styling needs

## Development Workflow

1. Create components in `components/`
2. Use Context or state management for data
3. Call API services from hooks or effects
4. Keep components focused and reusable
5. Test thoroughly before committing

## Best Practices

✅ Keep components small and focused
✅ Use meaningful variable and function names
✅ Add comments for complex logic
✅ Handle loading and error states
✅ Validate props with PropTypes or TypeScript
✅ Use environment variables for configuration
✅ Keep sensitive data out of version control
✅ Follow ESLint rules

❌ Avoid prop drilling (use Context instead)
❌ Avoid creating components in render methods
❌ Avoid hardcoding values
❌ Don't fetch data in render methods (use effects)
