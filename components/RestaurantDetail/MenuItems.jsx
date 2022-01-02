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