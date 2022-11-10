//import liraries
import React, {useState,useEffect,useCallback} from 'react';
import { View, Text, StyleSheet,SafeAreaView,TextInput,TouchableOpacity,Alert,FlatList,Image,ActivityIndicator } from 'react-native';
import {getUsersList} from '../redux/actions/users'
import {addFavourites,getFavouritesList,deleteFavourites} from '../redux/actions/favourites'
import {useDispatch,useSelector} from'react-redux'
import ListItem from '../components/Listitem';
import { colors } from '../config/theme/colors';
import {loadingstyle} from '../config/style/common_style';


const Home = () => {
    const [page,setPage] = useState(1);
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const favlist = useSelector(state=>state.favourites)

    useEffect(() => {
        dispatch(getFavouritesList())
    }, [])
    
    const _keyExtractor = (item, index) => item.email
    const _renderItem = useCallback(
        ({item}) => 
            <ListItem item={item} dispatch={dispatch} favlist={favlist} addFavourites={addFavourites} deleteFavourites={deleteFavourites} />,[favlist.favourites,])
    
    const getAllusers = ()=>{
        dispatch(getUsersList(page))
    }

    useEffect(()=>{
        dispatch(getUsersList(page))

    },[])
    

    const loadmore = () =>{
        if(!users.loadExtradata){
            setPage(page + 1)
            getAllusers();

        }

    }

    const _flatListItemSeparator = () => {
        return(
            <View style={{height:10}}/>
        )
    }



    if(users.loading){
        return(
            <View style={loadingstyle}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex:1}}>
                <FlatList
                style={{marginTop: 5}}
                data={users?.users}
                showsVerticalScrollIndicator={false}
                keyExtractor={_keyExtractor}
                renderItem={_renderItem}
                ItemSeparatorComponent={_flatListItemSeparator}
                showsHorizontalScrollIndicator={false}
                onEndReachedThreshold={0}
                onEndReached={loadmore}
                />
                {
                    users.loadExtradata && <ActivityIndicator size="large" color={colors.primary} />
                }
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.bg,
        paddingHorizontal: 10,
    },
});

export default Home;
