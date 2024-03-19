import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Subtitle = ({children}) => {
  return (
    <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
      color: '#6a6ac5',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center', 
  },
  subTitleContainer: {
      padding: 6,
      marginHorizontal: 12,
      marginVertical: 4,
      borderBottomWidth: 2,
      borderBottomColor: '#6a6ac5'
  }
})