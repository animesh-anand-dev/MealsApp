import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import { FlatList } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
        categorytitle: itemData.item.title,
      });
    }
      return (
        <CategoryGridTile 
        title={itemData.item.title} 
        image={itemData.item.image} 
        onPress={pressHandler}
      />
      )
  }

  return (
    <FlatList 
        data={CATEGORIES} 
        keyExtractor={ (item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
    />
  )
}

export default CategoriesScreen