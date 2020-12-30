import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const CourseListScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>
                    CourseListScreen
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

CourseListScreen.navigationOptions = () => {
    return {
      headerShown: false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
})

export default CourseListScreen