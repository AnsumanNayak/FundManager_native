import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from "react-native";
import {
  DataTable,
  Switch,
  Dialog,
  Button,
  Portal,
  Text,
  Modal,
  IconButton,
  Avatar,
  Card,
  TextInput,
  TouchableRipple,
  Menu,
} from "react-native-paper";
import * as React from "react";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
export default function Home({ navigation }) {
  return (
    <View>
      <LinearGradient
        colors={["rgb(0, 103, 131)", "#1D2671"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.pageHeader}>
          <Text
            variant="headlineMedium"
            style={{ color: "white", marginBottom: "5%" }}
          >
            Manage your fund
          </Text>
          <Text variant="bodyMedium" style={{ color: "white" }}>
            Manage monthly transaction, member, fund
          </Text>
          <Text
            variant="bodyMedium"
            style={{ color: "white", marginBottom: "10%" }}
          >
            details and many more.
          </Text>

          <View style={styles.container}>
            <View style={styles.cardContainer}>
            <TouchableRipple onPress={() => navigation.navigate('Monthly Transaction')}>
              <Card style={styles.card} mode='contained'>
                <Card.Content>
                <Avatar.Icon size={130} icon="transfer-up" />
                <Text variant="labelLarge" style={styles.cardLabel}>Manage Transaction</Text>
                </Card.Content>
              </Card>
              </TouchableRipple>
            </View>

            <View style={styles.cardContainer}>
            <TouchableRipple onPress={() => navigation.navigate('Member')}>
            <Card style={styles.card} mode='contained'>
                <Card.Content>
                <Avatar.Icon size={130} icon="account-group" />
                  {/* <Text variant="labelLarge">Manage Member</Text> */}
                  <Text variant="labelLarge" style={styles.cardLabel}>Manage Member</Text>
                </Card.Content>
              </Card>
              </TouchableRipple>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.cardContainer}>
              <Card style={styles.card} mode='contained'>
                <Card.Content>
                <Avatar.Icon size={130} icon="account-cash" />
                <Text variant="labelLarge" style={styles.cardLabel}>Manage Fund</Text>
                </Card.Content>
              </Card>
            </View>

            <View style={styles.cardContainer}>
            <Card style={styles.card} mode='contained'>
                <Card.Content>
                <Avatar.Icon size={130} icon="account-cog" />
                  {/* <Text variant="labelLarge">Manage Member</Text> */}
                  <Text variant="labelLarge" style={styles.cardLabel}>Manage Profile</Text>
                </Card.Content>
              </Card>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  pageHeader: {
    position: "absolute",
    top: "8%",
    // left: "5%",
    padding: 8,
    width: '100%',
    color: "#fff",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width:'auto'
    // padding: 8,
  },
  cardContainer: {
    flex: 1,
    margin: 3,
    width:"100%"
  },
  card: {
    // Customize card styles as needed
    width: "100%",
    height:'100%',
    opacity: 0.9
  },
  cardLabel:{
    textAlign:'center',
    marginTop:10,
    fontWeight:'bold',
    color: '#1D2671'
  }
});
