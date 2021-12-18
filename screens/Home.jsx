import React from 'react'
import {  Text, View,SafeAreaView } from 'react-native';
import Categories from '../components/Categories';
import NavbarTabs from '../components/NavbarTabs';
import SearchBar from '../components/SearchBar';
export default function Home() {
    return (
        <SafeAreaView style={{backgroundColor:'#eee', flex:1}}>
        <View style={{backgroundColor:"white", padding:15}}>
        <NavbarTabs/>
        <SearchBar/>
        </View>
        <Categories/>
        </SafeAreaView>
          
        
    )
}
