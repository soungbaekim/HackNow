import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MemberCard from './MemberCard'
import {db} from '../src/config';

class MemberList extends React.Component{


	render()
	{
		const {members} = this.props; //array of members
		console.log("memlist", members);
		console.log(members[0]);
		console.log(members[1].runner_id);

		return(
			<View style={styles.container}>
				{
					members.map(function(member, i) {
						return(
							<MemberCard key={i} id={member.runner_id}/>
						);
					})
				}
			</View>

		);

	}}


	const styles = StyleSheet.create({
		container:
		{
			flex: 1,
			backgroundColor: "#66FFB2",
			alignItems: "stretch",
			//padding: 30,
			//margin: 20,
			borderRadius: 5,
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
