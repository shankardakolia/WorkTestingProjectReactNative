import React, {useState} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import Loader from './src/components/Loader';
import BestSellerBadge from './BestSellerBadge';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SafeAreaView>
      <Loader isVisible={isLoading} />
      <BestSellerBadge text="Best Seller" backgroundColor="#FF6347" textColor={'white'}/>
    </SafeAreaView>
  );
};

export default App;
