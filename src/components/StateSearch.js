import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, TouchableOpacity} from 'react-native';

const StateSearch = ({data, setSelectedState}) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = text => {
    setQuery(text);
    const filteredStates = data.filter(state =>
      state.id.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filteredStates);
  };

  const selectState = state => {
    setQuery(state.id);
    setSelectedState(state); // Update the selected state in the App component
    setFilteredData([]); // Clear suggestions after selection
  };

  const renderState = ({item}) => (
    <TouchableOpacity onPress={() => selectState(item)}>
      <Text>{item.id}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Search for a state"
        onChangeText={handleSearch}
        value={query}
      />
      <FlatList
        data={filteredData}
        renderItem={renderState}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default StateSearch;
