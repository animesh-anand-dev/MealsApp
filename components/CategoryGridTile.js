import React from 'react'
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
//import { useNavigation } from '@react-navigation/native'

const CategoryGridTile = ({title, image, onPress}) => {
    //const navigation = useNavigation();

  return (
    <View style={[styles.gridItem, ]}>
        <Pressable 
            android_ripple={{color: '#ccc'}} 
            style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null ]}
            onPress={onPress}
            >
            <View style={[styles.innerContainer, {backgroundColor: 'white'}]}>
                <Image style={styles.image} source={{uri: image}} />
                <Text style={styles.titile}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 5,
        height: 170,
        borderRadius: 10,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    titile: {
        fontWeight: '600',
        fontSize: 18
    },
    image: {
        width: 70,
        height: 70,
        marginBottom: 20
    }
});