import {View, Text, Image, Button, ScrollView} from 'react-native';
import React from 'react';
import Header from './component/Header';
import {Product} from './component/Product';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  const Products = [
    {
      name: 'samsung mobile',
      color: 'white',
      price: 80000,
      image:
        'https://images.pexels.com/photos/15493878/pexels-photo-15493878/free-photo-of-hands-on-samsung-galaxy-s23-ultra-5g-green-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Apple mobile',
      color: 'pink',
      price: 80000,
      image:
        'https://images.pexels.com/photos/13039076/pexels-photo-13039076.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'motorola mobile',
      color: 'red',
      price: 80000,
      image:
        'https://images.pexels.com/photos/215583/pexels-photo-215583.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'poco mobile',
      color: 'yellow',
      price: 80000,
      image:
        'https://images.pexels.com/photos/16781209/pexels-photo-16781209/free-photo-of-display-of-smartphone.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>let's add to it</Text>
      <Header />
      <ScrollView>
        {Products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default App;
