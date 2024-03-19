import React from 'react'
import { Text,View, StyleSheet } from 'react-native'

const List = ({data}) => {
  return data.map( (dataPoint) => (
      <View style={styles.listItems} key={dataPoint}>
        <Text style={styles.itemText}>{dataPoint}</Text> 
      </View>
   ))
}

export default List;

const styles = StyleSheet.create({
  listItems: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#E6E6FA'
  },
  itemText: {
    color: 'black',
    textAlign: 'center'
  }
})