import { Stack } from "expo-router";







export function RootLayout() {
    return (
        <Stack >
            <Stack.Screen name="index" options={{
                headerShown: true
            }} />
            <Stack.Screen name="(tabs)" options={{
                headerShown: true
            }} />
        </Stack>
    )
}
