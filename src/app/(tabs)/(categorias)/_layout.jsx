import { Stack } from "expo-router"

const RootLayout = () => {
    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="lista" />
            <Stack.Screen name="[id]" options={{
                headerShown: true
            }} />
        </Stack>
    )
}

export default RootLayout