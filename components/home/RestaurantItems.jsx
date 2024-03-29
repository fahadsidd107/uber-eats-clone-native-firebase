import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Muhammadi Kabab House",
    image_url:
      "https://i.pinimg.com/564x/b0/ee/42/b0ee42499cf73852cfc8743c29faa724.jpg",
    categories: [{title:'Barbeque'},{title:'Bar'}],
    price: "PKR",
    reviews: 1244,
    rating: 4,
  },
  {
    name: "Iqbal Halwa Puri and Snacks",
    image_url:
      "https://i.pinimg.com/564x/b8/80/94/b88094e5dfa55fb8ae626b99158ca20c.jpg",
    categories: [{title:'Desi'},{title:'Bar'}],
    price: "PKR",
    reviews: 1244,
    rating: 3.7,
    type:'Delivery'
  },
  {
    name: "Sidra Fast Food",
    image_url:
      "https://i.pinimg.com/564x/ca/3c/e6/ca3ce6e26ed057b8dfb064673db85199.jpg",
    categories: [{title:'Fast Food'},{title:'Restaurant'}],
    price: "PKR",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "Muhammadi Sweets",
    image_url:
      "https://i.pinimg.com/564x/9b/a2/37/9ba2373f9b81b8607bcbc834d8acc582.jpg",
    categories: [{title:'Fusion'},{title:'Bakery'}],
    price: "PKR",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "MashAllah Katakat Fish",
    image_url:
      "https://i.pinimg.com/564x/c5/e7/50/c5e750072624bcf4d90d57ff6fb27b5a.jpg",
    categories: [{title:'Desi'},{title:'Howker'}],
    price: "PKR",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "Huzaifa Burger Point",
    image_url:
      "https://i.pinimg.com/564x/99/0b/95/990b95dca1f57590ce2556a771703b6d.jpg",
    categories: [{title:'Fusion'},{title:'Howker'}],
    price: "PKR",
    reviews: 700,
    rating: 4.9,
  },
];
export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.reviews,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
