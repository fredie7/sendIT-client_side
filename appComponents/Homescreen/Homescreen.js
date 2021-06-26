import React from 'react'
import { StyleSheet, Text, View, Background, ImageBackground, Pressable,Image } from 'react-native';
import styles from './style'

const Homescreen = (navigation) => {
    // console.log(props.navigation.navigate)
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
                        <Text style={styles.start} onPress={()=>{navigation.navigate('MakeOrder')}}>
                        GET STARTED
                        </Text>
                    </Pressable>
                </View>
        </View>
    )
}

export default Homescreen
