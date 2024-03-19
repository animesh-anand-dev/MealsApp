import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const MealDetails = ({duration, complexity, affordability, style, textStyle, isVegetarian}) => {
  return (
    <View style={[styles.details, style]}>
        <Text style={[styles.detailItem, textStyle]}><FontAwesome5 name='clock' color='#333333' size={15}/> {duration} m</Text>
        <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()} </Text>
        <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        <Image 
        source={{uri: isVegetarian ?  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/240px-Indian-vegetarian-mark.svg.png' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/240px-Non_veg_symbol.svg.png'}}
        style={isVegetarian ? styles.vegImages : styles.nonVegImages}
        />
    </View>
  )
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        flexDirection: 'row'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    vegImages: {
      marginHorizontal: 10, 
      width: 15,
      height: 15
    },
    nonVegImages: {
      marginHorizontal: 8, 
      width: 19,
      height: 19
    }
})