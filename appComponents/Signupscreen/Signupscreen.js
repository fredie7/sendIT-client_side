import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from './style';

const Signupscreen = ({navigation}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const handleSubmit = async (e)=> {
        e.preventDefault()
        const user = {name,email, password}
        try {
            const postData = await fetch('http://localhost:7000/api/v1/auth/signup', {
                method: 'POST',
                headers: {
                     Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            const response = await postData.json()
            if (response.error) {
                setError(response.error)
            } else {
                setName('')
                setEmail('')
                setPassword('')
            }
            console.log(response)
            console.warn(response)
            console.log(response.error)
            return response
            
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/home-sending-package.jpg')}/>
            <View style={styles.form}>
            <TextInput style={styles.username} value={name} onChangeText={e=>setName(e.target.value)} placeholder='enter username'/>
            <TextInput style={styles.username} value={email} onChangeText={e=>setEmail(e.target.value)} placeholder='enter email'/>
            <TextInput style={styles.username} value={password} onChangeText={e=>setPassword(e.target.value)} placeholder='enter password'/>

            {/* <Pressable onPress={()=>navigation.navigate('Profile')}> */}
            <Pressable onPress={(e)=>handleSubmit(e)}>
                <Text style={styles.signup}>sign up</Text>
            </Pressable>
            <View style={styles.revert}>
                <Text style={styles.signin}>Got an account ?</Text>
                <Pressable onPress={()=>navigation.navigate('Signin')}>
                    <Text style={styles.signin}>sign in</Text>
                </Pressable>
            </View>
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
