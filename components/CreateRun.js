import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import {db} from '../src/config';

class CreateRun extends React.Component{



	render()
	{
		const {label} = this.props;
		return(
			<TouchableOpacity style = {styles.container}>
				<Text style = {styles.text}>{label}</Text>
			</TouchableOpacity>

		);
	
	}}


	const styles = StyleSheet.create({
		container:
		{
			width: "90%",
			backgroundColor: "#00BBFF",
			alignItems: "center",
			padding: 50,
			margin: 20,
			borderRadius: 5
		},
		text:
		{
			color: "#FFFFFF",
			fontSize: 30,
			fontWeight: "bold"

		}
	

	});


export default CreateRun;