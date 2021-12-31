import React from 'react'
import { View, Text,Image } from 'react-native'

const image = 'https://i.pinimg.com/564x/b0/ee/42/b0ee42499cf73852cfc8743c29faa724.jpg'
const title = 'Iqbal Halwa Puri and Snacks'
const description = 'Desi , Comfort • $$ • 🎫 • 4 ⭐ (2913+)  '
const About = () => {
    return (
        <View>
            <RestaurantImage image={image}/>
            <RestaurantTitle title={title}/>
            <RestaurantDescription description={description}/>
        </View>
    )
}

export default About

const RestaurantImage =(props)=>(
    <Image source={{uri : props.image,}}
    style={{height:180,marginHorizontal:2,borderRadius:10,marginTop:5}}
    />
)

const RestaurantTitle =(props)=>(
    <Text 
    style={{
fontSize:29,
fontWeight:'600',
marginTop:10,
marginHorizontal:15
    }}
    >{props.title}</Text>
)

const RestaurantDescription =(props)=>(
    <Text 
    style={{
fontSize:15.5,
fontWeight:'400',
marginTop:10,
marginHorizontal:15
    }}
    >{props.description}</Text>
)