import { View, Text, Pressable, StyleSheet, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealsDetails from "./MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability,  }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealsDetail', {
            mealId: id
        });
    }


    return (
        <View style={styles.MealItem}>
            <Pressable
                android_ripple={{ color: '#cccc' }}
                style={({ pressed }) =>
                    pressed ? styles.buttonPressed : null}
                onPress = {selectMealItemHandler}


            >
                <View style={styles.innerContainer} >
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealsDetails duration={duration} affordability={affordability} complexity={complexity} />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },

    MealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        backgroundColor: 'white',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,

    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    buttonPressed: {
        opacity: 0.6,
    },

});
