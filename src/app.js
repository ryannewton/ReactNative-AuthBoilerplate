'use strict';

// Import libraries
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

//Import components, functions, and styles
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebaseConfig from '../api_keys';

class App extends Component {
	state = { loggedIn: false };

	componentWillMount() {
		firebase.initializeApp(firebaseConfig);

		// Update state based on if user is logged in
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
