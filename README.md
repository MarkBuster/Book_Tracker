# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Book Tracker

A React application that helps users track their reading progress. Users can add books to their reading list, mark books as completed, and manage their personal library.

## Features
- GitHub Authentication for secure access
- Add books with title, author, and summary
- Mark books as read/unread
- Delete individual books or clear entire list
- Real-time data synchronization using Firebase
- Responsive design with an earthy color scheme

## Authentication
This application uses GitHub OAuth for authentication. To set up:
1. Create a GitHub OAuth application
2. Add callback URL in GitHub OAuth settings
3. Configure Firebase Authentication with GitHub provider
4. Update environment variables with credentials

## Installation
1. Clone the repository:
```bash
git clone https://github.com/MarkBuster/Book_Tracker.git
cd book-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a new project in [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication with GitHub provider
   - Set up Realtime Database
   - Copy your Firebase configuration
   - Create a GitHub OAuth app and add credentials to Firebase

4. Create environment variables:
   - Copy `.env.example` to `.env`
   - Add your Firebase configuration

5. Start the development server:
```bash
npm run dev
```

## Testing Setup

1. Install testing dependencies:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest jsdom @vitest/coverage-c8 @vitest/ui
```

2. Create test configuration files:

- vitest.config.js for Vitest configuration
- src/test/setup.js for test setup and mocks

3. Run tests:

```bash
npm test              # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
npm run test:ui       # Run tests with UI interface
```

## Usage

1. Visit the application URL
2. Sign in with your GitHub account
3. Add books to your reading list:
   - Click "Add Book"
   - Enter book title, author, and optional summary
   - Click "Add"
4. Manage your books:
   - Check the box to mark a book as read
   - Click the delete button to remove a book
   - Use "Clear List" to remove all books
5. View your reading progress through the checkbox indicators

## Technologies Used
- React
- Firebase (Authentication & Realtime Database)
- React Router
- GitHub OAuth
- Vite
- Vitest & React Testing Library

## Contributing
Feel free to submit issues and enhancement requests!

## Acknowledgments

Testing development was aided by Claude AI Assistant (Anthropic, 2024), which helped with and was limited to:
- Test structure and organization
- Testing methodology documentation
- Code comments and documentation

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
