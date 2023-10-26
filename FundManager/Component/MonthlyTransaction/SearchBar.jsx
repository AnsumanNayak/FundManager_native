import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchBar = ({ onSearch }) => {
  const [filterName, setFilterName] = useState("");

  const handleFilterChange = (text) => {
    setFilterName(text);
    onSearch(text); // Pass the search text to the parent component
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <Searchbar
        placeholder="Search Name"
        onChangeText={handleFilterChange}
        value={filterName}
        style={styles.searchBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "3%",
    // color: 'grey'
  },
});

export default SearchBar;
