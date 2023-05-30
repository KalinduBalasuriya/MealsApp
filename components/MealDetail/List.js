import { View, Text , StyleSheet} from "react-native";
function List({ data }) {
    return data.map((datapoint) => (
        <View  key={datapoint} style={styles.listItem}>
            <Text style={styles.itemText} >{datapoint}</Text>
        </View>
    ))

}
export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius :6,
        paddingHorizontal:8,
        paddingVertical: 4,
        marginVertical : 4,
        marginHorizontal : 12,
        backgroundColor: '#bb9b95ff'
    },
    itemText : {
        color : '#2b0f0b',
        textAlign:'center'
    }
});