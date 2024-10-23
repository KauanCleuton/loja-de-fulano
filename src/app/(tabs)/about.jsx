import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {

  const handleClick = () => {
    router.replace("/index");
  };

  const handleGithubPress = () => {
    Linking.openURL('https://github.com/KauanCleuton');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://github.com/KauanCleuton.png' }}
        style={styles.image} 
      />

      <Text style={styles.title}>Kauan Cleuton da Silva</Text>
      <Text style={styles.description}>Aplicação desenvolvida com:</Text>
      
      <View style={styles.techContainer}>
        <FontAwesome name="react" size={32} color="skyblue" />
        <Text style={styles.techText}>React Native</Text>
      </View>
      <View style={styles.techContainer}>
        <FontAwesome name="mobile" size={32} color="black" />
        <Text style={styles.techText}>Expo</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleGithubPress}>
        <Text style={styles.buttonText}>Visite meu GitHub</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBack} onPress={handleClick}>
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    height: '100%'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  techContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  techText: {
    fontSize: 18,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#29f052',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 20,
  },
  buttonBack: {
    backgroundColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
