import React from 'react'
import {View, Text, Image, TextInput,Pressable, ScrollView} from 'react-native'
import styles from './style'

const ViewOrder = () => {
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/home-sending-package.jpg')}/>
            <View style={styles.form}>
                <Text style={styles.wel}>Welcome Lex</Text>
                <View style={styles.new}>
                    <Text style={styles.theme}>ORDER DETAILS</Text>
                </View>
                <View>
                    <Text style={styles.txt}>Pick up location</Text>
                    <TextInput style={styles.input} placeholder='Provide Pickup Location'/>
                    <Text style={styles.txt}>Delivery location</Text>
                    <TextInput style={styles.input} placeholder='Provide Delivery Location'/>
                    <Text style={styles.txt}>Present location</Text>
                    <TextInput style={styles.input} placeholder='Provide present Location'/>
                    <Text style={styles.txt}>Phone number</Text>
                    <TextInput style={styles.input} placeholder="Receiver's Phone Number"/>
                    <Text style={styles.txt}>Receiver's email</Text>
                    <TextInput style={styles.input} placeholder="Receiver's Email"/>
                    <Text style={styles.txt}>Description</Text>
                    <TextInput style={styles.textArea} placeholder="Describe Parcel" multiline={true} numberOfLines={4}/>
                    <Text style={styles.txt}>Weight measure</Text>
                    <TextInput style={styles.input} placeholder='Enter Approximate Weight'/>
                </View>
            <Pressable style={styles.view}>
                <Text style={styles.createBtn}>BACK</Text>
            </Pressable>    
            </View>

        </ScrollView>
    )
}

export default ViewOrder
