'use strict';

// Import libraries
import React, { Component } from 'react';
import firebase from 'firebase';

//Import components, functions, and styles
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = { email: '', password: '', error: '' };

	onButtonPress() {
		// User pressed 'Log in'
		const { email, password } = this.state;

		// Clear previous error message
		this.setState({ error: '' });

		// 1. Check if credentials match an existing account
		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(() => {
				// 2. If doesn't match existing accounts, try creating an account
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch(() => {
						// 3. If the account cannot be signed into or created (e.g. email in use), show an error
						this.setState({ error: 'Authentication Failed' });
					});
			});
	}

	render() {
		return (
			<Card>
				{/*Input field for email*/}
				<CardSection>
					<Input
						placeholder="john@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={(email) => this.setState({ email })}
					/>
				</CardSection>

				{/*Input field for password*/}
				<CardSection>
					<Input
						secureTextEntry
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={(password) => this.setState({ password })}
					/>
				</CardSection>

				{/*Log in button*/}
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
