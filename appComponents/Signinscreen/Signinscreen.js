import React from 'react'
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from './style';

const Signinscreen = ({navigation}) => {
    return (
        <>
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/home-sending-package.jpg')}/>
            <View style={styles.form}>
            <TextInput style={styles.username} placeholder='enter email'/>
            <TextInput style={styles.username} placeholder='enter password'/>

            <Pressable onPress={()=>navigation.navigate('Profile')}>
                <Text style={styles.signup}>sign in</Text>
            </Pressable>
            <View style={styles.revert}>
                <Pressable>
                    <Text style={styles.forgot}>forgot password ?</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.forgot}>reset password</Text>
                </Pressable>
            </View>
            </View>
        </View>
        </>
    )
}

export default Signinscreen
