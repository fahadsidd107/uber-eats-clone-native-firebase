import React from 'react'
import {  Text, View,SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-web';
import Categories from '../components/Categories';
import NavbarTabs from '../components/NavbarTabs';
import RestaurantItem from '../components/RestaurantItem';
import SearchBar from '../components/SearchBar';
export default function Home() {
    return (
        <SafeAreaView style={{backgroundColor:'#eee', flex:1}}>
        <View style={{backgroundColor:"white", padding:15}}>
        <NavbarTabs/>
        <SearchBar/>
        </View>
        <ScrollView showsVerticalsScrollIndicator={false}>
        <Categories/>
        <RestaurantItem/>
        
        </ScrollView>
        
        </SafeAreaView>
          
        
    )
}
