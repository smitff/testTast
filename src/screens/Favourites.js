//import liraries
import React, { useEffect,useCallback} from 'react';
import { View, Text, StyleSheet,SafeAreaView,FlatList,TouchableOpacity } from 'react-native';
import {useDispatch,useSelector} from'react-redux'
import ListItem from '../components/Listitem';
import {getFavouritesList,deleteFavourites, addFavourites} from '../redux/actions/favourites'
import {loadingstyle} from '../config/style/common_style';
import { colors } from '../config/theme/colors';
// create a component
const Favourites = ({navigation}) => {

    const dispatch = useDispatch();
    const favlist = useSelector(state=>state.favourites)

    useEffect(() => {
        dispatch(getFavouritesList())
    }, [])


    const _keyExtractor = (item, index) => item.email

    const _renderItem = useCallback(
        ({item}) => 
            <ListItem item={item} dispatch={dispatch} favlist={favlist} addFavourites={addFavourites} deleteFavourites={deleteFavourites} />,[favlist.favourites,])
    
      const _flatListItemSeparator = () => {
        return(
            <View style={{height:10}}/>
        )
      }


    if(favlist.loading){
        return(
            <View style={loadingstyle}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        )
    }

    else if (favlist.favourites.length === 0){
        return(
            <View style={loadingstyle}>
                <Text style={{fontSize:20,fontWeight:'600',color:colors.primary}}>No Favourites</Text>
            </View>
        )
        }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex:1}}>
                <FlatList style={{marginTop: 5}}
                data={favlist.favourites}
                // extraData={listdata.favourites}
                showsVerticalScrollIndicator={false}
                keyExtractor={_keyExtractor}
                renderItem={_renderItem}
                ItemSeparatorComponent={_flatListItemSeparator}
                showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 10,
    },
});

export default Favourites;
