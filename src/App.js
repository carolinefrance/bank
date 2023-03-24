// App.js is the main component and parent of all subcomponents: NavBar, Home, CreateAccount, Login, Deposit, Withdraw, AllData.
// App.js imports and renders subcomponents in the DOM (it shows the subcomponent in the main part of the webpage when its NavBar link is clicked).
// App.js sets routes for the NavBar component using BrowserRouter, Routes, and Route from react-router-dom.
// Since the NavBar component is imported into App.js, it will be rendered in every page of the app.

// React Router DOM components control the routing/navigation of the app
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Subcomponents are the "web pages" of the app
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { CreateAccount } from './components/CreateAccount';
import { Login } from './components/Login';
import { Deposit } from './components/Deposit';
import { Withdraw } from './components/Withdraw';
import { AllData } from './components/AllData';

// React hooks
import { useEffect, useState, createContext } from 'react';

// Parent style for main area of app: centers subcomponents
import './App.css';
/* Syntax notes: path names are not case sensitive, should be lowercase and hyphenated, and do not include a trailing slash. React component names are in CamelCase. Although my subcomponents are nested in a components folder, do not write "/components/subcomponent-name" because each subcomponent-name acts like a variable, not a full path. */

export const UserContext = createContext(null);
// What the App function does is it creates an array of users and a logged in user. It also creates functions to update the user array and the logged in user. It then renders the NavBar component and the Routes component. The NavBar component is rendered on every page; it needs to be placed inside BrowserRouter to work. The Routes component displays one selected subcomponent ("web page") at a time.
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);
  function updateUser(user) {
    setLoggedInUser(user);
  }
  function addUser(user) {
    setUsers([...users, user]);
  }
  function updateUserBalance(user) {
    const updatedUsers = users.map(u => {
      if (u.email === user.email) {
        return user;
      }
      return u;
    });
    setUsers(updatedUsers);
  }
// The NavBar subcomponent is rendered on every page; it needs to be placed inside BrowserRouter to work.
// Routes display one selected subcomponent ("web page") at a time.
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{users:[]}}>
          <NavBar loggedInUser = {loggedInUser} />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-account" element={<CreateAccount addUser={addUser} />} />
            <Route path="/login" element={<Login updateUser={updateUser} users={users}/>} />
            <Route path="/deposit" element={<Deposit updateUser={updateUser} loggedInUser = {loggedInUser} updateUserBalance={updateUserBalance} />} />
            <Route path="/withdraw" element={<Withdraw updateUser={updateUser} loggedInUser = {loggedInUser} updateUserBalance={updateUserBalance} />} />
            <Route path="/all-data" element={<AllData users= {users} />} />
          </Routes>
          <br />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

// DOCUMENTATION
// https://reactrouter.com/web/guides/primary-components
//   Primary Components: BrowserRouter, Routes, Route, Link
// https://reactrouter.com/web/api/BrowserRouter
//   BrowserRouter is the parent component of Routes and Route
// https://reactrouter.com/web/api/Routes
//   Routes is the parent component of Route
// https://reactrouter.com/web/api/Route

// Passed to subcomponents:
//   path               the URL path to match the name of the subcomponent; the path name is not case sensitive, should be lowercase and hyphenated, and does not include a trailing slash
//   element            the JSX component to render when the path matches

// Passed to elements in subcomponents:
//   loggedInUser       user object of the logged in user
//   users              array of user objects
//   updateUser         function to update the logged in user
//   addUser            function to add a new user to the users array
//   updateUserBalance  function to update the balance of a user in the users array