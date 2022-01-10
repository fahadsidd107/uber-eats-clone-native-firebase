import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

export const foods = [
  {
    title: "Puri",
    description:
      " A Puri is a deep-fried bread made from unleavened whole-wheat flour served with potato and maize savory curry",
    price: "Rs.25",
    image:
      "https://img.freepik.com/free-photo/poori-masala-curry-aloo-sabzi-puri_466689-77501.jpg?size=338&ext=jpg",
  },
  {
    title: "Puri-Paratha",
    description:
      "Our Puri-Paratha is a type of deep-fried Puri larger and heavier made from whole-wheat flour.",
    price: "Rs.340",
    image:
      "https://photo-cdn.urdupoint.com/show_img_new/cooking/cooking_images/570x400/pic_48da3_1515576620.jpg._3",
  },
  {
    title: "Aloo Samosay",
    description:
      "Our samosa is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions",
    price: "Rs.20",
    image:
      "https://image.freepik.com/free-photo/vegetarian-traditional-street-food-india_57665-7879.jpg",
  },
  {
    title: "Spring Roll",
    description:
      "Our Spring rolls are a large variety of filled, rolled appetizers or dim sum found in Asian cuisine. The kind of wrapper, fillings, and cooking technique used.",
    price: "Rs.30",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Spring-Roll-Recipe.jpg",
  },
  {
    title: "Chicken Corn Soup",
    description:
      "Our Sweet corn soup made with tender corn kernels, spices and herbs. Serve it any time of the day, for a simple meal with cheese toast, noodles or pasta",
    price: "Rs.70",
    image:
      "https://img.freepik.com/free-photo/lentil-soup-with-mixed-ingredients-herbs-white-bowl-with-spoon_114579-3083.jpg?size=338&ext=jpg",
  },
  {
    title: "Falooda",
    description:
      "Our Falooda is a cold dessert made with noodles.It is made by mixing rose syrup, vermicelli, and sweet basil seeds with milk, often served with ice cream.",
    price: "Rs.100",
    image:
      "https://img.freepik.com/free-photo/falooda-faluda-is-popular-indian-dessert-strawberry-mango-flavoured-which-has-ice-cream-noodles-sweet-basil-seeds-nuts-selective-focus_466689-36670.jpg?size=338&ext=jpg",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
