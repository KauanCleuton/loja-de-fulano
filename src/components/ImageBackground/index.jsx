import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Pressable } from 'react-native';

// Obter a largura da tela
const { width: windowWidth } = Dimensions.get('window');

const BackgroundCard = ({ item }) => {

    const handlePushDinamic = (type) => {
        router.push(`/${type}`);
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={() => handlePushDinamic(item.type)}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.content}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        marginBottom: 19,
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: 190, 
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.9, 
    },
    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default BackgroundCard;
