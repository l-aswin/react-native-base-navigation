import React from 'react'
import { View, StyleSheet,ScrollView } from 'react-native'
import { Text, Button } from 'react-native-elements'

import Spacer from '../components/Spacer'
import CarouselCards from '../components/CarouselCards'


const CourseListScreen = ({ navigation }) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Spacer>
                <Text h3>
                    CourseListScreen
                </Text>
                <CarouselCards />
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
        </ScrollView>
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