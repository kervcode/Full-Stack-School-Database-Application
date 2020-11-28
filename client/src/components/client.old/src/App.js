import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Header from "./components/Header";
import NotFound from "./components/NotFound";
import UserSignUp from "./components/UserSignUp";
import UserSignIn from "./components/UserSignIn";
import UserSignOut from "./components/UserSignOut";
// import Authenticated from "./components/Authenticated";
import Courses from './components/Courses';
import CourseDetail from "./components/CourseDetail";
import CreateCourse from "./components/CreateCourse";
import UpdateCourse from "./components/UpdateCourse";

// Import context API to App
import withContext from "./Context"

// Initialize name variable for User Sign Up
const UserSignUpWithContext = withContext(UserSignUp);

export default (props) => (
  <Router>
    <div>
      <Header />

      <Switch>
         {/* <Route exact path="/" render={(props)=> <Courses {...props}/>}/>  */}
        {/* <Route path="/authenticated" component={Authenticated} /> */}
        <Route path="/signin" component={UserSignIn} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOut} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

// class App extends Component {
//   render(props) { 
//     return ( 
//       <Router>
//           <div>
//             <Header />
            
//             <Switch>
//             <Route exact path="/" render={(props)=> <Courses {...props}/>}/> 
//             <Route path="/signin" component={UserSignIn} />
//             <Route path="/signup" component={UserSignUpWithContext} />
//             <Route path="/signOut" component={UserSignOut} />
//             <Route path="/courses/create"    render={(props) => <CreateCourse {...props} />} />      
//             <Route path="/courses/:id"    render={(props)=> <CourseDetail {...props}/>} />   
//             <Route path="/courses/:id/update"    render={(props) => <UpdateCourse {...props}/>} /> 
//             <Route component={NotFound} />
//             </Switch>
//         </div>
      
//   </Router>
//      );
//   }
// }
