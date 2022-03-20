import React, { Component } from "react";
import { View,StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {MaterialIcons} from "@expo/vector-icons";
import AddIdea from "../screens/AddIdea";
import Category from "../screens/Category";
import Home2 from "./Home2"
const Tab = createBottomTabNavigator();
import { RFValue } from "react-native-responsive-fontsize";
export default class BottomTabNavigator extends Component {
  render() {
    return (
      
      <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Category") {
            iconName = MaterialIcons ? "open" : "view-dashboard";
          }else if (route.name === "Add") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        }
      })}
      activeColor={"#ee8249"}
      inactiveColor={"gray"}
    >
      <Tab.Screen name="Home" component={AddIdea} />
       <Tab.Screen name="Add" component={Home2} />
      <Tab.Screen name="Category" component={Category} />
     
    </Tab.Navigator>
  );
}
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

