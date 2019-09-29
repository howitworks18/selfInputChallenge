import React, { Component } from "react";
import {
  Alert,
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import TextField from "./TextField.js";
import Robot from './assets/images/GiantRobotLTD_Logo.svg';
import Arrow from './assets/images/White_Arrow.svg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      addressOne:'',
      addressTwo:'',
      validate:true
    };
  }

  handleChange(name) {
    return (text) => {
        this.setState({ [name]:text })
    }
  }

  check=()=>{
    let {firstName, lastName, addressOne, addressTwo} = this.state;
    this.setState({
      validate:false
    })  
    if(firstName.length > 0 && lastName.length > 0 && addressOne.length > 0){
      Alert.alert(
        'HI!',
        `Welcome ${firstName} ${lastName}, residing at ${addressOne} ${addressTwo}`,
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {cancelable: false},
      );
    }
  }

  validate=(param)=>{
    if(!this.state.validate){
      return param !== '' ? false : true;
    }
  }

  render() {
    let {firstName, lastName, addressOne, addressTwo} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>

          <View style={styles.headContainer}>
            <View style={styles.headSvgWrapper}>
              <Robot width={177} height={26} />
            </View>
            <Text style={styles.headTextWelcome}>Welcome</Text>
            <Text style={styles.headText}>Please tell us a little about yourself to get started.</Text>
          </View>

          <View style={styles.inputContainer}>
              <TextField
                title={'FIRST NAME'}
                value={firstName}
                onTextChange={this.handleChange('firstName')}
                isRequired={this.validate(firstName)}/>
              <TextField
                title={'LAST NAME'}
                value={lastName}
                onTextChange={this.handleChange('lastName')}
                isRequired={this.validate(lastName)}/>
              <TextField
                title={'ADDRESS'}
                value={addressOne}
                onTextChange={this.handleChange('addressOne')}
                isRequired={this.validate(addressOne)}/>
              <TextField
                title={'ADDRESS 2 (OPTIONAL)'}
                value={addressTwo}
                onTextChange={this.handleChange('addressTwo')}
                />
            </View>
        </ScrollView>

        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonWrapper} onPress={this.check}>
              <Text style={styles.buttonText}>NEXT</Text>
              <Arrow/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headContainer: {
    paddingTop: 32,
    paddingBottom: 32,
    marginBottom:32,
    paddingHorizontal:10,
    backgroundColor: "#585858"
  },
  headSvgWrapper: {
    paddingVertical:32,
  },
  headTextWelcome:{
    fontFamily: "Roboto-Bold",
    color: "#FFFFFF",
    paddingBottom:20,
    fontSize:24
  },
  headText: {
    fontFamily: "Merriweather-Regular",
    color: "#EAEAEA",
    fontSize:14
  },
  inputContainer:{
    padding: 10
  },
  inputTitleWrapper:{
    display: 'flex'
  },
  inputTitle: {
    paddingBottom:5
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 12,
    borderRadius:6,
    fontSize:14,
    marginBottom: 15,
    alignSelf: "stretch"
  },
  button: {
    marginHorizontal:20,
    marginBottom: 20
  },
  buttonWrapper:{
    backgroundColor: "#FFAB44",
    justifyContent:'center',
    flexDirection:"row",
    alignItems:'center',
    paddingVertical:15,
    borderRadius:6
  },
  buttonText:{
    color: "#FFFFFF",
    fontFamily:'Roboto-Bold',
    fontSize: 16,
    paddingRight:8
  }
});