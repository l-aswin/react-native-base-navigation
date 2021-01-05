import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button,Image } from 'react-native-elements'
import {Dimensions } from "react-native";
import Spacer from '../components/Spacer'

const LearnerQuizScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>
                    Quiz Screen
                </Text>
                <Text style={styles.innertext}>
                    Scrollable List of questions
                </Text>
            </Spacer>
            <Spacer>
                <Button title="Submit"  />
            </Spacer>
        </View>
    )
}

LearnerQuizScreen.navigationOptions = () => {
    return {
      headerShown: true,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    innertext:{
        marginTop: 5,
        fontSize: 23
    },
})

export default LearnerQuizScreen