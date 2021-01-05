import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const TrainerHomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>
                    Trainer Home Screen
                </Text>
                <Text style={styles.innertext}>
                    List of trainer created courses
                </Text>
            </Spacer>
            <Spacer>
                <Button title="Go to Course Detail" onPress={() => navigation.navigate('CourseDetail')} />
            </Spacer>
            <Spacer>
                <Button title="Toggle to Login Flow" onPress={() => navigation.navigate('loginFlow')} />
            </Spacer>
        </View>
    )
}

TrainerHomeScreen.navigationOptions = () => {
    return {
      headerShown: false,
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

export default TrainerHomeScreen