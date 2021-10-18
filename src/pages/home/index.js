import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles'

export default function Home() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bookshelf</Text>
            <TextInput style={styles.search} placeholder="What kind of book you wanna read today?"></TextInput>
        </View>
    )
}