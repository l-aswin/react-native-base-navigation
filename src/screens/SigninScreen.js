import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'


const SigninScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
         <Spacer>
                <Text h3>Sign In</Text>
            </Spacer>
            <Input label="User Name" />
            <Spacer />
            <Input label="Password" />
            <Spacer>
                <Button title="Sign In" onPress={() => navigation.navigate('Signup')}/>
            </Spacer>

            <Spacer>
                <Button  title="Toggle to Learner Flow" onPress={() => navigation.navigate('learnerMainFlow')}/>
            </Spacer>
            
            <Spacer>
                <Button  title="Toggle to Trainer Flow" onPress={() => navigation.navigate('trainerMainFlow')}/>
            </Spacer>
        
    </View>
    )
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen