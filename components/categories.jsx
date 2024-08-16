import { View, Text, StyleSheet,FlatList } from 'react-native'
import React from 'react'
// import { FlatList } from 'react-native-gesture-handler'
import { data } from '../constants/data'
import { theme } from '../constants/theme'
import { wp } from "../helper/common";


const CategoryList = () => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatlistContainer}
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      keyExtractor={(item)=>item}
      renderItem={({item,index})=>{
        <CategoryItem
        title={item}
        />
      
      }}
    />
  )
}
const CategoryItem=({title})=>{
    return (
        <View style={{backgroundColor:'green'}}>
            <Text>{title}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    flatlistContainer:{
       paddingHorizontal:wp(4),
       gap:8
    },
    category:{
        padding:12,
        paddingHorizontal:15,
        borderWidth:1,
        borderColor:theme.colors.neutral(0.8),
        borderRadius:theme.radius.lg,
        borderCurve:'continuous'
    }
})
export default CategoryList