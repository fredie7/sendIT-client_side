import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
        // padding: 5,
        // margin: 5,
    },
    
    image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // opacity: 0.4,
    },  
    img: {
        tintColor: 'rgba(255,0,0,0.6)',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        // opacity:0.2,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        // height: 100,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        backgroundColor:'red',
        fontSize: 50
    },
    it: {
        fontSize: 65
    },

    send: {
        color:'white',
        fontWeight: 'bold',
        fontSize:40,
    },
    about: {
        color:'white',
        fontWeight: 'bold',
        fontSize:23,
        textAlign:'center'
    },
    
    start: {
        color:'white',
        fontWeight: 'bold',
        fontSize:30,
    },
    singleElement: {
        color: 'orange',
    }
})

export default styles