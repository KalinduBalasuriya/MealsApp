import { View, Text, StyleSheet } from "react-native";

function Subtitle({children}) {
    return (
        <View style={styles.subtitleContainer} >
            <Text style={styles.subtitle} >{children}</Text>
        </View>

    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#bb9b95ff',
        fontSize: 18,
        fontWeight: 'bold',

        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        margin: 4,
        marginVertical:4,
        marginHorizontal:12,
        borderBottomColor: '#bb9b95ff',
        borderBottomWidth: 2,
    }
})