# Overview

This project is a simple but functional ATM-style web application built using React. The goal of creating this app was to deepen my understanding of front-end development, state management with hooks, and user interface design with Tailwind CSS. I wanted to simulate a practical banking interface and explore how to structure reusable components in a multi-page application.

To run the app locally, clone the repository, install the dependencies using npm install, and then start the development server with npm run dev or npm start depending on your setup. Once running, navigate to http://localhost:5173 (or the port Vite/React indicates) to see the login screen and begin using the app.

The purpose of this app is to simulate basic ATM operations such as login, deposits, withdrawals, and checking account balances. It’s structured to allow future integration with backend APIs and persistent storage.

[Software Demo Video](https://youtu.be/dkvva5B_Z1s)

# Web Pages

The web application includes the following key pages/components:

* **Login Page**: This is the entry point to the app. Users log in using an account number and PIN. Right now, it's hardcoded to accept only one set of credentials (123456 / 1234) for simplicity.

* **Menu Page**: After a successful login, users are taken to a main menu where they can choose from three actions—Withdraw, Deposit, or Check Balance. They also have the option to log out.

* **Withdraw Page**: Allows users to enter an amount and simulates a withdrawal. Upon success, a confirmation message appears.

* **Deposit Page**: Similar to Withdraw, this page lets users deposit an amount and shows a success message.

* **Check Balance Page**: Displays a mock account balance for the logged-in user.

Each of these pages is rendered dynamically based on internal component state and transitions are handled without any page reloads. The app is fully client-side and uses conditional rendering to switch between views.

# Development Environment

* **Editor**: Visual Studio Code
* **Framework**: React
* **CSS Framework**: Tailwind CSS
* **Package Manager**: npm

# Useful Websites

* [React Documentation](https://reactjs.org/)
* [Tailwind CSS Documentation](https://tailwindcss.com/)

# Future Work

* Have the balance change for every transaction performed whether Deposit or Withdrawal instead of a fixed amount.
* Implement error handling and input validation improvements.
* Add Existing DB connection for SQL Server.
