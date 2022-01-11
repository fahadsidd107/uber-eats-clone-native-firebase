import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs.jsx";
import Categories from "../components/home/Categories.jsx";
import HeaderTabs from "../components/home/HeaderTabs.jsx";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems.jsx";
import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY =
  "Xf8yYepVl_QkSk4lnlCjNS3f5Ef3ngMZ8SBI_vK9laAj443s7OT1pw48KQx5Q-agXwwGjxUuRWWg_hlBnNUxYmr3cIcK7oTjqDbhTV6z1Z9ct4qE_c48Ral0IGjcYXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Karachi");
  const [activeTab, setActiveTab] = useState("Delivery");

  // const getRestaurantsFromYelp = () => {
  //   const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

  //   const apiOptions = {
  //     headers: {
  //       Authorization: `Bearer ${YELP_API_KEY}`,
  //     },
  //   };

  //   return fetch(yelpUrl, apiOptions)
  //     .then((res) => res.json())
  //     .then((json) =>
  //       setRestaurantData(
  //         json.businesses.filter((business) =>
  //           business.transactions.includes(activeTab.toLowerCase())
  //         )
  //       )
  //     );
  // };

  // useEffect(() => {
  //   getRestaurantsFromYelp();
  // }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
