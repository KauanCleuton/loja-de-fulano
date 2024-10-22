import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'


export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#09347f",
            headerShown: false
        }}>
            <Tabs.Screen name="home" options={{
                title: 'Home',
                tabBarIcon: ({color}) => <FontAwesome name="home" size={22} color={color} />
            }} />
             <Tabs.Screen name="(categorias)" options={{
                title: 'Categorias',
                tabBarIcon: ({color}) => <FontAwesome name="list" size={22} color={color} />
            }} />
             <Tabs.Screen name="about" options={{
                title: 'Sobre mim',
                tabBarIcon: ({color}) => <FontAwesome name="info" size={22} color={color} />
            }} />
        </Tabs>
    )
}
