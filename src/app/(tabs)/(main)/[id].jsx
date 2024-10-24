import React, { useState, useEffect } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { SafeAreaView, StatusBar, StyleSheet, View, Text, Image, Pressable } from "react-native";
import ProductService from "../../../service/product.service";

const ProductSv = new ProductService();

export default function App() {
    const [data, setData] = useState(null); 
    const { id } = useLocalSearchParams();

    useEffect(() => {
        const dataItem = ProductSv.filterProductsById(id); 
        setData(dataItem);
        if (!dataItem) {
            alert("Produto não encontrado.");
        }
    }, [id]);

    return (
        <View style={styles.wrapper}>
            <SafeAreaView style={styles.container}>
                <Stack.Screen options={{
                    title: data ? data.name : id
                    ,
                    headerTitleAlign: 'center'
                }} />
                <View style={styles.content}>
                    {data ? (
                        <View style={styles.card}>
                            <Image 
                                source={{ uri: data.image }} 
                                style={styles.image} 
                            />
                            <View style={styles.infoRow}>
                                <Text style={styles.name}>{data.name}</Text>
                                <Text style={styles.category}>{data.type}</Text>
                            </View>
                            <Text style={styles.price}>R$ {data.price}</Text>
                            <Pressable 
                                style={styles.pressableButton}
                                onPress={() => alert(`Comprou ${data.name}`)}
                            >
                                <Text style={styles.pressableText}>Comprar</Text>
                            </Pressable>
                        </View>
                    ) : (
                        <Text>Carregando produto...</Text>
                    )}
                </View>
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
        flex: 1,
        width: '100%',
    },
    card: {
        width: '100%',
        borderRadius: 10,
        padding: 15,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    category: {
        fontSize: 20,
        color: '#777',
        fontWeight: 'bold',
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    pressableButton: {
        backgroundColor: '#09347f',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 12
    },
    pressableText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
