import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';

import map from 'lodash/map';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state={
      currentUser : null,
      restaurants : null
    };

    this.restaurantRef = database.ref('/restaurants'); 
  }

  componentDidMount() {
    //when the auth state changes 
    auth.onAuthStateChanged( (currentUser) => {
      console.log('Auth_User_Changed:', currentUser)
      this.setState({currentUser});
    });

    this.restaurantRef.on('value', (snapshot) => {
      //console.log('snapshot:', snapshot)
      this.setState({restaurants : snapshot.val()});
    });
  }

  render() {
    
    const {currentUser, restaurants } = this.state;

    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>

        {!currentUser && <SignIn />}
        {currentUser && 
        
          <div>
            <NewRestaurant />
            {map(restaurants, (restaurant,key) => <p key={key}> {restaurant.name} </p>)}
            <CurrentUser user={currentUser} />
          </div>
        }
      </div>
    );
  }
}

export default Application;
