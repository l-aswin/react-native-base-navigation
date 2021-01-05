import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button,Image } from 'react-native-elements'
import {Dimensions } from "react-native";

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

const LearnerDashboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headertext}>DASHBOARD</Text>
            <View style={styles.rowcontainer}>
                <Image source={require('../../assets/imageplaceholder.jpg')} style={styles.image}/>
                <View style={styles.container}>
                    <Text style={styles.innertext}>Total Registered Courses</Text>
                    <Text style={styles.innertext}>Courses completed</Text>
                    <Text style={styles.innertext}>Courses in progress</Text>
                    <Text style={styles.innertext}>Courses nearing deadline</Text>
                </View>
            </View>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    rowcontainer:{
        flexDirection:'row', 
        width:DeviceWidth,
        height:DeviceWidth*0.5,
        alignItems:'center'
    },
    image:{
        width: 150,
        height: 150,
    },
    innertext:{
        marginLeft: 5,
        fontSize:17
    },
    headertext:{
        marginLeft: 5,
        fontSize:20,
        fontWeight: "bold"
    }
})

export default LearnerDashboardScreen