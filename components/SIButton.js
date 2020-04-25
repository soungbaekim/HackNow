import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";


interface Props {
	onPress: () =>  void;
}

class Button extends React.Component<Props> {
	render() {
		const {label, onPress } = this.props;
		return (
			<TouchableOpacity style = {styles.container} onPress = {onPress}>
				<Text style = {styles.text}>Sign in</Text>
			</TouchableOpacity>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		width: "70%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#00BBFF",
		marginBottom: 4,
		paddingVertical: 12,
		paddingHorizontal: 70,
		borderRadius: 4,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "rgba(255, 255, 255, 0.7)",
		
	},
	text: {
		color: "#FFFFFF", //white
		textAlign: "left",
		height: 20
	}
});

export default Button;