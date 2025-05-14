# productcard-app
(https://stackblitz.com/~/github.com/krishnavamsi123-git/productcard-app)

- Features
1. Data Fetching with TanStack Query
Utilizes useQuery from TanStack Query to fetch product data efficiently, with built-in caching and background updates.

2. State Management with Redux Toolkit
Manages cart state using Redux Toolkit, providing a centralized and predictable state container.

3. Favorite Status Persistence
Stores and retrieves favorite product IDs from localStorage, ensuring persistence across sessions.

4. Light/Dark Mode Toggle
Implements a theme toggle using a custom useTheme hook, with the selected theme persisted in localStorage.

- Challenges Faced
1. Synchronizing LocalStorage with React State
Ensuring that the favorite status reflects the current state of localStorage required careful synchronization, especially when multiple components could modify the favorites.

2. Theme Persistence Across Sessions
Implementing a reliable theme toggle that persists user preference across sessions involved managing localStorage and updating the document's data attributes accordingly.

3. MVC-Like Architecture in React
Adapting the MVC pattern to React's component-based architecture required thoughtful organization to maintain clear separation between data handling, UI, and control logic.

⚖- Trade-offs Made
1. Using Redux Toolkit for Cart Management
While Redux Toolkit provides a robust solution for state management, it introduces additional boilerplate. For smaller applications, simpler state management solutions like Context API or Zustand could suffice.

2. Persisting Favorites in LocalStorage
Opting for localStorage to persist favorite statuses is straightforward but lacks scalability. For applications requiring synchronization across devices or users, a backend solution would be more appropriate.

3. Theme Management via Custom Hook
Implementing theme toggling through a custom hook offers flexibility but requires manual management of DOM attributes and localStorage. Utilizing a theming library could simplify this process but at the cost of additional dependencies.

- Getting Started
Install Dependencies

bash
Copy
Edit
npm install
Start the Development Server

bash
Copy
Edit
npm run dev
Build for Production

bash
Copy
Edit
npm run build
- Technologies Used
React with TypeScript

TanStack Query for data fetching

Redux Toolkit for state management

localStorage for persisting favorites and theme

Vite for development and build tooling
