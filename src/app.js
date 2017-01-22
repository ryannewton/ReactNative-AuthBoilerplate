'use strict';

// Import libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//Import components, functions, and styles
import { Header } from './components/common';

class App extends Component {
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<Text>Placeholder text</Text>
			</View>
		);
	}
}

export default App;
