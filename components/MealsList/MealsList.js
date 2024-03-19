import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

const MealsList = ({items}) => {
    function renderedMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
            isVegetarian: item.isVegetarian
        };
        return (
            <MealItem {...mealItemProps}/>
        )
   }

  return (
    <View style={styles.container}> 
        <FlatList 
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderedMealItem}
        />
    </View>
  )
}

export default MealsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:2
    }
})