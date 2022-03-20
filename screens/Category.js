import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import db from '../config';
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default class Category extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      ideas: [],
      // selectedCategory: props.route.params.name,
    };
  }
  getData = async () => { 
    this.setState({ideas:[]})
    if (this.props.route.params) {
      var response = await db 
        .collection('request')
        .where('category', '==', this.props.route.params.name) 
        .get();  
      response.docs.map((d) => { 
        var temparr = this.state.ideas;
         var data = d.data();
      data.id = d.id;
        temparr.push(data);
       this.setState({ ideas: temparr }); 
      });
    } else {
      var response = await db.collection('request').get();
      response.docs.map((d) => { 
        var temparr = this.state.ideas; 
        var data = d.data();
      data.id = d.id;
        temparr.push(data);
       this.setState({ ideas: temparr });
      });
    } 
  };
  componentDidMount() { 
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
    this.getData();


    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }
  render() {
    console.log(this.state.request);
    if (this.state.ideas.length === 0) {
      return (
        <View>
          <Text style={{ flex: 1 }}>Games in this category will appear here!</Text>
        </View>
      );
    } else {
        
      return (
        <View style={{ flex: 1,backgroundColor:"#9c78fe" }}> 
        
          <ScrollView>
             <View style={{ flex: 1 }}>
                <Text
                  style={{
                    padding: 10,
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'white',
                  }}>
                  List of All Games....
                </Text>

                {this.state.ideas.map((a) => {
                  console.log(a)
                  return (
                      
                    <View style={styles.container}>
                       
                      <View
                key={a.id}
                  style={{
                    backgroundColor: "#ff6fff",
                    width: "90%",
                    alignSelf: "center",
                    borderRadius: 10,
                    marginTop: 10,
                    flexDirection: "row",
                    padding: 20,
                   borderWidth:5,
                    borderColor:"purple",
                    borderBottomLeftRadius:50,
                    borderTopRightRadius:50

                  }}
                >
               
                    
                 <TouchableOpacity
                          style={styles.infoStyle}
                          onPress={() => {
                            this.props.navigation.navigate("expand",{selectedId:a.id});
                          }}>
                          <Image
                            source={{ uri: a.image }} 
                            style={styles.imageStyle}
                          />
                        </TouchableOpacity> 
                            

                    <View style={{ marginHorizontal: 5,flex:1 }}>
                      <View style={{flexDirection:"row"}}>
                            
                    <Ionicons name="person" size={20} color="purple" />
                     <Text style={{ marginLeft: '5%', fontSize: 22,color:"white",fontWeight:"bold" }}>
                            {a.yourname}
                          </Text>
                          </View>
                          <View style={{flexDirection:"row",marginTop:10,}}>
                            <FontAwesome name="gamepad" size={20} color="purple" />
 <Text style={{ marginLeft: '5%', fontSize: 15,color:"white",fontWeight:"bold" }}>
                            {a.title}
                          </Text>
</View>
                          <Text
                      style={{
                     fontSize:13,
                        color: "gray",
                        fontWeight:"bold",
                        marginLeft:25,margin:10
                      }}
                    >
                      {a.category}
                    </Text>

                      </View>

                    </View>
                     </View>
                  );
                })}
              </View>
          
          </ScrollView>
        </View>
      );
    
    }
  }
}
const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 50;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 30,
    alignItems: 'center',
    marginTop: 25,
  },
  imageStyle: {
    height: 100,
    width: 100,
  borderRadius: 10
  },
  infoStyle: {
    marginHorizontal: 5,
  },
});
