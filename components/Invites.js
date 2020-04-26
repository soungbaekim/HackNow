import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import {db} from '../src/config';

class Invites extends React.Component{



	render()
	{
		const {label} = this.props;
		return(
			<View style = {styles.container}>
				<Text style = {styles.text}>{label}</Text>
			</View>

		);
	
	}}


	const styles = StyleSheet.create({
		container:
		{
			width: "90%",
			height: "60%",
			backgroundColor: "#00CC00",
			alignItems: "center",
			padding: 20,
			margin: 20,
			marginTop: 5,
			borderRadius: 5
		},
		text:
		{
			color: "#FFFFFF",
			fontSize: 30,
			fontWeight: "bold",
			textDecorationLine: 'underline'

		}
	

	});


export default Invites;