import { Link, router } from 'expo-router';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Pressable } from 'react-native';

// Obter a largura da tela
const { width: windowWidth } = Dimensions.get('window');

const BackgroundImageExample = ({ item }) => {

    const handlePushDinamic = (id) => {
        router.push(`/${id}`)
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => handlePushDinamic(item.id)}>
                < ImageBackground

                    source={{ uri: item.image }}
                    style={styles.background}
                    resizeMode="cover"
                >
                    <View style={styles.content}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                </ImageBackground>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        // paddingHorizontal: 9

    },
    background: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        marginBottom: 19,
        // paddingLeft: 7,
        // paddingRight: 7
    },
    content: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default BackgroundImageExample;
