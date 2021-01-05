import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Text h3>
                AccountScreen
            </Text>
            <Text style={styles.headertext}>Change user name</Text>
            <Text style={styles.headertext}>Change password</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    headertext:{
        fontSize:20,
    }
})

export default AccountScreen