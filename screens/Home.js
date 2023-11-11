import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
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
                        className={"flex flex-row items-center p-4 border-0 px-4 mb-1 " + borderClass}
                      >
                        <MapPinIcon size={20} color="gray" />
                        <Text className="text-zinc-700 text-lg ml-2">Corvallis, United States</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            ) : null
          }
        </View>
        <View className="mx-4 flex justify-around flex-1 mb-2">
          {/* location */}
          <Text className="text-white text-center text-2xl font-bold">
            Corvallis,&nbsp;
            <Text className="text-lg font-semibold text-gray-300">United States</Text>
          </Text>
          {/* weather icon */}
          <View className="flex-row justify-center">
            <Image 
              source={require('../assets/images/partlycloudy.png')}
              className="w-52 h-52" 
            />
          </View>
          {/* degree celcius */}
          <View className="space-y-2">
              <Text className="text-center font-bold text-white text-6xl ml-5">
                23&#176;
              </Text>
              <Text className="text-center text-white text-xl tracking-widest">
                Partly Cloudy
              </Text>
          </View>

          {/* other stats */}
          <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
              <Image source={require('../assets/icons/wind.png')} className="w-6 h-6" />
              <Text className="text-white font-semibold text-base">23km</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image source={require('../assets/icons/drop.png')} className="w-6 h-6" />
              <Text className="text-white font-semibold text-base">21%</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image source={require('../assets/icons/sun.png')} className="w-6 h-6" />
              <Text className="text-white font-semibold text-base">
                6:06 AM
              </Text>
            </View>
            
          </View>
        </View>

        {/* forecast for next days */}
        <View className="mb-2 space-y-3">
          <View className="flex-row items-center mx-5 space-x-2">
            <CalendarDaysIcon size="22" color="white" />
            <Text className="text-white text-base">Daily forecast</Text>
          </View>
          <ScrollView   
            horizontal
            contentContainerStyle={{paddingHorizontal: 15}}
            showsHorizontalScrollIndicator={false}
          >
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" 
              style={{backgroundColor: theme.bgWhite(0.15)}}
            >
              <Image
                source={require('../assets/images/partlycloudy.png')}
                className="w-11 h-11" 
              />
              <Text className="text-white">Today</Text>
              <Text className="text-white text-xl font-semibold">
                23&#176;
              </Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" 
              style={{backgroundColor: theme.bgWhite(0.15)}}
            >
              <Image
                source={require('../assets/images/heavyrain.png')}
                className="w-11 h-11" 
              />
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl font-semibold">
                23&#176;
              </Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" 
              style={{backgroundColor: theme.bgWhite(0.15)}}
            >
              <Image
                source={require('../assets/images/moderaterain.png')}
                className="w-11 h-11" 
              />
              <Text className="text-white">Tuesday</Text>
              <Text className="text-white text-xl font-semibold">
                16&#176;
              </Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" 
              style={{backgroundColor: theme.bgWhite(0.15)}}
            >
              <Image
                source={require('../assets/images/partlycloudy.png')}
                className="w-11 h-11" 
              />
              <Text className="text-white">Wednesday</Text>
              <Text className="text-white text-xl font-semibold">
                23&#176;
              </Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" 
              style={{backgroundColor: theme.bgWhite(0.15)}}
            >
              <Image
                source={require('../assets/images/sun.png')}
                className="w-11 h-11" 
              />
              <Text className="text-white">Thursday</Text>
              <Text className="text-white text-xl font-semibold">
                23&#176;
              </Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" 
              style={{backgroundColor: theme.bgWhite(0.15)}}
            >
              <Image
                source={require('../assets/images/moderaterain.png')}
                className="w-11 h-11" 
              />
              <Text className="text-white">Friday</Text>
              <Text className="text-white text-xl font-semibold">
                23&#176;
              </Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" 
              style={{backgroundColor: theme.bgWhite(0.15)}}
            >
              <Image
                source={require('../assets/images/cloud.png')}
                className="w-11 h-11" 
              />
              <Text className="text-white">Saturday</Text>
              <Text className="text-white text-xl font-semibold">
                23&#176;
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  )
}