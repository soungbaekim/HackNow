import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MemberCard from './MemberCard'
import {db} from '../src/config';

class MemberList extends React.Component{


	render()
	{
		const {members} = this.props; //array of members
		return(
			<View>
				{
					members.map((member, i) => {
						return(
							<MemberCard member = {members[i].runner_id}/>
						);
					})
				}
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


export default MemberList;