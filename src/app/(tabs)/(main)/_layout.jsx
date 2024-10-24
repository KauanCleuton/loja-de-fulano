

import { Stack } from "expo-router";


export default function RootLayout() {
    return (
        <Stack screenOptions={{
            headerStyle:{
                backgroundColor: '#09347f'
            },
            headerTintColor: "#FFF",
            headerShown: true
        }}>
            <Stack.Screen name="home" options={{
                title: 'Home',
                headerTitleAlign: 'center',
                
            }} />
            <Stack.Screen name="[id]" />
        </Stack>
    )   
}