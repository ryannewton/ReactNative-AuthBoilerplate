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
	componentWillMount() {
		firebase.initializeApp(firebaseConfig);
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
