import * as React from 'react';
import {StyleSheet, TextInput, TextInputProps} from "react-native";

type Props = TextInputProps;

class FormTextInput extends React.Component<Props>{
	render(){
		return(
				<TextInput
				selectionColor = "#00BBFF"
				style = {styles.textInput}
				/>
			);
	}
}


const styles = StyleSheet.create({
	textInput: {
		height: 40,
		borderColor: "#c0c0c0",
		borderWidth: StyleSheet.hairlineWidth,
		marginBottom: 15,
		paddingHorizontal: 120,
		width: "100%",
		justifyContent: "flex-start"
	}
});

export default FormTextInput;