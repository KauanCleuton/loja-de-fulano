import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import { dataCategories } from "../../../utils/data"
import BackgroundImageExample from "../../components/ImageBackground"


const ListCategories = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
            data={dataCategories}
            renderItem={({item}) => (<BackgroundImageExample item={item} />)}
            keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        paddingHorizontal: 12
    },
})

export default ListCategories