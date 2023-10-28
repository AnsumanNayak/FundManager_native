import * as React from "react";
import {
  Appbar,
  TextInput,
  Text,
  RadioButton,
  Checkbox,
} from "react-native-paper";
import { View, StyleSheet } from "react-native";


const AddMember = ({ navigation }) => {
  const [name, onChangeName] = React.useState("");
  const [phnNum, onphnNum] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState('first');
  const [address, onChangeAddress] = React.useState("");
  const [fund, onChangeFund] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const _goBack = () => navigation.navigate("Member");
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Add Member details" />
      </Appbar.Header>
      <View style={{padding: 12}}>
      <TextInput
        label="Name"
        value={name}
        mode="outlined"
        onChangeText={onChangeName}
        keyboardType="ascii-capable"
      />
      
      <View style={styles.radioButtonGroup}>
        <RadioButton.Group
          onValueChange={(value) => setSelectedValue(value)}
          value={selectedValue}
        >
          <View style={styles.radioButtonRow}>
            <RadioButton.Item label="Male" value="M" mode="ios"/>
            <RadioButton.Item label="Female" value="F" mode="ios"/>
          </View>
        </RadioButton.Group>
      </View>
      <TextInput
        label="Phone Number"
        value={phnNum}
        mode="outlined"
        onChangeText={onphnNum}
        keyboardType="phone-pad"
        maxLength={10}
      />
      <TextInput
        label="Address"
        value={address}
        mode="outlined"
        onChangeText={onChangeAddress}
        keyboardType="ascii-capable"
        // multiline='true'
      />
      {/* <Text>Member of:</Text> */}
      <Checkbox.Item
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      color="rgb(110, 86, 118)"
      label="Alpha"
      mode = "ios"
    />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
    // padding: 10,
  },
  radioButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonRow: {
    flexDirection: 'row',
  },
});
export default AddMember;
