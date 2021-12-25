import React from "react";
import { View, Image,Text} from "react-native";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export const localRestaurants = [
  {
    name: "Muhammadi Kabab House",
    image_url:
      "https://i.pinimg.com/564x/b0/ee/42/b0ee42499cf73852cfc8743c29faa724.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4,
  },
  {
    name: "Sidra Fast Food",
    image_url:
      "https://i.pinimg.com/564x/b8/80/94/b88094e5dfa55fb8ae626b99158ca20c.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "Huzaifa Burger Point",
    image_url:
      "https://i.pinimg.com/564x/ca/3c/e6/ca3ce6e26ed057b8dfb064673db85199.jpg",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "Muhammadi Sweets",
    image_url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapercave.com%2Findian-sweets-wallpapers&psig=AOvVaw1G8lqfnB0qfsl9PJ7eptGV&ust=1640528152823000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiVmuOR__QCFQAAAAAdAAAAABAn",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "MashAllah Katakat Fish",
    image_url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.epicurious.com%2Frecipes-menus%2F14-simple-easy-recipes-to-cook-fish-seafood-gallery&psig=AOvVaw1n0nwLZ-XwsSYfIJLD8HVR&ust=1640528455295000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjI5_OS__QCFQAAAAAdAAAAABAJ",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "Huzaifa Burger Point",
    image_url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.masala.tv%2Fgol-gappay-ki-chaat-mehboobs-kitchen-chef-mehboob-khan%2F%3Fref%3Dtheredish.com%252Fweb&psig=AOvVaw2exFB2-1M9KSryAFh3M2J2&ust=1640528502231000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDz14uT__QCFQAAAAAdAAAAABAN",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];


export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom:30,}} >
    {localRestaurants.map((restaurant,index)=>(
      <View key={index}
      style={{
      marginTop:10,
      marginHorizontal:5,
      padding:15,
      backgroundColor:'white',
      borderRadius:22,
      }}>
      <RestaurantImage image={localRestaurants[2].image_url}/>
      <RestaurantInfo name={localRestaurants[0].name} rating={localRestaurants[0].rating}/>
    </View>
    ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <><Image
    source={{
      uri: props.image,
    }}
    style={{ width: "100%", height: 180 }} />
    <TouchableOpacity style={{
      position:'absolute',
      right:20, 
      top:20}}>
      <MaterialCommunityIcons name='heart-outline' size={25} color='#fff'/>
    </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
  <View style={{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    }}>
  <View>
<Text style={{
  fontSize:15,
  fontWeight:'bold'
  }}>{props.name}</Text>
<Text style={{
  fontSize:14,
  color:'grey'}}>30-34 min</Text>
  </View>

  <View style={{
  backgroundColor:'#eee',
  height:30,
  width:30,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:16,
}}>
<Text>{props.rating}</Text>
  </View>
  </View>
)



