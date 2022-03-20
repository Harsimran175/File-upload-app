import React from "react";
import {
  StyleSheet,
  Text,Alert,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,Platform,
  TouchableOpacity,
  Picker,
  ActivityIndicator
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import firebase from 'firebase';
import db from '../config'
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';

export default class Home2 extends React.Component {
 
  constructor() {
    super();
    this.state = {
      yourname:"",
       email: "",
      title: "",
      description: "",
      githublink:"",
      category: "",
      image: '',
      uploading: 'none',
     
  
  
      
    };
  }
  
  selectImage = async (path) => { 
    this.setState({uploading:true})
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3], 
      quality: 1,
    });
 
console.log(uri)
    if (!cancelled) {
      this.uploadImage(uri, this.state.email, path);
    }
  };

  uploadImage = async (uri, email, path) => {
    var response = await fetch(uri);
    //binary large objects
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child(path + email);

    return ref.put(blob).then((response) => {
      this.fetchImage(email, path);
    });
  };

  fetchImage = (email, path) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child(path + email);

    // Get the download URL
    storageRef
      .getDownloadURL() 
      .then((url) => {
        this.setState({ image: url, uploading:false }); 
      })
      .catch((error) => {
        this.setState({ image: '#', uploading:'none' });
      });
  };

  
addRequest =()=>{
    
    db.collection('request').add({
      "yourname":this.state.yourname,
      "email":this.state.email,
        "title":this.state.title,
        "description":this.state.description,
        "githublink":this.state.githublink,
        "category":this.state.category,
        "image"  :this.state.image,
        "userEmail": firebase.auth().currentUser.email,
    })

   alert("Added Record Successfully")
   this.props.navigation.navigate('Category')
  }


  render() {
    var icon;
    if(this.state.uploading === 'none'){
      icon = <Entypo name="upload" size={24} color="black" />
    }
    else if(this.state.uploading){
      icon = <ActivityIndicator size={'small'} color="black" />
    }
    else{ 
      icon = <Feather name="check-circle" size={24} color="black" /> 
    }
    return (
      
       <View style={{ flex: 1,backgroundColor:"#9c78fe",borderRadius:10,borderWidth:10,borderColor:"white" }}>
          <ScrollView>
    <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: "5%",color:"white" ,marginTop:20}}>
            Add Your Idea Here..
          </Text>
       <View style={{
                   flexDirection:"row",marginTop:20,padding:20}}>
                   
                        <TouchableOpacity style={{borderRadius:20,width:40,height:40}}onPress={() => {this.props.navigation.replace("Category")}}>
                       <Image source={require("../assets/arcade.jpg")}style={{marginLeft:20,width:40,height:40,borderRadius:20}}
   /> 
                        </TouchableOpacity>
                          <TouchableOpacity style={{borderRadius:20,width:30,height:30,marginLeft:40}}onPress={() => {this.props.navigation.replace("Category")}}>
                       <Image source={require("../assets/ball.jpg")}style={{width:40,height:40,borderRadius:20}}
   /> 
                        </TouchableOpacity>
                          <TouchableOpacity style={{borderRadius:20,width:30,height:30,marginLeft:40}}onPress={() => {this.props.navigation.replace("Category")}}>
                       <Image source={require("../assets/board.jpg")}style={{width:40,height:40,borderRadius:20,}}
   /> 
                        </TouchableOpacity>
                          <TouchableOpacity style={{borderRadius:20,width:30,height:30,marginLeft:40}}onPress={() => {this.props.navigation.replace("Category")}}>
                       <Image source={require("../assets/puzzz.png")}style={{width:40,height:40,borderRadius:20}}
   /> 
                        </TouchableOpacity>
        
</View>
 <View style={{
                   flexDirection:"row",marginLeft:40}}>
                
                   <Text style={{textAlign:"center",fontSize:10,fontWeight:"bold",}}>Arcade</Text>
                   <View>
                    <Text style={{textAlign:"center",fontSize:10,marginLeft:30,flexWrap:"wrap",fontWeight:"bold",marginRight:10}}>Sports</Text>
                   </View>
                   <View>
                    <Text style={{textAlign:"center",fontSize:10,marginLeft:30,flexWrap:"wrap",fontWeight:"bold",marginRight:10}}>Board</Text>
                   </View>
                    <View>
                    <Text style={{textAlign:"center",fontSize:10,marginLeft:30,flexWrap:"wrap",fontWeight:"bold"}}>More</Text>
                   </View>

          </View>

           <TouchableOpacity
      style={{width:"100%",borderTopLeftRadius:30,borderTopRightRadius:30,height:"90%",alignItems:"center",marginTop:"10%",backgroundColor:"white"}}> 
       
         
           <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <MaterialIcons name="person" size={20} color="grey" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
              }}
              placeholder="Your Name"
              onChangeText={(val) => {
                this.setState({ yourname: val });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 20,
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
              placeholder="Email-Id"
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
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <MaterialIcons name="title" size={20} color="grey" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
              }}
              placeholder="Title"
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
              <MaterialIcons name="description" size={20} color="grey" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
              }}
              placeholder="Description"
              multiline = {true}
              onChangeText={(val) => {
                this.setState({ description: val });
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
              <MaterialIcons name="category" size={20} color="grey" />
             <Picker mode="dropdown" selectedValue={this.state.category}
          style={{
            width: '90%',
            height: 40,                                //Define Picker component with stat
            borderRadius: 4,
            fontColor: 'gray',
            borderBottomWidth:1,
            borderColor:"gray"
          }}
          onChangeText={(val) => {
                this.setState({ description: val })}}>
          
          //Add multiple items for dropdown list
          <Picker.Item label="Category" value="" />
          <Picker.Item label="Sports" value="Sports" />
          <Picker.Item label="Puzzle" value="Puzzle" />
          <Picker.Item label="Arcade" value="Arcade" />
          <Picker.Item label="Board" value="Board" />
          <Picker.Item label="Adventure" value="Adventure" />
        </Picker>                                             
          </View>

           <View
            style={{
              flexDirection:"row",
              width: "90%",
              alignSelf: "center",
              marginTop: 30,
              justifyContent:"space-around",
              alignItems: "center",
            }}
          >
              <MaterialIcons name="image" size={20} color="grey" />
          
<View style={{ flexDirection: 'row' }}>
          <Text>Upload Image/Video</Text>
          <TouchableOpacity
            style={{ marginHorizontal: 20 }}
            onPress={() => {
              this.selectImage('siddhant/');
            }}>
            {icon}
          </TouchableOpacity>
        </View>





          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#fe6076",
              width: "50%",
              height: 40,
              marginTop: 30,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              this.addRequest()
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Add +</Text>
          </TouchableOpacity>
          </TouchableOpacity>
        </ScrollView>
       
      </View>
    );
  }
}
