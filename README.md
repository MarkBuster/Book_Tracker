# Book Tracker 📚

A simple and clean React application for tracking your reading list, built with Firebase for real-time data synchronization.

**[➡️ Live Demo]([(https://markbuster.github.io/Book_Tracker/)](https://markbuster.github.io/Book_Tracker/))**

![Book Tracker App Screenshot](./path-to-your-screenshot.png)

This application helps users track their reading progress. Users can add books to their reading list, mark books as completed, and manage their personal library through a clean, responsive interface.

---

## ✨ Features

* **Secure Authentication:** User sessions are secured using GitHub OAuth.
* **Add Books:** Easily add books with a title, author, and a brief summary.
* **Track Progress:** Toggle a book's read/unread status with a single click.
* **Library Management:** Keep your library organized by deleting individual books or clearing the entire list.
* **Real-Time Sync:** Experience seamless, real-time data synchronization across devices with Firebase Realtime Database.
* **Responsive Design:** A clean, earthy color scheme that looks great on any device size.

---

## 🛠️ Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have `npm` installed on your machine.
* npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/MarkBuster/Book_Tracker.git](https://github.com/MarkBuster/Book_Tracker.git)
    ```
2.  **Navigate to the project directory**
    ```sh
    cd Book_Tracker
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Set up environment variables**
    Create a `.env` file in the root of the project and add your Firebase project configuration. You can use `.env.example` as a template.
    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```
5.  **Start the development server**
    ```sh
    npm run dev
    ```

### Running Tests

This project uses Vitest for unit and integration testing.

* To run tests in interactive watch mode:
    ```sh
    npm test
    ```
* To run tests and generate a coverage report:
    ```sh
    npm run test:coverage
    ```

---

## 📖 Usage

1.  Visit the application's URL.
2.  Sign in with your GitHub account to get started.
3.  Add books to your list by clicking "Add Book" and filling in the details.
4.  Manage your books:
    * Check the box to mark a book as read.
    * Click the delete button to remove a book.
    * Use "Clear List" to remove all books at once.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit pull requests.

---

## Acknowledgments

* Leveraged Claude AI to accelerate the development of the testing suite, including structuring test cases and documenting testing methodology.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
