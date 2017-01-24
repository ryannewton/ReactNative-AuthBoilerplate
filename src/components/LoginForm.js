'use strict';

// Import libraries
import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

//Import components, functions, and styles
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false };

	onButtonPress() {
		// User pressed 'Log in'
		const { email, password } = this.state;

		// Clear previous error message
		this.setState({ error: '', loading: true });

		// Check if credentials match an existing account
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				// If doesn't match existing accounts, try creating an account
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}

	onLoginFail() {
		this.setState({ error: 'Authentication Failed', loading: false });
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false
		});
	}

	renderButton() {
		// If loading, show Spinner
		if (this.state.loading) {
			return <Spinner size="small" />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log in
			</Button>
		);
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

				{/*Displays errors (blank if none)*/}
				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>

			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
