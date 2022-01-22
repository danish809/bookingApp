// In App.js in a new project

import * as React from 'react';
import {View, Image, ScrollView, Dimensions, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const {width} = Dimensions.get("window")
const height = width * 0.5;
const Images = [
  'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

const HomeScreen = () => {
  return (
    <View style={style.container}>
    <ScrollView 
    pagingEnable
     horizontal 
     showsHorizontalScrollIndicator={false}
     style={style.scroll}>
      {
      Images.map((image, index) => (
    <Image 
    key={index}
     source={{uri: image}}
      style={style.image}/> 
      ))
      }
      </ScrollView>
      <View style={style.pagination}>
      {
      Images.map((i,k) => (
        <Text key={k} style={style.pagingText}>⬤</Text>
      ) )
      }
      </View>
       </View>
     
  
  )
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const style = StyleSheet.create({
container: {marginTop: 10, width, height},
scroll: {width, height },
image: {width, height, resizeMode: 'cover'},
pagination: {flexDirection: 'row', position: 'absolute', bottom:0, alignSelf: 'center'},
pagingText: {color: '#888'}
}
)


