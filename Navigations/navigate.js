import React from 'react';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

import Loading from '../screens/Loading';
import ForgotPassword from '../screens/ForgotPassword';

import Home from '../screens/Home';
import Firstscreen from '../screens/Firstscreen';
import Home2 from "../screens/Home2"
import Category from "../screens/Category"
import AddIdea from "../screens/AddIdea"
import expand from "../screens/expand"
import Submissionreceived from "../screens/Submissionreceived"
import Feedback from "../screens/Feedback"
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function MyStack() { 
    return (
     
      <Stack.Navigator  screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#fe6076' },
      }}>
   <Stack.Screen name="Firstscreen" component={Firstscreen} options={{headerShown:false}}/> 
    <Stack.Screen name="Loading" component={Loading} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
       <Stack.Screen name="Home2" component={Home} />  
       <Stack.Screen name="Home" component={Home}options={{headerShown:false}} /> 
        <Stack.Screen name="AddIdea" component={AddIdea}options={{headerShown:false}} /> 
        <Stack.Screen name="Category" component={Category}options={{headerShown:false}} /> 
      <Stack.Screen name="expand" component={expand} options={{headerShown:true}}/> 
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} /> 
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:true}} /> 
        <Stack.Screen name="Submissionreceived" component={Submissionreceived} options={{headerShown:true}} /> 
        <Stack.Screen name="Feedback" component={Feedback} options={{headerShown:true}} /> 
      
      
        
       

      </Stack.Navigator>
      
    );
  }

  export default MyStack;