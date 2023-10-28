import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Appbar, Card, FAB, Avatar, IconButton } from "react-native-paper";
import SearchBar from '../MonthlyTransaction/SearchBar';
import jsonData from './MemberData.json';
import AddMember from "./AddMember";
const Member = ({ navigation }) => {
  const [filterName, setFilterName] = useState('');
  
  const [data, setData] = useState(jsonData);


  const _goBack = () => navigation.navigate("Home");
  const handleSearch = (text) => {
    setFilterName(text); // Update the filterName state
  };
  
  const filteredData = data.filter((item) => item.name.toLowerCase().includes(filterName.toLowerCase()));
  renderItem = ({ item }) => (
    <Card style={styles.item} mode="contained">
      <Card.Title
        title={item.name}
        titleVariant="titleMedium"
        subtitle={'Fund details: ' + item.funds.map((obj) => obj.fundName).join(', ')}
        left={(props) => <Avatar.Image
          {...props}
          source={{ uri: item.picture }}
          size={60}
          style={{ margin: -13 }} />}
        right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
      />
    </Card>

  );
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Members details" />
      </Appbar.Header>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={filteredData}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.memberId}
      />
      
      <FAB
        variant="primary"
        size="medium"
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate("AddMember")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%'
  },
  item: {
    padding: 5,
    margin: 10,
    backgroundColor: 'white'
  }, 
  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 10,
    color:'blue'
  },
});

export default Member;
