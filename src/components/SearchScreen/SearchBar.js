import React from 'react';
import { View, TextInput } from 'react-native';

const SearchBar = ({ query, setQuery }) => {
    
    return (
      <View
        style={{
          backgroundColor: '#333333',
          padding: 10,
          borderRadius: 20,
          width: '80%'
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => setQuery(queryText)}
          placeholder="Author, Course Number, Book Name, etc..."
          placeholderTextColor='grey'
          style={{ backgroundColor: '#333333', color: 'white'}}
        />
      </View>
    );
};

export default SearchBar;
