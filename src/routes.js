import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/home'
import Item from './pages/item'

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Item" component={Item} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}