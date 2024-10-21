
import { router } from 'expo-router';
import { StyleSheet, Text, View, Pressable, Button, StatusBar } from 'react-native';

export default function App() {

  const handleClick = () => {
    router.replace("/index")
  }
  return (
    <View style={styles.container}>
      <Text>Bem-vindo as categorias da loja do fulano! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c9c9',
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
