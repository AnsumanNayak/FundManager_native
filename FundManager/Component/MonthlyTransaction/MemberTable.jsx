import React, { useState } from "react";
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
  FAB,
  Menu,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ITEMS_PER_PAGE = 10;
const DIALOG_MSG_FOR_INSTALLMENT =
  "has paid you monthly installment for this month?";
const DIALOG_MSG_FOR_INTREST = "has paid you intrest for this month?";
const dropdownOptions = [
  "Loan Amount",
  "Intrest Amount",
  "Loan Taken",
  "Loan Return",
];

const MemberTable = ({ data, filteredData, onUpdateData, onUpdateCurrentPage, pageNum }) => {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("ascending");
  const [dialogVisible, setDialogVisible] = useState(false);
  const [action, setAction] = useState("");
  const [dialogMsg, setdialogMsg] = useState("has paid you for this month?");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(pageNum);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Loan Amount");

  const getTotalPages = () => Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const getCurrentPage = () => {
    if(currentPage === pageNum){
      return currentPage;
    }else if(filteredData.length === data.length){
      return currentPage;
    }else{
      return pageNum;
    }
  }
  
  const sortData = (field) => {
    const direction = sortDirection === "ascending" ? 1 : -1;
    const sortedData = [...filteredData].sort((a, b) => {
      
      if (a[field] < b[field]) return -1 * direction;
      if (a[field] > b[field]) return 1 * direction;

      return 0;
    });
    return sortedData;
  };
  const sortedData = sortData(sortField);

  const paginatedData = sortedData.slice(
    (getCurrentPage() - 1) * ITEMS_PER_PAGE,
    getCurrentPage() * ITEMS_PER_PAGE
  );

  const isFirstPage = getCurrentPage() === 1;
  const isLastPage = getCurrentPage() === getTotalPages();

  const onSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "ascending" ? "descending" : "ascending");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const toggleSwitch = (item, action) => {
    if (action === "isPrincipalAmountPaid")
      setdialogMsg(DIALOG_MSG_FOR_INSTALLMENT);
    else if (action === "isIntrestAmountPaid")
      setdialogMsg(DIALOG_MSG_FOR_INTREST);
    setAction(action);
    setDialogVisible(true);
    setSelectedItem(item);
  };
  const handleDialogYes = () => {
    if (selectedItem) {
      const updatedData = [...data];
      const index = updatedData.findIndex(
        (d) => d.memberId === selectedItem.memberId
      );

      if (index !== -1) {
        updatedData[index][action] = true;
        onUpdateData(updatedData);
      }
    }

    setDialogVisible(false);
  };

  const handleDialogNo = () => {
    if (selectedItem) {
      const updatedData = [...data];
      const index = updatedData.findIndex(
        (d) => d.memberId === selectedItem.memberId
      );

      if (index !== -1) {
        updatedData[index][action] = false;
        onUpdateData(updatedData);
      }
    }
    setDialogVisible(false);
  };

  const showModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const openDropdown = () => {
    // alert("1")
    setDropdownVisible(true);
  };
  const closeDropdown = () => setDropdownVisible(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    closeDropdown();
    // Implement any action related to the selected option here
  };

  const hideModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={{backgroundColor:"white"}}>
      <DataTable>
        {/* Header */}
        <DataTable.Header style={styles.coolGray}>
          <DataTable.Title
          onPress={() => onSort('name')}
          sortDirection={
            sortField === 'name' ? sortDirection : 'descending'
          }
          >
            <Text style={styles.columnHeader}>Name</Text>
          </DataTable.Title>
          <DataTable.Title
            numeric
            onPress={() => onSort(selectedOption.split(" ")[0].toLowerCase() +
            selectedOption.split(" ")[1])}
            sortDirection={
              sortField === selectedOption.split(" ")[0].toLowerCase() +
              selectedOption.split(" ")[1] ? sortDirection : 'descending'
            }
          >
            <Menu
              visible={isDropdownVisible}
              onDismiss={closeDropdown}
              anchor={
                <Text onLongPress={openDropdown} style={styles.columnHeader}>
                  {selectedOption}
                </Text>
              }
            >
              {dropdownOptions.map((option) => (
                <Menu.Item
                  key={option}
                  title={option}
                  onPress={() => handleOptionSelect(option)}
                />
              ))}
            </Menu>
          </DataTable.Title>
          <DataTable.Title numeric 
          onPress={() => onSort('isPrincipalAmountPaid')}
            sortDirection={
              sortField === 'isPrincipalAmountPaid' ? sortDirection : 'descending'
            }
          >
            <Text style={styles.columnHeader}>Installment</Text>
          </DataTable.Title>
        </DataTable.Header>

        {/* Data Rows */}
        {paginatedData.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell onPress={() => showModal(item)}>
              <Text style={styles.bold}>{item.name}</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              {
                item[
                  selectedOption.split(" ")[0].toLowerCase() +
                    selectedOption.split(" ")[1]
                ]
              }
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Switch
                value={item.isPrincipalAmountPaid}
                onValueChange={() =>
                  toggleSwitch(item, "isPrincipalAmountPaid")
                }
              />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>

      {/* Dialog for monthly installment confirmation */}
      <Portal>
        <Dialog visible={dialogVisible}>
          {/* <Dialog.Title>Confirm Toggle</Dialog.Title> */}
          <Dialog.Icon icon="account" size={50} />
          <Dialog.Title style={{ textAlign: "center" }}>
            {selectedItem ? selectedItem.name : ""}
          </Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyLarge">{dialogMsg}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleDialogNo}>No</Button>
            <Button onPress={handleDialogYes}>Yes</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      {/* Modal for member's transaction dispaly */}
      <Portal>
        <Modal
          visible={isModalVisible}
          transparent
          animationType="slide"
          onDismiss={hideModal}
        >
          <View
            style={{
              position: "relative",
              top: 45,
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <Avatar.Image
              size={70}
              source={require("../../assets/memberProfilePics/DP_.png")}
              style={styles.avatarImage}
            />
          </View>

          <View style={styles.modalContent}>
            <View style={styles.closeButtonIcon}>
              <IconButton icon="close" size={28} onPress={hideModal} />
            </View>
            <View style={{ alignItems: "center", marginTop: 15 }}>
              <Text variant="headlineSmall">
                {selectedItem ? selectedItem.name : ""}
              </Text>
              <Text variant="bodySmall" style={{ marginBottom: "5%" }}>
                Oct, 2023
              </Text>
            </View>

            <Card mode="outlined" style={styles.card}>
              <Card.Title
                title="Monthly Installment"
                subtitle={
                  selectedItem
                    ? "\u20B9" + selectedItem.principalAmount + " to be paid"
                    : ""
                }
                right={(props) => (
                  <Switch
                    value={
                      selectedItem ? selectedItem.isPrincipalAmountPaid : ""
                    }
                    onValueChange={() =>
                      toggleSwitch(selectedItem, "isPrincipalAmountPaid")
                    }
                  />
                )}
              />
            </Card>
            <Card mode="outlined" style={styles.card}>
              <Card.Title
                title="Monthly Intrest"
                subtitle={
                  selectedItem
                    ? "\u20B9" + selectedItem.intrestAmount + " to be paid"
                    : ""
                }
                right={(props) => (
                  <Switch
                    value={selectedItem ? selectedItem.isIntrestAmountPaid : ""}
                    onValueChange={() =>
                      toggleSwitch(selectedItem, "isIntrestAmountPaid")
                    }
                  />
                )}
              />
            </Card>

            <TextInput
              mode="outlined"
              label="Loan Returned"
              keyboardType="numeric"
            />
            <TextInput
              mode="outlined"
              label="Loan Taken"
              keyboardType="numeric"
            />
            <Text style={{ color: "rgb(0, 103, 131)",marginTop:"5%" }}>The remaining total amount of loan is 
              <Text variant="bodyLarge" style={{fontWeight:"bold",color: "rgb(0, 103, 131)"}}>{selectedItem
                ? "" +
                  " "+selectedItem.loanAmount
                : ""}</Text>
            </Text>
            <Button
              icon="content-save"
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={{ marginTop: "5%", marginBottom: "5%" }}
            >
              Save
            </Button>
            <FAB
              icon="phone"
              mode="flat"
              // size="small"
              label={
                selectedItem ? "Call " + selectedItem.name.split(" ")[0] : ""
              }
              onPress={() => console.log("Pressed")}
            />
          </View>
        </Modal>
      </Portal>
      <View style={styles.paginationContainer}>
        <Icon
          name="chevron-double-left"
          size={30}
          color={"rgb(0, 103, 131)"}
          disabled={isFirstPage}
          onPress={() => {setCurrentPage(1);onUpdateCurrentPage(1)}}
        />
        <Icon
          name="chevron-left"
          size={30}
          color={"rgb(0, 103, 131)"}
          disabled={isFirstPage}
          onPress={() => {setCurrentPage(currentPage - 1);onUpdateCurrentPage(currentPage-1)}}
        />
        <Text>
          Page {getCurrentPage()} of {getTotalPages()}
        </Text>
        <Icon
          name="chevron-right"
          size={30}
          color={"rgb(0, 103, 131)"}
          disabled={isLastPage}
          onPress={() => {setCurrentPage(currentPage + 1);onUpdateCurrentPage(currentPage+1)}}
        />
        <Icon
          name="chevron-double-right"
          size={30}
          color={"rgb(0, 103, 131)"}
          disabled={isLastPage}
          onPress={() => {setCurrentPage(getTotalPages());onUpdateCurrentPage(getTotalPages())}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  columnHeader: {
    fontWeight: "bold",
    fontSize: 15,
  },
  coolGray: {
    backgroundColor: "#F2F2F2",
  },
  bold: {
    fontWeight: "bold",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  card: {
    marginBottom: "5%",
  },
  closeButtonIcon: {
    position: "absolute",
    right: 5,
  },
  avatarImage: {
    shadowColor: "rgb(0, 103, 131)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
});

export default MemberTable;
