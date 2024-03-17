import React, { useContext, useLayoutEffect } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

const MealDetailsSceen = ({route, navigation}) => {

    const favoriteMealCtx = useContext(FavoritesContext);

    const mealId = route.params.mealId;

    const selectedMeals = MEALS.find((meal) => meal.id == mealId);

    const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);

    function changeFavoriteStatusHandler() {
        console.log("Pressed!");
        if(mealIsFavorite) {
            favoriteMealCtx.removeFavorite(mealId)
        } else {
            favoriteMealCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => {
                return ( 
                    <IconButton 
                        icon={mealIsFavorite ? 'star' : 'star-outline' } 
                        color='white' 
                        onPress={changeFavoriteStatusHandler}
                    />
                )
            }
        })
    }, [navigation,changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri: selectedMeals.imageUrl}}/>
        <Text style={styles.title}>{selectedMeals.title}</Text>
        <MealDetails
            duration={selectedMeals.duration}
            complexity={selectedMeals.complexity}
            affordability={selectedMeals.affordability}
            textStyle={styles.detailTextStyle}
        />
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeals.ingredients}/>
                <Subtitle>Steps</Subtitle>
                    <List data={selectedMeals.steps}/>
            </View>
        </View>
    </ScrollView>
  )
}

export default MealDetailsSceen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 20
    },
    image: {
        width: '100%',
        height: 250,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailTextStyle: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%',
    }
})