import React from 'react'
import { View, Text, Image } from 'react-native'
import { patchWebProps } from 'react-native-elements/dist/helpers';
import { StyleSheet } from 'react-native-web';

export const foods = [
    {
      title: "Puri",
      description: 'Puri is a deep-fried bread made from unleavened whole-wheat flour served with potato and maize savory curry',
      price: "Rs.25",
      image:
        "https://img.freepik.com/free-photo/poori-masala-curry-aloo-sabzi-puri_466689-77501.jpg?size=338&ext=jpg",
    },
    {
        title: "Puri-Paratha",
        description: 'Puri-Paratha is a deep-fried Big-Puri made from whole-wheat flour served with potato and maize savory curry',
        price: "Rs.340/kg",
        image:
          "https://photo-cdn.urdupoint.com/show_img_new/cooking/cooking_images/570x400/pic_48da3_1515576620.jpg._3",
    },
    {
        title: "Aloo Samosay",
        description: 'A samosa is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions',
        price: "Rs.20",
        image:
          "https://image.freepik.com/free-photo/vegetarian-traditional-street-food-india_57665-7879.jpg",
    },
    {
        title: "Spring Roll",
        description: 'Spring rolls are a large variety of filled, rolled appetizers or dim sum found in East Asian, Southeast Asian cuisine. The kind of wrapper, fillings, and cooking technique used.',
        price: "Rs.30",
        image:
          "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Spring-Roll-Recipe.jpg",
    },
    {
        title: "Muhammadi Kabab House",
        description: '',
        price: "$$",
        image:
          "https://i.pinimg.com/564x/b0/ee/42/b0ee42499cf73852cfc8743c29faa724.jpg",
    },
    {
        title: "Muhammadi Kabab House",
        description: '',
        price: "$$",
        image:
          "https://i.pinimg.com/564x/b0/ee/42/b0ee42499cf73852cfc8743c29faa724.jpg",
    },
  ];

  const styles = StyleSheet.create({
    menuItemStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 8,
    },
  
    titleStyle: {
      fontSize: 22,
      fontWeight: "600",
    },
  });

const MenuItems = () => {
    return (
      <>
      {foods.map((food,index)=>(
        <View key={index}>
        <View style={styles.menuItemStyle}>
          <FoodInfo food={food}/>
          <FoodImage food={food}/>
      </View>

    </View>
      ))}
      
    </>
      )
    }
      

export default MenuItems

const FoodInfo =(props)=>(
<View style={{width:240,justifyContent:'space-evenly'}}>
<Text style={styles.titleStyle}>{props.food.title}</Text>
<Text style={{fontSize:12,color:'#808080'}}>{props.food.description}</Text>
<Text style={{fontWeight:'600'}}>{props.food.price}</Text>
</View>
)

const FoodImage =(props)=>(
  <View>
    <Image source={{uri : props.food.image}} style={{
      width: 100,
        height: 100,
        borderRadius: 8}}/>
  </View>
)