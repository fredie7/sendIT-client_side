import React from 'react'
import {View, Text, Image, TextInput,Pressable} from 'react-native'
import styles from './style'

const MakeOrderScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/home-sending-package.jpg')}/>
            <View style={styles.form}>
                <Text style={styles.wel}>Welcome Lex</Text>
                <View style={styles.new}>
                    <Text style={styles.theme}>NEW ORDER</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='provide pickup location'/>
                    <TextInput style={styles.input} placeholder='provide delivery location'/>
                    <TextInput style={styles.input} placeholder='provide present location'/>
                    <TextInput style={styles.input} placeholder="receiver's phone"/>
                    <TextInput style={styles.input} placeholder="receiver's email"/>
                    <TextInput style={styles.textArea} placeholder="describe parcel" placeholderTextTop={200}/>
                    <TextInput style={styles.input} placeholder='enter approximate weight'/>
                </View>
            <Pressable style={styles.view}>
                <Text>CREATE ORDER</Text>
            </Pressable>    
            </View>

        </View>
    )
}

export default MakeOrderScreen
