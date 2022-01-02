import React from 'react'
import { View, Text } from 'react-native'
import { patchWebProps } from 'react-native-elements/dist/helpers';
import { StyleSheet } from 'react-native-web';

export const foods = [
    {
      title: "Puri",
      description: 'Puri is a deep-fried bread made from unleavened whole-wheat flour served with potato and maize savory curry',
      price: "Rs.25",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fparenting.firstcry.com%2Farticles%2Fpuri-bhaji-recipe-toddlers%2F&psig=AOvVaw1vMiG0d-uIwzwzhfd2m9y4&ust=1641221289763000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOioxvKnk_UCFQAAAAAdAAAAABAZ",
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
      margin: 20,
    },
  
    titleStyle: {
      fontSize: 19,
      fontWeight: "600",
    },
  });

const MenuItems = () => {
    return (
        <View>
            <FoodInfo foods={foods[0]}/>
        </View>
    )
}

export default MenuItems

const FoodInfo =(props)=>(
<View>
<Text>{props.foods.title}</Text>
<Text>{props.foods.description}</Text>
<Text>{props.foods.price}</Text>
</View>
)