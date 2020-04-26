import * as React from 'react';
import {StyleSheet, TextInput, TextInputProps} from "react-native";

type Props = TextInputProps;

const FormTextInput = (props) =>
{
	
		return(
				<TextInput
				selectionColor = "#00BBFF"
				style = {styles.textInput}
				placeholder = {props.inputType}
				/>
			)
	
}


const styles = StyleSheet.create({
	textInput: {
		height: 40,
		borderColor: "#c0c0c0",
		borderWidth: StyleSheet.hairlineWidth,
		marginBottom: 15,
		paddingHorizontal: 20,
		width: "90%",
		textAlign: "left",
		marginLeft: 10
	}
});

export default FormTextInput;