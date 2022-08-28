import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const PreparingOrdenScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery")
    }, 4000)
  })

  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Animatable.Image 
        source={require("../assets/food_delivery.gif")}
        animation="slideInUp"
        iterationCount={1}
      />

      <Animatable.Text animation="slideInUp" iterationCount={1} className="text-lg my-10 text-[#00CCBB] font-bold text-center">
        Waiting for restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={40} indeterminate={true} color="#00CCBB" />
    </SafeAreaView>
  )
}

export default PreparingOrdenScreen