import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-formatter'

const BasketIcon = () => {
  const items = useSelector(selectBasketItems) 
  const navigation = useNavigation()
  const basketTotal = useSelector(selectBasketTotal)
    
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity onPress={() => navigation.navigate("Basket")} className="mx-3 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-extrabold text-lg text-center bg-[#01A296] w-8 h-8 rounded-full">{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">
            <Currency quantity={basketTotal} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon