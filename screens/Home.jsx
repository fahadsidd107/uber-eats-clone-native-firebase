import React,{useState,useEffect} from 'react'
import {  Text, View,SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-web';
import Categories from '../components/Categories';
import NavbarTabs from '../components/NavbarTabs';
import RestaurantItem, { localRestaurants } from '../components/RestaurantItem';
import SearchBar from '../components/SearchBar';

const YELP_API_KEY = "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export default function Home() {
const [restaurantData, setRestaurantData] = useState(localRestaurants)
const [city, setCity] = useState("San Francisco");
  

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

    return (
        <SafeAreaView style={{backgroundColor:'#eee', flex:1}}>
        <View style={{backgroundColor:"white", padding:15}}>
        <NavbarTabs/>
        <SearchBar/>
        </View>
        <ScrollView showsVerticalsScrollIndicator={false}>
        <Categories/>
        <RestaurantItem restaurantData={restaurantData}/>
        
        </ScrollView>
        
        </SafeAreaView>
          
        
    )
}
