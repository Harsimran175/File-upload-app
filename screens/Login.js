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
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import firebase from 'firebase'
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  login=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
   alert('Welcome to Filpo App')
   this.props.navigation.navigate('Home')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
  }
  render() {
    return (
<ScrollView>
      <View style={{ flex: 2,backgroundColor:"#fe6076",height:"50%" }}>
      
        
     <View>
         <TouchableOpacity
      style={{width:"90%",borderRadius:30,height:"40%",alignItems:"center",marginLeft:"5%",marginTop:"10%",backgroundColor:"#9c78fe"}}> 
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
 <Text style={{ fontSize: 22, fontWeight: "bold", marginLeft: "5%",color:"#9c78fe",marginRight:20,marginTop:10 }}>
            Login
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
                width: "85%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
              }}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(val) => {
                this.setState({ password: val });
              }}
            />
           
          </View>

          <Text
            style={{
              marginTop: 10,
              color: "gray",
              fontWeight: "bold",
              alignSelf: "flex-end",
              marginHorizontal: "5%",
            }}
            onPress={() => {
              this.props.navigation.navigate("ForgotPassword");
            }}
          >
            Forgot Password?
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#9c78fe",
              width: "50%",
              height: 40,
              marginTop: 20,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              
            }}
            onPress={() => {
              this.login()
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Login</Text>
          </TouchableOpacity>
<Text style={{ marginTop:20,color: "black", alignSelf: "center" }}>
            OR
          </Text>
         
          <TouchableOpacity
            style={{
              flexDirection: "row",
        marginLeft:30,
              width: "80%",
              height: 40,
              borderRadius: 70,
              justifyContent: "center",
              alignItems: "center",
           borderColor:"gray",
           borderWidth:1,
           marginTop:20,
           marginBottom:20
            }}
          >
          
            <Image
              style={{ width: 30, height: 30 ,borderRadius:80}}
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
            />
           <Text> Continue with Google</Text>
          </TouchableOpacity>
<View style={{marginBottom:50}}>
          <Text style={{ marginTop: 5,marginLeft:95, color: "black",fontSize:10 }}>
            Don't have an account?
            <Text
              style={{marginBottom:20, color: "#9c78fe", fontWeight: "bold",fontSize:18 }}
              onPress={() => {
                this.props.navigation.replace("SignUp");
              }}
            >
              {" "}
              Sign up
            </Text>{" "}
          </Text>
         
          </View>
          </TouchableOpacity>
   
       
       
      </View>
      </ScrollView>
    );
  }
}
