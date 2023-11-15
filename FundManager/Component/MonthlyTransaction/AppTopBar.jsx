
import * as React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Appbar,
  Menu,
  IconButton,
  Portal,
  Modal,
  Text,
  Card,
  Avatar,
  Button,
  Divider,
} from "react-native-paper";

export default function AppTopBar({ navigation }) {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const showModal = () => {
    setMenuVisible(false);
    setModalVisible(true);
  };

  const hideModal = () => setModalVisible(false);

  const openMenu = () => setMenuVisible(true);

  const closeMenu = () => setMenuVisible(false);

  // const _goBack = () => navigation.navigate("Home");

  return (
    <Appbar.Header mode="small" style={{backgroundColor: "white"}}>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="Monthly Transaction" />
      <Menu
        visible={menuVisible}
        anchorPosition="bottom"
        onDismiss={closeMenu}
        anchor={
          <IconButton
            icon="dots-vertical"
            // iconColor={MD3Colors.error50}
            size={20}
            onPress={openMenu}
          />
        }
      >
        <Menu.Item
          leadingIcon="cash-check"
          onPress={showModal}
          title="Verify Transaction"
        />
        <Menu.Item leadingIcon="help-circle" onPress={() => {}} title="Help" />
        <Menu.Item
          leadingIcon="message-reply-text"
          onPress={() => {}}
          title="Feedback"
        />
      </Menu>
      <Portal>
        <Modal
          visible={modalVisible}
          contentContainerStyle={styles.modalContainer}
        >
          <IconButton
            icon="arrow-left"
            size={28}
            style={styles.closeButtonIcon}
            onPress={hideModal}
          />

          <Card style={{ height: "12%", marginBottom: "3%" }}>
            <Card.Title
              title="Transaction Verified"
              titleVariant="labelLarge"
              subtitle="Transaction verified successfully."
              left={(props) => <Avatar.Icon {...props} icon="check-decagram" />}
            />
          </Card>
          <Text variant="labelMedium">Current Transaction</Text>
          <Card
            mode="outlined"
            style={{ height: "35%", marginBottom: "3%", marginTop: "2%" }}
          >
            <Card.Content style={styles.cardContent}>
              <Text variant="bodyMedium">Rest amount of previous month</Text>
              <Text variant="bodyMedium">5000</Text>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text variant="bodyMedium">Total Installments</Text>
              <Text variant="bodyMedium">100000</Text>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text variant="bodyMedium">Total Intrests</Text>
              <Text variant="bodyMedium">15000</Text>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text variant="bodyMedium">Total Loan Retuned</Text>
              <Text variant="bodyMedium">5000</Text>
            </Card.Content>
            <Divider />
            <Card.Content style={styles.cardContent}>
              <Text variant="bodyMedium">Total</Text>
              <Text variant="bodyMedium">5000</Text>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text variant="bodyMedium">Total Loan Taken</Text>
              <Text variant="bodyMedium">( - ) 50000</Text>
            </Card.Content>
            <Divider />
            <Card.Content style={styles.cardContent}>
              <Text
                variant="bodyLarge"
                style={{ color: "rgb(0, 103, 131)", fontWeight: "bold" }}
              >
                Rest Of Amount
              </Text>
              <Text
                variant="bodyLarge"
                style={{ color: "rgb(0, 103, 131)", fontWeight: "bold" }}
              >
                5000
              </Text>
            </Card.Content>
          </Card>

          <Text variant="labelMedium">Total Transaction</Text>
          <Card mode="outlined" style={{ height: "25%", marginTop: "2%" }}>
            <Card.Content style={styles.cardContent}>
              <Text variant="bodyMedium">Total Installments</Text>
              <Text variant="bodyMedium">1000000</Text>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text variant="bodyMedium">Total Intrests</Text>
              <Text variant="bodyMedium">100000</Text>
            </Card.Content>
            <Divider />
            <Card.Content style={styles.cardContent}>
              <Text variant="bodyMedium">Total</Text>
              <Text variant="bodyMedium">15000</Text>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text variant="bodyMedium">Total Loan amount</Text>
              <Text variant="bodyMedium">( - ) 5000</Text>
            </Card.Content>
            <Divider />
            <Card.Content style={styles.cardContent}>
              <Text
                variant="bodyLarge"
                style={{ color: "rgb(0, 103, 131)", fontWeight: "bold" }}
              >
                Rest Of Amount
              </Text>
              <Text
                variant="bodyLarge"
                style={{ color: "rgb(0, 103, 131)", fontWeight: "bold" }}
              >
                5000
              </Text>
            </Card.Content>
            <Button
              icon="content-save"
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={{ marginTop: "5%" }}
            >
              Save
            </Button>
          </Card>
        </Modal>
      </Portal>
    </Appbar.Header>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#F2F2F2",
    padding: 12,
    height: "100%",
  },
  closeButtonIcon: {
    position: "absolute",
    left: 5,
    top: -5,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "3%",
  },
});