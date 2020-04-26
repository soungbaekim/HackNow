import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MemberList from './MemberList'
import {db} from '../src/config';

class Members extends React.Component{

 	

	render()
	{
		const {race} = this.props;
		return(
			<View style = {styles.container}>
				<Text style = {styles.text}>Members</Text>
				<MemberList members = {this.props.race.runners}/>
			</View>

		);
	
	}}


	const styles = StyleSheet.create({
		container:
		{
			width: "90%",
			backgroundColor: "#00CC00",
			alignItems: "center",
			padding: 30,
			margin: 20,
			borderRadius: 5,
			height: "70%"
		},
		text:
		{
			color: "#FFFFFF",
			fontSize: 30,
			fontWeight: "bold",
			textDecorationLine: 'underline'

		}
	

	});


export default Members;