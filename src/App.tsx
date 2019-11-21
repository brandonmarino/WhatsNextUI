import React from 'react';
import './App.scss';
import { Home } from './components/home/Home';
import { Header } from './components/header/Header';

class App extends React.Component {
    render() {
        // verify auth token and extract user informatino
        this.handleAuthToken();
        
        return ( 
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            
                <Header />   
                <Home />
            </div>
        );
    }

    /**
     * Redirect to the login page
     */
    directToLoginPage() {
        const loginPage = `http://localhost:8082/auth/login/?redirect_url=${window.location.href}`;
        window.location.href = loginPage;
    }

    /**
     * Split out the token from the path navigated to.
     */
    handleAuthToken() {
        // get tokens from the url
        if (window.location.href.indexOf('/#access_token') > -1) {
            // get the access tokens from the url
            const tokens = window.location.href.split('/#access_token=')[1].split(',refresh_token=');
            
            // get the user id from the token that was passed back from auth
            const userData = JSON.parse(atob(tokens[1].split('.')[1]));

            // store tokens for user later
            localStorage.setItem('userId', userData.user_id);
            localStorage.setItem('access_token', tokens[0]);
            localStorage.setItem('refresh_token', tokens[1]);

            // redirect to the page without the access token in the url
            window.location.href = window.location.href.split('#access_token')[0];
        } else {
            // should validate the token
        }
    }
}



export default App;
