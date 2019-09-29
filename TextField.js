import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput
} from "react-native";

export default class TextField extends Component {
  
  handleChange = (event = {}) => {
    const value = event.nativeEvent.text;  
    this.props.onTextChange(value);
  }

  render() {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.headerWrapper}>
                <Text style={styles.inputTitle}>{this.props.title}</Text>
                {this.props.isRequired && <Text style={[styles.inputTitle, {color:'red'}]}> REQUIRED</Text>}
            </View>
            <TextInput
            style={[styles.input, this.props.value && {borderColor:'blue'}, this.props.isRequired && {borderColor:'red'}]}
            value={this.props.value}
            onChange={this.handleChange}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer:{
    padding: 10
  },
  headerWrapper:{
    display: "flex",
    flexDirection: "row"
  },
  inputTitle: {
    fontFamily: "Merriweather-Regular",
    paddingBottom:5
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#EAEAEA",
    borderColor: "transparent",
    padding: 12,
    borderRadius:6,
    fontSize:14,
    marginBottom: 15,
    alignSelf: "stretch"
  }
});