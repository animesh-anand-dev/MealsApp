import React, { useContext, useLayoutEffect } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

const MealDetailsSceen = ({route, navigation}) => {

    // const favoriteMealCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;

    const selectedMeals = MEALS.find((meal) => meal.id == mealId);

    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        // console.log("Pressed!");
        if(mealIsFavorite) {
            // favoriteMealCtx.removeFavorite(mealId)
            dispatch(removeFavorite({id: mealId}));
        console.log("removed!");

        } else {
            // favoriteMealCtx.addFavorite(mealId);
            dispatch(addFavorite({id: mealId}));
            console.log("added!");
        }
    }

    useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => {
                return ( 
                    <IconButton 
                        icon={mealIsFavorite ? 'star' : 'star-outline' } 
                        color='#000000' 
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
            isVegetarian={selectedMeals.isVegetarian}
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
        color: '#313131'
    },
    detailTextStyle: {
        color: '#6b6b6b'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%',
    }
})