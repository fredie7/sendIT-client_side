import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from './style';

const Signupscreen = (props) => {
    const [text, setText] = useState('')
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/home-sending-package.jpg')}/>
            <View style={styles.form}>
            <TextInput style={styles.username} placeholder='enter username'/>
            <TextInput style={styles.username} placeholder='enter email'/>
            <TextInput style={styles.username} placeholder='enter password'/>

            <Pressable>
                <Text style={styles.signup}>sign up</Text>
            </Pressable>
            {/* <TextInput
                style={{height: 40, borderWidth:10}}
                placeholder="Type here to translate!"
                onChangeText={text => setText(text)}
                defaultValue={text}
            /> */}
            </View>
        </View>
    )
}

export default Signupscreen
