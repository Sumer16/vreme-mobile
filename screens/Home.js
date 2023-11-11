import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme';
import { MagnifyingGlassIcon, XMarkIcon } from 'react-native-heroicons/outline';
import { CalendarDaysIcon, MapPinIcon } from 'react-native-heroicons/solid';

export default function Home() {
  const [ showSearch, setShowSearch ] = useState(false);
  const [ locations, setLocations ] = useState([11, 2, 3, 5]);

  const handleLocation = () => {
    console.log('Location!');
  }

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image 
        blurRadius={40} 
        source={require('../assets/images/bg.png')} 
        className="absolute h-full w-full" 
      />
      <SafeAreaView className="flex flex-1">
        <View 
          style={{ height: '7%' }} 
          className="mx-4 relative z-50"
        >
          <View 
            className="flex-row justify-end items-center rounded-full" 
            style={{ backgroundColor: showSearch ? theme.bgWhite(0.2): 'transparent' }}
          >
            {
              showSearch ? 
              (
                <TextInput 
                  placeholder="Search City" 
                  placeholderTextColor={'lightgray'} 
                  className="pl-6 h-10 pb-1 flex-1 text-base text-white" 
                />
              ) : null
            }
            <TouchableOpacity
              onPress={() => setShowSearch(!showSearch)}
              style={{ backgroundColor: theme.bgWhite(0.3)}}
              className="rounded-full p-3 m-1"
            >
              <Text>
                <MagnifyingGlassIcon size={25} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
          {
            locations.length > 0 && showSearch ? 
            (
              <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                {
                  locations.map((location, index) => {
                    let showBorder = index+1 != locations.length;
                    let borderClass = showBorder ? "border-b-2 border-b-gray-400" : "";
                    return (
                      <TouchableOpacity 
                        onPress={() => handleLocation(location)}
                        key={index} 
                        className={"flex flex-row p-3 border-0 px-4 mb-1 " + borderClass}
                      >
                        <MapPinIcon size={20} color="gray" />
                        <Text className="text-zinc-700 text-lg ml-2">Corvallis, Oregon</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            ) : null
          }
        </View>
      </SafeAreaView>
    </View>
  )
}