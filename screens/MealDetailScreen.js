import { Text, View, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealDetails";


function MealDetailScreen({ route }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    return <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title} >{selectedMeal.title}</Text>
        <MealsDetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
        />
        <View style={styles.subtitleContainer} >
            <Text style={styles.subtitle} >Ingrediants</Text>
        </View>

        {selectedMeal.ingredients.map((ingredient) => (
            <Text key={ingredient}>{ingredient}</Text>
        ))}
        <Text style={styles.subtitle} >Steps</Text>
        {selectedMeal.steps.map((step) => (
            <Text key={step}>{step}</Text>
        ))}
    </View>
}
export default MealDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',

        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        margin: 4,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    }
});







