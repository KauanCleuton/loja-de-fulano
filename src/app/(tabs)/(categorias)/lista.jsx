import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import { dataCategories } from "../../../utils/data"
import  BackgroundCard from "../../../components/ImageBackground"



const ListCategories = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={dataCategories}
                renderItem={({ item }) => <BackgroundCard item={item} />}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        paddingTop: 20
    },
})

export default ListCategories