import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, Card, Button } from "react-native-paper";

const Member = () => {
  state = {
    data: [
      {
        id: 1,
        title: "Ansuman Nayak",
        text: "Fund Details: Alpha | Beta",
      },
      {
        id: 2,
        title: "Suphal Kaushik",
        text: "Fund Details: Beta",
      },
    ],
  };

  renderItem = ({ item }) => (
    <Card style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
      <Card.Actions>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  item: {
    padding: 10,
    margin: 5,
    // borderRadius: 10,
    // backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    color: "grey",
  },
});

export default Member;
