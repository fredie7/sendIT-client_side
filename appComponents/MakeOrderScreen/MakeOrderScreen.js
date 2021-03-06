import React from 'react'
import {View, Text, Image, TextInput,Pressable, ScrollView} from 'react-native'
import styles from './style'

const MakeOrderScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/home-sending-package.jpg')}/>
            <View style={styles.form}>
                <Text style={styles.wel}>Welcome Lex</Text>
                <View style={styles.new}>
                    <Text style={styles.theme}>NEW ORDER</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Provide Pickup Location'/>
                    <TextInput style={styles.input} placeholder='Provide Delivery Location'/>
                    <TextInput style={styles.input} placeholder='Provide present Location'/>
                    <TextInput style={styles.input} placeholder="Receiver's Phone Number"/>
                    <TextInput style={styles.input} placeholder="Receiver's Email"/>
                    <TextInput style={styles.textArea} placeholder="Describe Parcel" multiline={true} numberOfLines={4}/>
                    <TextInput style={styles.input} placeholder='Enter Approximate Weight'/>
                </View>
            <Pressable style={styles.view}>
                <Text style={styles.createBtn}>CREATE ORDER</Text>
            </Pressable>    
            </View>

        </ScrollView>
    )
}

export default MakeOrderScreen
