import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {db} from '../src/config';

class MemberCard extends React.Component{


	render()
	{
		const {id} = this.props;
		return(
			<View style = {styles.container}>
				<Text style = {styles.text}>{id}</Text>
			</View>

		);
	
	}}


	const styles = StyleSheet.create({
		container:
		{
			width: "90%",
			backgroundColor: "#66FFB2",
			alignItems: "center",
			padding: 30,
			margin: 20,
			borderRadius: 5,
			height: "10%"
		},
		text:
		{
			color: "#FFFFFF",
			fontSize: 30,
			fontWeight: "bold",
			textDecorationLine: 'underline'

		}
	

	});


export default MemberCard;