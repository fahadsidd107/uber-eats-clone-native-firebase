import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const ViewCart = () => {
  const items= useSelector((state) => state.cartReducer.selectedItems.items)
  const total =items.map((item=>Number(item.price.repace('Rs.','')))).reduce((prev,curr)=> prev + curr , 0)
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent:'center',
        position: "absolute",
        bottom:-92,
        zIndex:999,
        marginHorizontal:40,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "black",
            alignItems: "center",
            padding: 13,
            borderRadius: 30,
            width: 300,
            position: "relative",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewCart;
