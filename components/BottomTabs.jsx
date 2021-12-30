import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function BottomTabs(){
    return (
        <View style={{flexDirection:'row',margin:10,marginHorizontal:30,justifyContent:'space-between'}}>
            <Text>BottomTabs</Text>
            <Text>BottomTabs</Text>
            <Text>BottomTabs</Text>
            <Text>BottomTabs</Text>
        </View>
    )
}

const Icons =(props)=>(
<FontAwesome5 name={props.icon} size={25} style={{marginBottom:3,alignSelf:'center'}} />
)


