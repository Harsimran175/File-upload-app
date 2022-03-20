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
  Dimensions,Linking
} from 'react-native';
import db from '../config';
import firebase from "firebase";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient'
export default class Submissionreceived extends Component {
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
        .collection('submit')
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
      var response = await db.collection('submit').get();
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
        <View style={{ flex: 1, backgroundColor:"#9c78fe"}}> 
          <ScrollView>
          
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    padding: 10,
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'white',
                  }}>
                  List of All Submissions....
                </Text>

                {this.state.ideas.map((a) => {
                  console.log(a)
                  return (
                    <View style={styles.container}>
                    
                      <View style={styles.cardContainer}>
                   
                        <View
                          style={{flexDirection:"row"}}
                          onPress={() => {
                            this.props.navigation.navigate("expand",{selectedId:a.id});
                          }}>
                          <Image
                            source={{ uri: a.image }} 
                            style={styles.imageStyle}
                          />
                  
 
                        <View style={styles.infoStyle}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 15, 
                                 color: 'white',marginTop:10
                            }}>
                          </Text>
                        <Ionicons name="person" size={20} color="purple" />

                          <Text style={{ width:100,marginLeft: '5%', fontSize: 30,   color: 'white',fontWeight:"bold" }}>
                            {a.yourname}
                          </Text>
                        </View>
                              </View> 
                        <View style={styles.infoStyle}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 15,
                                 color: 'white',
                            }}>
                            Title:
                          </Text>

                          <Text style={{  width:100,marginLeft: '5%', fontSize: 15,   color: 'white',fontWeight:"bold" }}>
                            {a.title}
                          </Text>
                        </View>
                        <View style={styles.infoStyle}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 15,
                                 color: 'white',
                            }}>
                            Category:
                          </Text>

                          <Text style={{ marginLeft: '5%', fontSize: 15,   color: 'white', }}>
                            {a.category}
                          </Text>
                        </View>

                        <View style={styles.infoStyle}
                          onPress={() => Linking.openURL("githublink")}>
                      
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 15,
                                 color: 'white',
                            }}>
                            GithubLink:
                          </Text>

                          <Text
                            style={{ marginLeft: '5%', fontSize: 15,   color: 'white', }}
                            numberOfLines={2}>
                            {a.githublink}
                          </Text>
                        </View>
                         <View style={styles.infoStyle}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 15,
                                 color: 'white',
                            }}>
                            Created By:
                          </Text>

                          <Text
                            style={{ marginLeft: '5%', fontSize: 15 ,   color: 'white',}}
                            numberOfLines={2}>
                            {a.email}
                          </Text>
                        </View>
                        <View style={styles.infoStyle}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 15,
                                 color: 'white',
                            }}>
                            User-Email:
                          </Text>

                          <Text
                            style={{ marginLeft: '5%', fontSize: 15 ,   color: 'white',}}
                            numberOfLines={2}>
                            {a.userEmail}
                          </Text>
                        </View>
                             <View style={styles.infoStyle}
                          onPress={() => Linking.openURL("githublink")}>
                      
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 15,
                                 color: 'white',
                            }}>
                            Feedback:
                          </Text>

                          <Text
                            style={{ marginLeft: '5%', fontSize: 15,   color: 'white', }}
                            numberOfLines={2}>
                            {a.feedback}
                          </Text>
                          <TouchableOpacity
            style={{
              backgroundColor: "#9c78fe",
              width: "30%",
              height: 30,
              marginTop: 10,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              borderColor:"white",
              borderWidth:2,
              marginLeft:30
            }}
            onPress={() => {
              
              this.props.navigation.navigate('Feedback',{selectedId:a.id})
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Edit</Text>
          </TouchableOpacity>
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
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginTop: 25,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#D29062',
    height: 380,
    borderRadius: radius,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 130,
    width: "50%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
 
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '800',
  },
  categoryStyle: {
    fontWeight: '200',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
  },
  iconLabelStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

