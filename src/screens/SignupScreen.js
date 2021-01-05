import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for CAKE</Text>
            </Spacer>
            <Input label="Email" />
            <Spacer />
            <Input label="Password" />
            <Spacer>
                <Button title="Sign Up" />
            </Spacer>

            <Spacer>
                <Button title="Toggle to Learner Flow" onPress={() => navigation.navigate('learnerMainFlow')}/>
            </Spacer>

            <Spacer>
                <Button  title="Toggle to Trainer Flow" onPress={() => navigation.navigate('trainerMainFlow')}/>
            </Spacer>
            
        </View>
    )
}

SignupScreen.navigationOptions = () => {
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

export default SignupScreen