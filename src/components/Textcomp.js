//import liraries
import React from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

const Textcomp = ({style,value,setValue,setIsFocused,keyboardType,placeholder,placeholderTextColor,secureTextEntry=false,onChangeText}) => {
    return (                
    <TextInput
        autoCapitalize="none"
        style={[styles.textInput,{...style}]}
        onChangeText={onChangeText}
        value={value}
        onFocus={()=>{setIsFocused(true)}}
        onBlur={()=>{setIsFocused(false)}}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
    />
    );
};

const styles = StyleSheet.create({
    textInput:{
        flex: 1,
        color: 'black',
        fontSize: 16    ,
        fontWeight: '400',
    }
});

export default Textcomp;
