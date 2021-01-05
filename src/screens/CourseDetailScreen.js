import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button,Image } from 'react-native-elements'
import {Dimensions } from "react-native";

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

const CourseDetailScreen = () => {
    return (
        <View style={styles.container}>
          <View style={styles.rowcontainer}>
            <Image source={require('../../assets/imageplaceholder.jpg')} style={styles.image}/>
            <View style={styles.container}>
                <Text style={styles.innertext}>Course Name</Text>
                <Text style={styles.innertext}>Course Type: optional/compulsory</Text>
                <Text style={styles.innertext}>Course Duration(hours)</Text>
                <Text style={styles.innertext}>Course Additional Info: popularity</Text>
                <Button title="Enroll" />
            </View>
          </View>
          <Text style={styles.headertext}>Course Section</Text>
          <Text style={styles.innertext}>Module Name</Text>
          <Text style={styles.innertext}>Module Info</Text>
          <Text style={styles.innertext}>Module Completion status</Text>

        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 7
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
        fontSize:17
    },
    headertext:{
        fontSize:20,
        fontWeight: "bold"
    }
    
})

export default CourseDetailScreen