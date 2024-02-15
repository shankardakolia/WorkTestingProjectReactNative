import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import StateSearch from './src/components/StateSearch';

const App = () => {
  const jsonData = [
    {id: 'Andhra Pradesh', capital: 'Amaravati'},
    {id: 'Arunachal Pradesh', capital: 'Itanagar'},
    {id: 'Assam', capital: 'Dispur'},
    {id: 'Bihar', capital: 'Patna'},
    {id: 'Chhattisgarh', capital: 'Raipur'},
    {id: 'Goa', capital: 'Panaji'},
    {id: 'Gujarat', capital: 'Gandhinagar'},
    {id: 'Haryana', capital: 'Chandigarh'},
    {id: 'Himachal Pradesh', capital: 'Shimla'},
    {id: 'Jharkhand', capital: 'Ranchi'},
    {id: 'Karnataka', capital: 'Bengaluru'},
    {id: 'Kerala', capital: 'Thiruvananthapuram'},
    {id: 'Madhya Pradesh', capital: 'Bhopal'},
    {id: 'Maharashtra', capital: 'Mumbai'},
    {id: 'Manipur', capital: 'Imphal'},
    {id: 'Meghalaya', capital: 'Shillong'},
    {id: 'Mizoram', capital: 'Aizawl'},
    {id: 'Nagaland', capital: 'Kohima'},
    {id: 'Odisha', capital: 'Bhubaneswar'},
    {id: 'Punjab', capital: 'Chandigarh'},
    {id: 'Rajasthan', capital: 'Jaipur'},
    {id: 'Sikkim', capital: 'Gangtok'},
    {id: 'Tamil Nadu', capital: 'Chennai'},
    {id: 'Telangana', capital: 'Hyderabad'},
    {id: 'Tripura', capital: 'Agartala'},
    {id: 'Uttar Pradesh', capital: 'Lucknow'},
    {id: 'Uttarakhand', capital: 'Dehradun'},
    {id: 'West Bengal', capital: 'Kolkata'},
  ];
  const [selectedState, setSelectedState] = useState(null);
  console.log(selectedState);
  return (
    <SafeAreaView style={styles.container}>
      <StateSearch data={jsonData} setSelectedState={setSelectedState} />
      {selectedState && (
        <Text style={{marginTop: 20}}>Selected State: {selectedState.id}</Text>
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
