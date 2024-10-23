import { Stack } from "expo-router"

const RootLayout = () => {
    return (
        <Stack screenOptions={{
            headerShown: false,
    
        }}>
            <Stack.Screen name="lista" />
            <Stack.Screen name="[type]" options={{
                headerShown: false
            }} />
        </Stack>
    )
}

export default RootLayout