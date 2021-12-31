import React, { useState } from "react";
import { View, Text,TouchableOpacity } from "react-native";

export default function NavbarTabs(props) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        Text="Delivery"
        BtnColor="black"
        TextColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        Text="Pick up"
        BtnColor="white"
        TextColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}
const HeaderButton = (props) => (
  <View>
    <TouchableOpacity
      onPress={() => props.setActiveTab(props.Text)}
      style={{
        backgroundColor: props.activeTab == props.Text?'black':'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 15,
      }}
    >
      <Text
        style={{
          color: props.activeTab == props.Text?'white':'black',
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {props.Text}
      </Text>
    </TouchableOpacity>
  </View>
);