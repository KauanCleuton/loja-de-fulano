import { Stack } from "expo-router";







export default function RootLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false,
            headerStyle:{
                backgroundColor: '#09347f'
            },
            headerTintColor: "#FFF",
        }}>
            <Stack.Screen name="index"  />
            <Stack.Screen name="(tabs)" />
        </Stack>
    )
}
