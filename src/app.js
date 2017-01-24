'use strict';

// Import libraries
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

//Import components, functions, and styles
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import firebaseConfig from '../api_keys';

class App extends Component {
	state = { loggedIn: null };

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

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
