import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import { Button } from "react-native";
import HeaderButton from "../components/HeaderButton";


function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler(){
     console.log('Pressed!');
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight : () =>{
                return <HeaderButton onPress = {headerButtonPressHandler}> Tap Me </HeaderButton>
            }
        })
    },[navigation, headerButtonPressHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <View>
                <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
                <Text style={styles.title} >{selectedMeal.title}</Text>
                <MealsDetails
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                    textStyle={styles.detailText}
                />
                <View style={styles.listOuterContainer} >
                    <View style={styles.listContainer} >
                        <Subtitle>Ingredients</Subtitle>
                        <List data={selectedMeal.ingredients} />
                        <Subtitle>Steps</Subtitle>
                        <List data={selectedMeal.steps} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 12
    },
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
        color: 'white',
        marginHorizontal: 6
    },
    listContainer: {
        maxWidth: '80%',

    },
    listOuterContainer: {
        alignItems: 'center'
    }

});







