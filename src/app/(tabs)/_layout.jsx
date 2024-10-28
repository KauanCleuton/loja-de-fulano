import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { StyleSheet, View } from "react-native";


export default function TabsLayout() {
    return (
        <View style={styles.main}>
            <Tabs 
            sceneContainerStyle={{
                backgroundColor: "#fff"
            }}
            
            screenOptions={{
                tabBarActiveTintColor: "#fff",
                tabBarShowLabel: false, 
                headerShown: false,
                headerTitleAlign: 'center',
                tabBarStyle: {
                    width: '100%',
                    backgroundColor: "#09347f",
                    height: 50,
                    borderTopStartRadius: 30,
                    borderTopEndRadius: 30,
                },

            }}>
                <Tabs.Screen name="(main)" options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={22} color={color} />
                }} />
                <Tabs.Screen name="(categorias)" options={{
                    title: 'Categorias',
                    tabBarIcon: ({ color }) => <FontAwesome name="list" size={22} color={color} />
                }} />
                <Tabs.Screen name="about" options={{
                    title: 'Sobre mim',
                    tabBarIcon: ({ color }) => <FontAwesome name="info" size={22} color={color} />
                }} />
            </Tabs>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        width: '100%',
        flex: 1,
        height: '100%',
        backgroundColor: '#fff'
    }
})