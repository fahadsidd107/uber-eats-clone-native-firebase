import React from "react";
import { View, Image,Text} from "react-native";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
      <RestaurantInfo />
    </View>
  );
}

const RestaurantImage = () => (
  <><Image
    source={{
      uri: "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
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

const RestaurantInfo = () => (
  <View style={{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    }}>
  <View>
<Text style={{color:'black'}}>Farmhouse Desi Cuisine</Text>
<Text style={{color:'black'}}>30-34 min</Text>
  </View>
<Text style={{color:'black'}}>4.5</Text>
  </View>
)



