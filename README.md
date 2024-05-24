# User Dashboard Application

This is a React application that includes various components such as a counter, a rich text editor, a user form, a dashboard, and authentication features. The app is built using React, Chakra UI, Firebase, and React Router.
## Hosted Application

You can access the live version of the application [here](https://up-ab.vercel.app/).

**Note:** This application is fully responsive and adapts to various screen sizes and devices, ensuring optimal user experience across desktop, tablet, and mobile devices.



### LogIn Page 
![image](https://github.com/Ayush19bansal/UP-AB/assets/118842033/c74fe4c3-c1d8-446e-8585-a1640e9c4d31)

### Home Page (Initial State)
The initial state of the Home Page when the application is first loaded is shown below. In this state, dark mode is not applied, and the counter is set to 0.
![image](https://github.com/Ayush19bansal/UP-AB/assets/118842033/6c94fc08-a21b-4d5e-beaf-23c1e4eb14dc)


- The state of the Home Page when the counter is set to 5 is shown below. In this state, the application might be in light or dark mode depending on user preference.
![image](https://github.com/Ayush19bansal/UP-AB/assets/118842033/eb38c9ea-356f-49df-91bf-324d95a969c3)



- After Counter changes full background cOlor 
![image](https://github.com/Ayush19bansal/UP-AB/assets/118842033/2461d994-c15e-4903-9b30-15ec55b3d50a)

- Dark Mode
![image](https://github.com/Ayush19bansal/UP-AB/assets/118842033/9003a229-6145-4dff-88c8-91aae2aee36c)







## Components
### 1. Counter
A simple counter component with increment, decrement, and reset functionalities.
#### Functionality:
- Displays a counter value.
- Buttons to increment, decrement, and reset the counter. Displays user details upon selection.
- Updates context with the current counter value.


### 2. Rich Text Editor
The Rich Text Editor component allows users to create and edit rich text content using the React Quill library. The content is stored in the local storage, and a toast notification is shown when the content is saved.
#### Functionality:
- Uses ReactQuill for the text editor.
- Saves the content to local storage.
- Provides a button to save the current content.




### 3. User Form
The User Form component allows users to enter their name, address, email, and phone number. The user data is stored in the local storage, and a unique ID is generated for each user.
#### Functionality:
- Provides input fields for name, address, email, and phone.
- Saves the user data to local storage upon submission.
- Alerts the user with the ID of the saved data.




### 4. Dashboard
The Dashboard component displays a list of users stored in the local storage. Users can select a user from the dropdown, and the user details will be displayed in a card.
#### Functionality:
- Loads user data from local storage.
- Displays user details upon selection.
- Provides an interface to select a user and view their details.

  ![image](https://github.com/Ayush19bansal/UP-AB/assets/118842033/558bf7b9-6892-4ac1-b49b-b06990e9b118)
 ![image](https://github.com/Ayush19bansal/UP-AB/assets/118842033/9c7a5306-6f32-45ac-8343-eecd35f5e1e0)




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


