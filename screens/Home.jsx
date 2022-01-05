import React,{useState,useEffect} from 'react'
import {  Text, View,SafeAreaView,ScrollView } from 'react-native';
import Categories from '../components/Home/Categories';
import NavbarTabs from '../components/Home/NavbarTabs';
import RestaurantItem, { localRestaurants } from '../components/Home/RestaurantItem';
import SearchBar from '../components/Home/SearchBar';
import cors from "cors"
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/Home/BottomTabs';
//const YELP_API_KEY = "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export default function Home() {
const [restaurantData, setRestaurantData] = useState(localRestaurants)
const [city, setCity] = useState("New York");
const [activeTab,setActiveTab]= useState('Delivery')  

//
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    mode: "no-cors"
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
  }, [city,activeTab]);
//

    return (
        <SafeAreaView style={{backgroundColor:'#eee', flex:1}}>
        <View style={{backgroundColor:"white", padding:15}}>
        <NavbarTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity}/>
        </View>
        <ScrollView showsVerticalsScrollIndicator={false} style={{flex:1}}>
        <Categories/>
        <RestaurantItem restaurantData={restaurantData} activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Divider width={1}/>
        </ScrollView>
        <BottomTabs/>
        </SafeAreaView>
          
        
    )
}
