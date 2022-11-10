//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Favourites from '../screens/Favourites';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../config/theme/colors';
const Tab = createBottomTabNavigator();

const Dashboard = () => {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarShowLabel:true,
            tabBarStyle:{
                position:'absolute',
                backgroundColor:colors.white,
                borderRadius:10,
                bottom:16,
                marginHorizontal:24,
                borderColor:'#C4C4C4',
                borderStyle:'solid',
                height:55.06,
                elevation:5,
                shadowColor:'black',
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 0.25,
                shadowRadius:3.5
            }
          }}
        >
            <Tab.Screen name="Home" component={Home}
              options={{
                tabBarIcon: ({color, size, focused}) => (
                   
                      <FontAwesome5
                      name="home"
                      color={focused ? "#F4006D" : "#000"}
                      size={22}
                      />
                ),
                tabBarLabel: ({color}) => (
                  <Text style={{fontSize: 14, color: color, paddingBottom: 5}}>
                    Home
                  </Text>
                ),
              }}
            />
            
            <Tab.Screen name="Favourites" component={Favourites}
              options={{
                tabBarIcon: ({color, size, focused}) => (
                    <AntDesign name="staro" size={22} 
                    color={focused ? "#F4006D" : "#000"}
                    />
                ),
                tabBarLabel: ({color}) => (
                  <Text style={{fontSize: 14,
                   color: color
                   , paddingBottom: 5}}>
                    Favourites
                  </Text>
                ),
              }}
            />

        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    bottomTabBarStyles:{
      
      position:'absolute',
      backgroundColor:colors.white,
      borderRadius:10,
      bottom:16,
      marginHorizontal:24,
      borderColor:'#C4C4C4',
      borderStyle:'solid',
      height:55.06,
      elevation:5,
      shadowColor:'black',
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius:3.5
    }


});

export default Dashboard;
