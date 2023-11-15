import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Appbar, Text, FAB, Badge } from "react-native-paper";
import jsonData from './FundData.json';
import CurrencyFormatter from '../Utility/CurrencyFormatter';
import AddFund from "./AddFund";
function Fund({
  name,
  period,
  beginDt,
  totalMembers,
  intrest,
  totalLoan,
  totalIntrest,
  totalInstallments,
}) {
  return (
    <View style={styles.fundContainer}>
      <Text
        variant="displaySmall"
        style={styles.fundNameLabel}>
        {"Fund "+name}
      </Text>
      
      <Text style={styles.fundTotalMembers}>of {totalMembers} members for {period} months</Text>
      <View style={styles.containerX}>
      <View style={styles.numberContainer}>
        <CurrencyFormatter amount={totalLoan} />
        <Text style={styles.label}>Total Loan</Text>
      </View>

      <View style={styles.numberContainer}>
        <CurrencyFormatter amount={totalIntrest} />
        <Badge
        style={{
          position: 'absolute',
          top: -15,
          right: -5
        }}
      >
        {intrest}%
      </Badge>
        <Text style={styles.label}>Total Intrests</Text>
      </View>

      <View style={styles.numberContainer}>
        <CurrencyFormatter amount={totalInstallments} />
        <Text style={styles.label}>Total Principal</Text>
      </View>
      </View>
    </View>
  );
}

export default function Funds({ navigation }) {
//   const _goBack = () => navigation.navigate("Home");
  return (
    <>
    <ScrollView style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "white" }}>
        {/* <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.Content title="Fund details" />
      </Appbar.Header>
      {jsonData.map((item, index) => (<Fund key={index} {...item} index={index}></Fund>))}
    </ScrollView>
    <FAB
        variant="primary"
        size="medium"
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate("AddFund")}
      />
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
    backgroundColor: "white",
    height: "100%",
  },
  numberContainer: {
    alignItems: "center",
  },
  number: {
    fontSize: 12,
    fontWeight: "bold",
  },
  label: {
    marginTop: 5,
    fontSize: 14,
    marginBottom: 15,
    color: "grey"

  },
  containerX: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    // marginTop: 20,
  },
  fundNameLabel:{
    textAlign: "center",
    marginTop: 25,
    
  },
  fundTotalMembers:{
    textAlign:"center",
    color:"grey",
    marginBottom: 50,
    fontSize: 12
  },
  fundContainer:{
    backgroundColor: '#edede9',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 10,
    marginRight: 10
  }, 
  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 10,
    color:'blue'
  },
});
