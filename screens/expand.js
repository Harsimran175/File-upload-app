import React ,{ useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,Linking,Picker
} from "react-native";
import firebase from 'firebase';
import db from '../config'

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Icon } from 'react-native-elements';
import { Ionicons } from "@expo/vector-icons";
export default class expand extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userEmail: firebase.auth().currentUser.email,
      image:"",
      yourname:"",
      title: "",
      description: "",
      category: "",
       githublink:"",
      selectedId:this.props.route.params.selectedId,
      feedback:"",
 
    };
    
  }
  
  
  getData=async()=>{
    var response = await db.collection('request').doc(this.state.selectedId).get()
    console.log(response.data())
    this.setState({
      image:response.data().image,
      yourname:response.data().yourname,
      title:response.data().title,
      description:response.data().description,
      category:response.data().category,
      email:response.data().email,
      githublink:response.data().githublink,
      userEmail: firebase.auth().currentUser.email,
   
    })

  }
  componentDidMount(){
    this.getData();

  }
  
submit =async()=>{
    
    db.collection('submit').add({
    
       "yourname":this.state.yourname,
      "email":this.state.email,
        "title":this.state.title,
        "description":this.state.description,
        "category":this.state.category,
        "image"  :this.state.image,
        "githublink":this.state.githublink,
       "userEmail": firebase.auth().currentUser.email,
       "feedback":this.state.feedback,
        
        
    })

   alert("Submitted Record Successfully")
    this.props.navigation.navigate("Submissionreceived");
  }

 
  render() {
        return (
      <View style={{ flex: 1 ,backgroundColor: '#9c78fe',   alignItems:"center",    padding:"3%"}}>
        <ScrollView>
             <View
              style={{ 
                width: "90%", 
                height: 200,
                borderBottomWidth: 1,
                borderRadius:20,
                borderWidth:5,
                borderColor: "white",
                marginBottom:10,
            
              }}
            >
            <Image 
          source={{ uri: this.state.image }} 
          style={{width:'100%', height:'100%',borderRadius:15}}
            />
          </View>

            
        <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="person" size={20} color="purple" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                paddingLeft: 10,
                fontWeight:"bold",
                fontSize:20,
              marginLeft:"20%"
              }}
          
              value={this.state.title}
              onChangeText={(val) => {
                this.setState({ title: val });
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
             <FontAwesome name="gamepad" size={30} color="black" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                paddingLeft: 10,
                fontWeight:"bold",
                fontSize:20,
              marginLeft:10
              }}
              value={this.state.category}

              onChangeText={(val) => {
                this.setState({ category: val });
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
             <MaterialIcons name="description" size={30} color="black" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                paddingLeft: 10,
                fontSize:15,
              marginLeft:10,
              flexWrap: "wrap",

              }}
              value={this.state.description}
                numberOfLines={3}
                onChangeText={(val) => {
                this.setState({ description: val });
              }}
            />
          </View>

 
<View>
 <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
         backgroundColor:"white",
          borderRadius:20,         
                 borderWidth:2,
                 borderColor:"white"
            }}
          >
            <Octicons name="file-submodule" size={20} color="black" />
            <TextInput
              style={{
                width: "85%",
                height: 30,
                 padding:5 ,
                
              }}
                value={this.state.githublink}
              placeholder="Submit URL here..."
               onChangeText={(val) => {
                this.setState({ githublink: val });
              }}
            />
           
          </TouchableOpacity>
         <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
         backgroundColor:"white",
          borderRadius:20,         
                 borderWidth:2,
                 borderColor:"white"
            }}
          >
            <Octicons name="file-submodule" size={20} color="black" />
            <TextInput
              style={{
                width: "85%",
                height: 30,
                 padding:5 ,
                
              }}
                value={this.state.feedback}
              placeholder="Give Feedback here..."
               onChangeText={(val) => {
                this.setState({ feedback: val });
              }}
            />
           
          </TouchableOpacity>  
         
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
              borderColor:"white",
              borderWidth:2
            }}
            onPress={() => {
              this.submit()
         
              console.log(this.submit)
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Submit</Text>
          </TouchableOpacity>
           </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({

    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
        marginTop:10
    },
 
    childView:
    {
        justifyContent: 'center',
        flexDirection: 'row',
    },
 
    StarImage:
    {
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
 
   
});