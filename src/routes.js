import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AddCarForm from './AddCarForm';
import CarDetails from './CarDetails';
import CarForm from './CarForm';
import CarList from './CarList';
import DataTable from './DataTable';
import DeleteCar from './DeleteCar';
import SignOut from './SignOut';

// Assuming you have a variable to track whether the user is signed in or not
const isAuthenticated = true; // You need to implement proper logic for this

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/signin' />
  )} />
);

const Routes = () => {
  return (
    <Router>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute exact path="/addcarform" component={AddCarForm} />
      <PrivateRoute exact path="/cardetails" component={CarDetails} />
      <PrivateRoute exact path="/carform" component={CarForm} />
      <PrivateRoute exact path="/carlist" component={CarList} />
      <PrivateRoute exact path="/datatable" component={DataTable} />
      <PrivateRoute exact path="/deletecar" component={DeleteCar} />
      <PrivateRoute exact path="/signout" component={SignOut} />
    </Router>
  );
};

export default Routes;
