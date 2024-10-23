
import { router } from 'expo-router';
import { StyleSheet, Text, View, Pressable, Button, Image, SafeAreaView, StatusBar } from 'react-native';

export default function App() {

  const handleClick = () => {
    router.replace("/home")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1024px-Palmeiras_logo.svg.png',

      }} 
      resizeMode='cover'
      />
      <Text style={styles.text}>Bem-vindo a loja do Palmeiras</Text>
      <Pressable onPress={handleClick} style={styles.button}>
        <Text style={styles.txt}>Comprar agora</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    gap: 10,
    marginTop: StatusBar.currentHeight || 0
  },
  button: {
    backgroundColor: '#29f052',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginTop: 10,
    borderRadius: 6
  },
  image: {
    width: 240,
    height: 240,

  },
  text: {
    fontSize: 25,
    textAlign: 'center'
  },
  txt: {
    color: 'white',
  }
});
