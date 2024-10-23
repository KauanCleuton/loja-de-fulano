import { router, Stack } from 'expo-router';
import { StyleSheet, Text, View, Pressable, Button, SafeAreaView, StatusBar } from 'react-native';

export default function App() {

  const handleClick = () => {
    router.replace("index");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen/>
      <View style={styles.container}>
        <Text>Bem-vindo a home da loja do fulano! </Text>
        <Pressable onPress={handleClick} style={styles.button}>
          <Text style={styles.txt}>Ir para a página inicial</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#29f052',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginTop: 10,
    borderRadius: 6,
  },
  txt: {
    color: 'white',
  },
});
