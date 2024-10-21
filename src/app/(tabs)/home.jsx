
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button, SafeAreaView } from 'react-native';

export default function App() {

  const handleClick = () => {
    router.replace("index")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Bem-vindo a home da loja do fulano! </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: '100%',
    backgroundColor: '#c9c9c9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0
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
