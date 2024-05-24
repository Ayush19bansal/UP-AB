# User Dashboard Application

This is a React application that includes various components such as a counter, a rich text editor, a user form, a dashboard, and authentication features. The app is built using React, Chakra UI, Firebase, and React Router.

## Components
### 1. Counter
A simple counter component with increment, decrement, and reset functionalities.
#### Functionality:
Displays a counter value.
Buttons to increment, decrement, and reset the counter.
Updates context with the current counter value.

### 2. Rich Text Editor
The Rich Text Editor component allows users to create and edit rich text content using the React Quill library. The content is stored in the local storage, and a toast notification is shown when the content is saved.
#### Functionality:
Uses ReactQuill for the text editor.
Saves the content to local storage.
Provides a button to save the current content.

### 3. User Form
The User Form component allows users to enter their name, address, email, and phone number. The user data is stored in the local storage, and a unique ID is generated for each user.
#### Functionality:
Provides input fields for name, address, email, and phone.
Saves the user data to local storage upon submission.
Alerts the user with the ID of the saved data.

### 4. Dashboard
The Dashboard component displays a list of users stored in the local storage. Users can select a user from the dropdown, and the user details will be displayed in a card.
#### Functionality:
Loads user data from local storage.
Displays user details upon selection.
Provides an interface to select a user and view their details.

## Features

- User authentication (login and registration) using Firebase.
- Dark mode and light mode support with Chakra UI.
- User profile management.
- Dashboard to display and manage user information stored in local storage.

## Technologies

- **React**: Frontend library for building user interfaces.
- **Chakra UI**: Component library for React with built-in theming and accessibility.
- **Firebase**: Backend services for authentication and Firestore for database.
- **React Router**: For client-side routing.
- **React Spring**: For animations.
- **React Toastify**: For notifications.
- **Context API**:  (for state management)y.


