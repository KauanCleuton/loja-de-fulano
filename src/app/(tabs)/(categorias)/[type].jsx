import { router, Stack, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native';
import ProductService from '../../../service/product.service';
import { dataProducts } from '../../../utils/data';
import ProductCard from '../../../components/CardProduct';

const ProductSv = new ProductService();

export default function App() {
  const [data, setData] = useState([]);
  const { type } = useLocalSearchParams();
  useEffect(() => {
    const dataProd = ProductSv.filterProductsByCategory(type);
    setData(dataProd);
  }, [type]);

  return (
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{
          title: type,
          headerShown: true,
        }} />

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ProductCard item={item} visible={false} />
          )}
          keyExtractor={product => product.id.toString()}
          contentContainerStyle={styles.list}
        />

      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight || 0,
  },
  list: {
    padding: 10,
  },
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});
