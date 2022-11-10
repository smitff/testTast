//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../config/theme/colors';

// create a component
const ListItem = ({item,dispatch,favlist,addFavourites,deleteFavourites}) => {
    return (
        <View style={styles.listItemConatiner}>
            <View style={styles.listItemImageContainer}>
                <Image
                    style={styles.listItemImage}
                    source={{uri:item.picture.thumbnail}}
                />
            </View>
                    
            <View style={styles.listItemBodyContainer}>
                    <View>
                        <Text style={{
                            fontSize:18,
                            fontWeight:'600',
                            color:colors.black,
                        }}>{item.name.first} {item.name.last}</Text>
                        <View style={{
                            flexDirection:'row',
                        }}>
                            <Ionicons name="location-sharp" size={20} color="black" />
                            <Text style={{
                                fontSize:16,
                                fontWeight:'400',
                                color:colors.secondary,
                            }}>{item.location.state} {item.location.country}</Text>
                        </View>
                    </View>

                <View style={{position: 'absolute',right: 10,top: 10}}>
                    <TouchableOpacity onPress={()=>{
                        favlist.favourites.includes(item) ?
                         dispatch(deleteFavourites(item)) : dispatch(addFavourites(item))}}>
                    <AntDesign name="staro" size={20} color={favlist.favourites.includes(item) ? colors.primary : colors.secondary} />
                    </TouchableOpacity>
                </View>
            </View>
                    

        </View>    
    );
};

// define your styles
const styles = StyleSheet.create({
    listItemConatiner:{
        flexDirection:'row',
        height:100,
        width:'100%',
    },
    listItemImageContainer:{        
        alignItems:'flex-start',
        width:'20%',
        position:'absolute',
        left:0,
        zIndex:1,
        alignSelf:'center',
    },
    listItemImage:{
        width:70,
        height:70,
        borderRadius:35
    },

    listItemBodyContainer:{
        flex:1,
        flexDirection:'row',
        marginLeft: "12%",
        paddingLeft: "10%",
        alignItems:'center',
        width:'80%',
        height:'100%',
    
        alignSelf:'center',
        paddingHorizontal:10,
        backgroundColor:colors.white,
        shadowColor: colors.black,
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:2,
        borderRadius:10,
        // paddingLeft: 20,
    }

});

//make this component available to the app
export default ListItem;
