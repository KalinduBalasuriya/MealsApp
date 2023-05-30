import {View, Text, StyleSheet} from 'react-native';

function MealsDetails({duration, complexity, affordability}) {
    return (

        <View style={styles.details} >
            <Text style={styles.detailItem} >{duration}</Text>
            <Text style={styles.detailItem} >{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem} >{affordability.toUpperCase()}</Text>
        </View>
    )
}
export default MealsDetails;

const styles = StyleSheet.create({

    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
})