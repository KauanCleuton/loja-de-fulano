
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';

export default function App() {

  const handleClick = () => {
    router.replace("/home")
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <StatusBar style="auto" /> */}
      <Pressable onPress={handleClick} style={styles.button}>
        <Text style={styles.txt}>Comprar agora</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#29f052',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginTop: 10,
    borderRadius: 6
  },
  txt: {
    color: 'white',
  }
});
