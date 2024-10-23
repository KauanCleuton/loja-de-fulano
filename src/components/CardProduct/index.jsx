import { Image, StyleSheet, View, Text, Pressable } from "react-native";

const ProductCard = ({ item, visible }) => {
  return (
    <View style={styles.main}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Preço: ${item.price}</Text>
        {visible && (
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    marginTop: 10,
    flex: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#28a745",
    marginTop: 5,
  },
  type: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#29f052",
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default ProductCard;
