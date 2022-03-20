import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  SectionList,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase';
import db from '../config';
import { Icon } from 'react-native-elements';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default class AddIdea extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#9c78fe',
          borderRadius: 20,
          borderWidth: 10,
          borderColor: 'white',
        }}>
        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              padding: 10,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Hi Gamer,
          </Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, padding: 10, color: 'white' }}>
              What would you like to play?
            </Text>
            <Image
              source={require('../assets/R.png')}
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                marginRight: 20,
              }}
            />
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#FFF',
                paddingVertical: 8,
                paddingHorizontal: 10,
                marginHorizontal: 20,
                borderRadius: 15,
                marginTop: 25,
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <TextInput
                placeholder="Search"
                placeholderTextColor="#b1e5d3"
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  width: 260,
                }}
              />
              <Icon name="search1" type="antdesign" color="#b1e5d3" size={15} />
            </View>
          </View>

          <View
            style={{
              width: '100%',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              height: '70%',
              alignItems: 'center',
              marginTop: '10%',
              backgroundColor: 'white', 
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  marginRight: 20,
                  borderRadius: 20,
                  width: 30,
                  height: 30,
                  flexDirection: 'row',
                }}
                onPress={() => {
                  this.props.navigation.navigate('Category',{name:'Arcade'});
                }}>
                <Image 
                  source={require('../assets/arcade.jpg')}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    marginRight: 30,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginLeft: 20,
                  borderRadius: 20,
                  width: 30,
                  height: 30,
                  flexDirection: 'row',
                }}
                onPress={() => {
                  this.props.navigation.navigate('Category',{name:'Sports'});
                }}>
                <Image
                  source={require('../assets/ball.jpg')}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    marginRight: 30,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginLeft: 40,
                  borderRadius: 20,
                  width: 30,
                  height: 30,
                  flexDirection: 'row',
                  marginRight: 30,
                }}
                onPress={() => {
                  this.props.navigation.navigate('Category',{name:'Board'});
                }}>
                <Image
                  source={require('../assets/board.jpg')}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    marginRight: 30,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  borderRadius: 20,
                  width: 30,
                  height: 30,
                  flexDirection: 'row',
                }}
                onPress={() => {
                  this.props.navigation.navigate('Category',{name:'More'});
                }}>
                <Image
                  source={require('../assets/puzzz.png')}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    marginRight: 30,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10,
                  flexWrap: 'wrap',
                  fontWeight: 'bold',
                  marginRight: 10,
                }}>
                Arcade
              </Text>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 10,
                    marginLeft: 30,
                    flexWrap: 'wrap',
                    fontWeight: 'bold',
                    marginRight: 10,
                  }}>
                  Sports
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 10,
                    marginLeft: 30,
                    flexWrap: 'wrap',
                    fontWeight: 'bold',
                    marginRight: 10,
                  }}>
                  Board
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 10,
                    marginLeft: 30,
                    flexWrap: 'wrap',
                    fontWeight: 'bold',
                  }}>
                  More
                </Text>
              </View>
            </View>
            <View style={{ marginRight: 150, marginTop: 20 }}>
              <Text style={{ fontSize: 15, padding: 10, fontWeight: 'bold' }}>
                Popular Games
              </Text>
            </View>

            <View style={styles.container}>
              <SafeAreaView>
                <SectionList
                  contentContainerStyle={{
                    paddingHorizontal: 10,
                    borderRadius: 10,
                  }}
                  stickySectionHeadersEnabled={false}
                  sections={SECTIONS}
                  renderSectionHeader={({ section }) => (
                    <>
                      <Text style={styles.sectionHeader}>{section.title}</Text>
                      {section.horizontal ? (
                        <FlatList
                          horizontal
                          data={section.data}
                          renderItem={({ item }) => <ListItem item={item} />}
                          showsHorizontalScrollIndicator={false}
                        />
                      ) : null}
                    </>
                  )}
                  renderItem={({ item, section }) => {
                    if (section.horizontal) {
                      return null;
                    }
                    return <ListItem item={item} />;
                  }}
                />
              </SafeAreaView>
            </View>
            <View style={{ marginLeft: 50 }}>
              <Text style={{ fontSize: 15, padding: 10, fontWeight: 'bold' }}>
                Newest Games
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../assets/boardGame.jpeg')}
                  style={{
                    padding: 10,
                    width: 80,
                    height: 60,
                    borderRadius: 10,
                  }}
                />
                <View>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    HEDBENZ
                  </Text>

                  <Text style={{ fontSize: 10, margin: 10 }}>Bored Game</Text>
                  <View
                    style={{
                      marginRight: 40,
                      flexDirection: 'row',
                      marginLeft: 10,
                    }}>
                    <Icon
                      name="star"
                      type="ant-design"
                      color="yellow"
                      size={10}
                    />
                    <Icon
                      name="star"
                      type="ant-design"
                      color="yellow"
                      size={10}
                    />
                    <Icon
                      name="star"
                      type="ant-design"
                      color="yellow"
                      size={10}
                    />

                    <TouchableOpacity
                      style={{
                        backgroundColor: '#9c78fe',
                        marginLeft: 50,
                        justifyContent: 'space-between',
                        borderRadius: 20,
                        width: 90,
                        height: 30,
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'white',
                          marginLeft: 20,
                          padding: 5,
                        }}>
                        Install
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const SECTIONS = [
  // Creating sections for horizontal
  {
    horizontal: true,
    data: [
      {
        key: '1',
        uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1149d328-4a22-4ba9-a949-ecf073d4f30d/da96cg5-70a45744-776f-40d8-bad5-09a8bb023914.png/v1/fill/w_1024,h_575,q_80,strp/12_by_silvertrunks06_da96cg5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzUiLCJwYXRoIjoiXC9mXC8xMTQ5ZDMyOC00YTIyLTRiYTktYTk0OS1lY2YwNzNkNGYzMGRcL2RhOTZjZzUtNzBhNDU3NDQtNzc2Zi00MGQ4LWJhZDUtMDlhOGJiMDIzOTE0LnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.6-2k9Kht4EYvhb_VLVTqWT1r60BY5MvVtm8Jf8Vo5vA',
      },
      {
        key: '2',

        uri: 'https://th.bing.com/th/id/OIP.x73pCNO2V4nekCipIMzkSgHaEK?pid=ImgDet&rs=1',
      },

      {
        key: '3',

        uri: 'https://th.bing.com/th/id/OIP.bHoFC6YKjtNUjEMjBl4QMQHaDn?pid=ImgDet&rs=1',
      },
      {
        key: '4',

        uri: 'https://i.ytimg.com/vi/uKxCD0AYg0w/maxresdefault.jpg',
      },
      {
        key: '5',
        uri: 'http://3i1e5d437yd84efcy34dardm-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/hedbanz-game.jpeg',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    marginLeft: 390,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    alignItems: 'center',
    width: 110,
    height: 80,
    borderRadius: 20,
  },
});
