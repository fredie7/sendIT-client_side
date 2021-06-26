import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    txt: {
        color: 'white',
        letterSpacing: 2,
    },
    wel: {
        color: 'orange',
        textAlign:'right',
        letterSpacing: 2
    },
    container: {
        
    },
    image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%'
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
        justifyContent: 'flex-start',
        letterSpacing: 2,
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
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        letterSpacing: 2,
    },
        
    new: {
        marginVertical: 20,
        letterSpacing: 2,
    },
    theme: {
        color: 'orange',
        fontSize: 20,
        letterSpacing: 2,
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
        width: '27%',
        marginVertical: 30,
        textAlign: 'center',
        height: 32,
        letterSpacing: 2,
        justifyContent:'center',
        alignItems:'center'
    },
    creatBtn: {
        letterSpacing: 2,
    }
})

export default styles