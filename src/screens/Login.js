//import liraries
import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet,SafeAreaView,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView,ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Textcomp from '../components/Textcomp';
import { dropshadow } from '../config/style/common_style';
import {colors} from '../config/theme/colors';
import { Snackbar } from 'react-native-paper';
// create a component
const Login = ({navigation}) => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [authenticate, setauthenticate] = useState(false);
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const [message, setmessage] = useState('');
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);

    const handleLogin = ()=>{
    
        if(email == '' || password == ''){
            // navigation.navigate('Dashboard')
            setmessage('Please enter email and password')
            onToggleSnackBar()
        }
        else if(!authenticate){
            setmessage('Login Failed')
            onToggleSnackBar()    
        }
        else{
            setmessage('Login Success')
            onToggleSnackBar()
            navigation.navigate('Dashboard')
        }
    }

    const onChangeEmail = (e)=>{
        setemail(e)
        if(e==='reactnative@jetdevs.com' && password==='jetdevs@123'){
            setauthenticate(true)
        }
    }

    const onChangePassword = (e)=>{
        setpassword(e)
        if(e==='jetdevs@123' && email==="reactnative@jetdevs.com"){
            setauthenticate(true)
        }
    }

    return (
        <ScrollView 
        contentContainerStyle={{flexGrow:1}}
        style={{flex:1}}>
            <KeyboardAvoidingView style={{flex:1}}>
                <SafeAreaView style={styles.container}>
                    <View style={[styles.mainContainer,dropshadow]}>
                        <View style={styles.bottomContainer}>
                            <View style={[styles.textcompcontainer,{
                                borderColor: isFocusedEmail ? colors.primary : colors.secondary,
                            }]}>    
                                <MaterialCommunityIcons style={{alignSelf: 'center',}}
                                    name="email-outline"
                                    size={22}
                                    color={isFocusedEmail ? colors.primary :colors.secondary}/>
                                <Textcomp
                                    style={{}}
                                    value={email}
                                    setValue={setemail}
                                    setIsFocused={setIsFocusedEmail}
                                    keyboardType="email-address"
                                    placeholder="Enter mail"
                                    placeholderTextColor="#A9A9A9"
                                    onChangeText={onChangeEmail}
                                />
                            </View>
                            <View style={[styles.textcompcontainer,{
                                borderColor: isFocusedPassword ? colors.primary : colors.secondary,
                            }]}>    
                                <MaterialCommunityIcons
                                    style={{alignSelf: 'center',}}
                                    name="lock-outline"
                                    size={22}
                                    color={isFocusedPassword ? colors.primary : colors.secondary}/>
                                <Textcomp
                                    style={{}}
                                    value={password}
                                    setValue={setpassword}
                                    setIsFocused={setIsFocusedPassword}
                                    keyboardType=""
                                    placeholder="Enter password"
                                    placeholderTextColor="#A9A9A9"
                                    secureTextEntry={true}
                                    onChangeText={onChangePassword}
                                />
                            </View>
                            <View style={styles.btnContainer}>
                                <TouchableOpacity
                                onPress={() => handleLogin()}
                                style={[styles.btnPressContainer, {backgroundColor: authenticate ? colors.primary:colors.secondary}]}>
                                    <Text style={styles.logintext}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                        <Snackbar
                        visible={visible}
                        onDismiss={onDismissSnackBar}
                        duration={2000}
                        wrapperStyle={{
                            alignSelf:'center',
                            position:'absolute',
                            top:0,
                        }}
                        style={{backgroundColor:colors.secondary}}
                        action={{
                        // label: 'Undo',
                        onPress: () => {
                            // Do something
                        },
                        }}>
                        {message}
                        </Snackbar>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    mainContainer:{
        flex:0.8,
        backgroundColor:colors.white,
        borderRadius:10,
        justifyContent:'center',
    },
    bottomContainer:{
        flex:1/3.5,
        justifyContent:'space-evenly',
        paddingHorizontal: 20,
    },
    btnContainer:{
        width: '100%',
        marginTop: 44,
    },
    btnPressContainer:{
        justifyContent:'center',
        alignItems:'center',
        height: 40,
        borderRadius:5
    },
    logintext:{
        color: colors.white,
        fontWeight: '700',
        fontSize: 20,
    },
    textcompcontainer:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        justifyContent:'space-between'
    }
});

//make this component available to the app
export default Login;
