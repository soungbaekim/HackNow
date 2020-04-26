import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import {db} from '../src/config';

class StartButton extends React.Component{



	render()
	{
		return(
			<TouchableOpacity style = {styles.container}>
				<Text style = {styles.text}>Start</Text>
			</TouchableOpacity>

		);
	
	}}


	const styles = StyleSheet.create({
		container:
		{
			width: "30%",
			backgroundColor: "#CC0000",
			alignItems: "center",
			padding: 10,
			margin: 10,
			borderRadius: 15,
			height: "10%",
			justifyContent: "center"
		},
		text:
		{
			color: "#FFFFFF",
			fontSize: 30,
			fontWeight: "bold",

		}
	

	});


export default StartButton;