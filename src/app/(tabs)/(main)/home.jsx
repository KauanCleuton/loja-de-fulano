import { FlatList, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { dataProducts } from "../../../utils/data";
import ProductCard from "../../../components/CardProductHome";

export default function App() {
    return (
        <View style={styles.wrapper}>
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={dataProducts}
                    keyExtractor={item => item.id.toString()} 
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
        backgroundColor: '#fff',
    },
    container: {
        width: '100%',
        height: '100%',
        marginTop: StatusBar.currentHeight || 0, 
        flex: 1,
    },
    content: {
        padding: 10
    }
});
