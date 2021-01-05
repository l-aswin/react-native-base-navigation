import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'

const CourseCreateScreen = () => {
    return (
        <View style={styles.container}>
            <Text h3>
                CourseCreateScreen
            </Text>
            <Text style={styles.headertext}>Course details</Text>
            <Text style={styles.innertext}>Module Name</Text>
            <Text style={styles.innertext}>Module Info</Text>
            <Text style={styles.innertext}>Module Duration</Text>
            <Text style={styles.headertext}>Upload Multimedia content</Text>
            <Button title="Submit Course" />


        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    innertext:{
        fontSize:17
    },
    headertext:{
        fontSize:20,
        fontWeight: "bold"
    }
})

export default CourseCreateScreen