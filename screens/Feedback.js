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
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import db from '../config'
//main axis - justifyContent
//cross axis - alignItems

//alignSelf, justifyContent, alignItems, margin and padding
export default class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      feedback: "",
      selectedId:this.props.route.params.selectedId
    };
  }
 getData=async()=>{
    var response = await db.collection('submit').doc(this.state.selectedId).get()
    // console.log(response.data())
    this.setState({
     feedback:response.data().feedback
    })

  }
  componentDidMount(){
console.log(this.props.route.params.selectedId)
this.getData();
  }
  getData=async()=>{
    var response = await db.collection('submit').doc(this.state.selectedId).get()
    // console.log(response.data())
    this.setState({
     
    feedback:response.data().feedback
    })

  }
  
  updateData = () => {
    db.collection('submit').doc(this.state.selectedId).update({
     feedback:this.state.feedback
    })
    alert('Changes Saved!');
    this.props.navigation.navigate('Submissionreceived')
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Text
            style={{
              marginTop: "20%",
              marginHorizontal: "5%",
              fontSize: 16,
              alignSelf: "center",
            }}
          >
            Edit Details
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
            <Feather name="at-sign" size={20} color="grey" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
              }}
              placeholder="Feedback"
              value={this.state.feedback}

              onChangeText={(val) => {
                this.setState({ feedback: val });
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              width: "90%",
              height: 40,
              marginTop: 30,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              this.updateData();
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Save Changes</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}