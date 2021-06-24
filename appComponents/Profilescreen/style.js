import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    nav: {
        // alignSelf: 'flex-start',
    },
    container: {
        // margin: 10,
        padding: 10,
        position: 'relative',
        backgroundColor: '#2F4F4F',
        // opacity: 0.8,
    },
    welcome: {
        position: 'absolute',
        right: 10,
        // color: 'red',
    },
    number: {
        color: 'white',
    },
    details: {
        color: 'white',
    },

    wel: {
        color: 'orange'
    },
    stats: {
        marginVertical: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    all: {
        // padding: 10
    },
    text: {
        color: '#f4f4f4',
    },
    orders: {
        marginLeft: 10,
        color: 'orange',
        letterSpacing: 3,
    },
    transit: {
        marginVertical: 5,
        color: 'orange',
        letterSpacing: 1.8,
    },
    created: {
        color: 'orange',
        letterSpacing: 1.8,
    },
    onorder: {
        color: '#f4f4f4',
    },
    oncreated: {
        color: '#f4f4f4',
    },
    order: {
        borderRightColor:'orange',
        borderBottomColor:'orange',
        borderTopColor:'white',
        borderLeftColor:'white',
        borderRightWidth:2,
        borderBottomWidth:1,
        // margin: 10,
        marginVertical:5,
        height: 150,
        borderWidth: 0.2,
        borderRadius: 5,
        padding:5,
        position: 'relative',
        // borderTopColor: 'red'
        width: '100%',
        // marginRight:20
    },
    orderItem: {
        padding: 5,
        // overflow: 'hidden',
    },
    description: {
        fontWeight: 'bold',
    },
    desc: {
        color: '#f1f1f1',
        letterSpacing: 2,
    },

    details: {
        marginTop: 5,
        fontSize: 15,
    },
    view: {
        // marginTop: 5,
        position: 'absolute',
        bottom: 5,
        fontSize: 15,
        fontWeight:'bold',
        marginLeft: 10,
        backgroundColor: 'orange',
        padding: 3.5,
        borderRadius: 4,
        color: 'white',
        borderColor: 'white',
        borderWidth: 0.8,
    }

})

export default styles;