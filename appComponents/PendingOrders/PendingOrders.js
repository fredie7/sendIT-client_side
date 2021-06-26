import React from 'react'
import { StyleSheet, Text, View, Background, ImageBackground, Pressable,ScrollView,Image } from 'react-native';
import styles from './style';

const PendingOrders = () => {
    return (
        <ScrollView style={styles.container}>
            <View >
                <View style={styles.welcome}>
                    <Text style={styles.wel}>Welcome <Text style={styles.name}>Tarik</Text></Text>
                </View>
                <View style={styles.stats}>
                    <Text style={styles.pending}><Text style={styles.number}>20</Text>  <Text style={{color:'orange',fontSize:15}}>Pending</Text></Text>
                    <Text style={styles.pending}><Text style={styles.number}>20</Text>  <Text style={{color:'orange',fontSize:15}}>Delivered</Text></Text>
                    <Text style={styles.pending}><Text style={styles.number}>20</Text>  <Text style={{color:'orange',fontSize:15}}>Cancelled</Text></Text>
                </View>
            </View>
            <View style={styles.all}>
                <Text style={styles.orders}>MY ORDERS</Text>
                <View style={styles.orderItem}>
                    <View style={styles.order}>
                        <View style={styles.description}>
                            <Text style={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, reiciendis!</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.transit}>ORDER STATUS: <Text style={styles.onorder}>in transit</Text></Text>
                            <Text style={styles.created}>CREATED AT: <Text style={styles.oncreated}>25th Dec, 2021</Text></Text>
                        </View>
                        <Pressable style={styles.view}>
                            <Text>VIEW ORDER</Text>
                        </Pressable>    
                    </View>
                    <View style={styles.order}>
                        <View style={styles.description}>
                            <Text style={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, reiciendis!</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.transit}>ORDER STATUS: <Text style={styles.onorder}>in transit</Text></Text>
                            <Text style={styles.created}>CREATED AT: <Text style={styles.oncreated}>25th Dec, 2021</Text></Text>
                        </View>
                        <Pressable style={styles.view}>
                            <Text>VIEW ORDER</Text>
                        </Pressable>    
                    </View>
                    <View style={styles.order}>
                        <View style={styles.description}>
                            <Text style={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, reiciendis!</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.transit}>ORDER STATUS: <Text style={styles.onorder}>in transit</Text></Text>
                            <Text style={styles.created}>CREATED AT: <Text style={styles.oncreated}>25th Dec, 2021</Text></Text>
                        </View>
                        <Pressable style={styles.view}>
                            <Text>VIEW ORDER</Text>
                        </Pressable>    
                    </View>
                    <View style={styles.order}>
                        <View style={styles.description}>
                            <Text style={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, reiciendis!</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.transit}>ORDER STATUS: <Text style={styles.onorder}>in transit</Text></Text>
                            <Text style={styles.created}>CREATED AT: <Text style={styles.oncreated}>25th Dec, 2021</Text></Text>
                        </View>
                        <Pressable style={styles.view}>
                            <Text>VIEW ORDER</Text>
                        </Pressable>    
                    </View>
                   
                </View>
            </View>
        </ScrollView>
    )
}

export default PendingOrders
