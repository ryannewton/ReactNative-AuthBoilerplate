'use strict';

// Import libraries
import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder }) => {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput
				placeholder={placeholder}
				autoCorrect={false}
				style={{ height: 50, width: 100 }}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

export { Input };
