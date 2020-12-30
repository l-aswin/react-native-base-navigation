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
                <Button title="Sign Up" onPress={() => navigation.navigate('Signin')}/>
            </Spacer>

            <Spacer>
                <Button title="Toggle to Main Flow" onPress={() => navigation.navigate('mainFlow')}/>
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