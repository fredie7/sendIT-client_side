import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    container: {
        // height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor:'red'
    },
    username: {
        height: 40,
        borderWidth: 1,
        width: '80%',
        borderRadius: 4,
        padding: 10,
        fontSize: 16,
        marginVertical: 5,
        backgroundColor: 'grey',
        borderWidth: 0.4,
        borderColor: 'orange',
        // fontWeight: 'light'
        
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: '100%',
        height: '100%',
    },
    signup: {
        textAlign: 'center',
        fontSize: 20,
        color: 'orange',
        marginVertical: 20,
    },
})

export default styles