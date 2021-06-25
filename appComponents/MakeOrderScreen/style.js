import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    wel: {
        color: 'white',
        textAlign:'right',
    },
    container: {
        
    },
    image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    form: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        height: '100%',
        width: '100%',
        padding: 30,
    },
    input: {
        height: 37,
        borderWidth: 1,
        width: '100%',
        borderRadius: 4,
        padding: 10,
        fontSize: 16,
        marginVertical: 10,
        backgroundColor: 'grey',
        borderWidth: 0.4,
        borderColor: 'orange',
        // fontWeight: 'light'
    },
    textArea: {
        height: 80,
        borderWidth: 1,
        width: '100%',
        borderRadius: 4,
        padding: 10,
        fontSize: 16,
        marginVertical: 10,
        backgroundColor: 'grey',
        borderWidth: 0.4,
        borderColor: 'orange',
        // fontWeight: 'light'
    },
        
    new: {
        marginVertical: 20,
    },
    theme: {
        color: 'orange',
        fontSize: 20,
    },
    view: {
        // marginTop: 5,
        // position: 'absolute',
        // bottom: 25,
        fontSize: 15,
        fontWeight:'bold',
        //marginLeft: 30,
        backgroundColor: 'orange',
        padding: 3.8,
        borderRadius: 4,
        color: 'white',
        borderColor: 'white',
        borderWidth: 0.8,
        width: '37%',
        marginVertical: 30,
        textAlign: 'center',
        height: 32,
    }
})

export default styles