import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1E1E1',
        padding: -5,
        borderColor: '#E1E1E1',
        borderRadius: 10,
        margin: 5,
    },
    inner_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: -20,
        padding: 5,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
    },
    image: {
        margin: 10,
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain',
        borderRadius: 6,
    },
    price: {
        fontSize: 17,
        color: 'gray',
        fontWeight: '600',
        padding: 10,
    }
})