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
                <Text style={styles.innertext}>
                    Scrollable List of courses
                </Text>
            </Spacer>
            <Spacer>
                <Button title="Go to Course Detail" onPress={() => navigation.navigate('CourseDetail')} />
            </Spacer>
            <Spacer>
                <Button title="Take Quiz completed Course" onPress={() => navigation.navigate('Quiz')} />
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
    },
    innertext:{
        marginTop: 5,
        fontSize: 23
    },
})

export default CourseListScreen