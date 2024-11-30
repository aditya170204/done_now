import {View, Text} from 'react-native';
import React from 'react';
import Header from './component/Header';
import Product from './component/Product';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>let's add to it</Text>
      <Header />
      <Product />
    </View>
  );
};

export default App;
