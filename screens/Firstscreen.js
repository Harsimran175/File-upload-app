import React from 'react';
import {  StyleSheet,ScrollView, Dimensions,TouchableOpacity, Text,  View,  SectionList,  SafeAreaView,  Image,  FlatList,ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import {Icon} from "react-native-elements";

export default class Firstscreen extends React.Component{
  render(){
  return (
    <View  style={{backgroundColor:"#946eff",flex:1}}>
     <Image
      source={require("../assets/logo.png")}
  resizeMode={"stretch"}
      style={{width:"100%",height:"50%"}}
   /> 
    <TouchableOpacity  style={{backgroundColor:"white",flex:0.9,alignSelf:"center",justifyContent:"center",width:"80%",height:"20%",borderRadius:40,marginTop:"10%"}}>
   

    <Text style={{fontWeight:"bold",padding :10,fontSize:20,justifyContent:"center",alignContent:"center"}}>
    Lets Upload your Creation to the World with Flipo App
    </Text>
    <Text style={{fontWeight:"bold",padding :15,fontSize:12,color:"grey",justifyContent:"center",alignI:"center"}}>Easy Way to upload your files,pictures,docs etc.</Text>
     </TouchableOpacity>
     <View style={{alignItems:"center",position: 'absolute',
        top: 550,left:120,right:110,bottom:50
        }}>
<TouchableOpacity style={{justifyContent:"center",width:"10%",height:"30%",backgroundColor:"#fd76ff",borderRadius:60,alignItems:"center",padding:25,borderColor:"#946eff",borderWidth:10}}
onPress={() => {
                this.props.navigation.replace("Login")}}>

 <Icon
          name='arrowright'
          type='antdesign'
          color='white'
          
           />
</TouchableOpacity>
</View>
   
    </View>
  )
  }
}