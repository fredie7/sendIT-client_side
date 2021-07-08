import React from 'react'
import { StyleSheet, Text, View, Background, ImageBackground, Pressable,Image } from 'react-native';
import styles from './style'
import {useNavigation} from '@react-navigation/native';

const Homescreen = ({navigation}) => {
    // console.log(navigation)

    return (
        <View style={styles.wrapper}>
            <Image style={styles.image} source={require('../../assets/images/home-sending-package.jpg')}/>
                <View style={styles.img}>
                    <Text style={styles.send}>
                    <Text style={styles.singleElement}>Send</Text>IT
                    </Text>
                    <Text style={styles.about}>
                    <Text>Send Packages Anywhere...</Text>{'\n'}
                    <Text>We pick up, deliver and let you track the process</Text>{'\n'}
                    <Text>Ain't that cool?</Text>
                    </Text>
                    <Pressable>
                        <Text style={styles.start} onPress={()=>{navigation.navigate('Signup')}}>
                        {/* <Text style={styles.start} onPress={()=>{navigation.navigate('Navigation')}}> */}
                        GET STARTED
                        </Text>
                    </Pressable>
                </View>
        </View>
    )
}

export default Homescreen
