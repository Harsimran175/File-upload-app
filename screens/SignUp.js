import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import firebase from 'firebase';
import db from '../config'
export default class SignUp extends React.Component {
  signUp=()=>{
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
    alert('User created!');

    db.collection('users').add({email:this.state.email, name:'Test!', password:this.state.password})

    this.props.navigation.replace('Home')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    
  });
  }
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  render() {
    return (
        <View style={{ flex: 1,backgroundColor:"#fe6076" }}>
      
        <ScrollView>
     <View>
         <TouchableOpacity
      style={{width:"90%",borderRadius:30,height:"110%",alignItems:"center",marginLeft:"5%",marginTop:"10%",backgroundColor:"#9c78fe"}}> 
          <Image
            source={require("../assets/design.png")}
            style={{
              width: "90%",
              height: 90,
              marginTop: "5%",
              alignSelf: "center",
              resizeMode: "contain",
              marginRight:20
              
            }}
          />
          </TouchableOpacity>
          </View>
           <TouchableOpacity
      style={{width:"90%",borderRadius:30,height:"70%",alignItems:"center",marginLeft:"5%",marginTop:20,backgroundColor:"white"}}> 


          <Text style={{marginTop:10, fontSize: 22, fontWeight: "bold", alignItem:"center",color:"#9c78fe"}}>
            Sign Up
          </Text>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <Fontisto name="email" size={20} color="grey" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
              }}
              placeholder="Email ID"
              onChangeText={(val) => {
                this.setState({ email: val });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
             <Entypo name="key" size={20} color="grey" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
              }}
              placeholder="Password"
              onChangeText={(val) => {
                this.setState({ password: val });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
                <Entypo name="key" size={20} color="grey" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
              }}
              placeholder="Confirm Password"
              onChangeText={(val) => {
                this.setState({ confirmPassword: val });
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#987afe",
              width: "50%",
              height: 40,
              marginTop: 30,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              this.signUp()
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={{ alignSelf: "center", marginTop: 60, color: "grey" ,marginBottom:30}}>
            Already have an account?
            <Text
              style={{ color: "#9878fe", fontWeight: "bold" }}
              onPress={() => {
                this.props.navigation.replace("Login");
              }}
            >
              {" "}
              Login
            </Text>{" "}
          </Text>
        </TouchableOpacity>
        </ScrollView>
   
      </View>
    );
  }
}
