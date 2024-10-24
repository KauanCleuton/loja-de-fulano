import { FlatList, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { dataProducts } from "../../../utils/data";
import ProductCard from "../../../components/CardProductHome";

export default function App() {
    return (
        <View style={styles.wrapper}>
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={dataProducts}
                    keyExtractor={item => item.id.toString()}  // Garantir que o ID é uma string
                    renderItem={({ item }) => <ProductCard item={item} />}
                    contentContainerStyle={styles.content}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f5f5f5',  // Você pode alterar para a cor de fundo desejada
    },
    container: {
        width: '100%',
        height: '100%',
        marginTop: StatusBar.currentHeight || 0,  // Considerar o StatusBar
        flex: 1,
    },
    content: {
        padding: 10
    }
});
