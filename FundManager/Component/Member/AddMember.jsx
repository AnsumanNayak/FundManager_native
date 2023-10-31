import * as React from "react";
import {
  Appbar,
  TextInput,
  HelperText,
  RadioButton,
  Button,
} from "react-native-paper";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import { DatePickerInput } from "react-native-paper-dates";
import jsonData from "./MemberData.json";
const AddMember = ({ navigation }) => {
  const [formDataValidation, setFormDataValidation] = React.useState({
    name: false,
    phnNum: false,
    gender: false,
    dob: false,
    address: false,
    guarantor: false,
    fund: false,
    aadharNum: false,
  });
  const [formData, setFormData] = React.useState({
    name: "",
    phnNum: "",
    gender: "",
    dob: "",
    address: "",
    guarantor: [],
    fund: [],
    aadharNum: "",
  });
  const [isSubmit, setIsSubmit] = React.useState(false);
 

  const FieldValidation = (field) => {
    React.useEffect(() => {
      // Check if it's the submission and the field is empty
      if (isSubmit && !formDataValidation[field.value] && formData[field.value].length === 0) {
        // Set the formDataValidation state to mark this field as invalid
        setFormDataValidation({
          ...formDataValidation,
          [field.value]: true,
        });
      }
    }, [field.value, isSubmit, formData, formDataValidation]);
  
    if (isSubmit && formDataValidation[field.value] && formData[field.value].length === 0) {
      return (
        <HelperText type="error" visible={true} padding="none" style={{ paddingTop: 0,marginTop: -8, fontWeight: "bold" }}>
          Please fill out this required field.
        </HelperText>
      );
    } else {
      return null;
    }
  };
  
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    if(formDataValidation[name] && value.length !== 0){
      setFormDataValidation({
        ...formDataValidation,
      [name]: false,
      });
    }
  };

  const memberData = jsonData.map((item) => {
    return { key: item.memberId, value: item.name };
  });
  const _goBack = () => navigation.navigate("Member");

  const data = [
    { key: "1", value: "Alpha" },
    { key: "2", value: "Beta" },
    { key: "3", value: "Gama" },
  ];
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Add Member details" />
        </Appbar.Header>

        <View style={{ paddingLeft: 12, paddingRight: 12, margin: 0 }}>
          <TextInput
            label="Name"
            value={formData.name}
            mode="outlined"
            onChangeText={(value) => handleInputChange("name", value)}
            keyboardType="ascii-capable"
            style={{ marginBottom: 12 }}
            error= {formDataValidation.name}
          />
          <FieldValidation value="name"/>
          <View style={styles.radioButtonGroup}>
            <RadioButton.Group
              onValueChange={(value) => handleInputChange("gender", value)}
              value={formData.gender}
            >
              <View style={styles.radioButtonRow}>
                <RadioButton.Item label="Male" value="M" mode="android" />
                <RadioButton.Item label="Female" value="F" mode="android" />
              </View>
            </RadioButton.Group>
          </View>

          <DatePickerInput
            locale="en"
            label="Birth Date"
            value={formData.dob}
            onChange={(value) => handleInputChange("dob", value)}
            inputMode="start"
            style={{ width: 100, marginBottom: 12 }}
            mode="outlined"
            presentationStyle="pageSheet"
            disableStatusBarPadding="true"
            hasError={formDataValidation.dob}
          />
          <FieldValidation value="dob"/>
          <TextInput
            label="Phone Number"
            value={formData.phnNum}
            mode="outlined"
            onChangeText={(value) => handleInputChange("phnNum", value)}
            keyboardType="phone-pad"
            maxLength={10}
            style={{ marginBottom: 12 }}
            error= {formDataValidation.phnNum}
          />
          <FieldValidation value="phnNum"/>
          <TextInput
            label="Address"
            value={formData.address}
            mode="outlined"
            onChangeText={(value) => handleInputChange("address", value)}
            keyboardType="default"
            style={{ marginBottom: 12 }}
            error= {formDataValidation.phnNum}
          />
          <FieldValidation value="phnNum"/>
          <MultipleSelectList
            setSelected={(value) => handleInputChange("guarantor", value)}
            data={memberData}
            save="key"
            label="Guarantors"
            placeholder="Select Guarantor"
            search={true}
            boxStyles={formDataValidation.guarantor ? styles.inValid : styles.valid}
            badgeStyles={{ backgroundColor: "rgb(0, 95, 175)" }}
            badgeTextStyles={{ color: "white", fontWeight: "bold" }}
            checkBoxStyles={{ borderColor: "rgb(0, 95, 175)" }}
            labelStyles={formDataValidation.fund ? styles.inValidColor : styles.validColor}
          />
          <FieldValidation value="guarantor"/>
          <MultipleSelectList
            setSelected={(value) => handleInputChange("fund", value)}
            data={data}
            save="value"
            // onSelect={() => alert(selectedFund)}
            label="Member of funds"
            placeholder="Select Fund"
            search={false}
            boxStyles={formDataValidation.fund ? styles.inValid : styles.valid}
            badgeStyles={{ backgroundColor: "rgb(0, 95, 175)" }}
            badgeTextStyles={{ color: "white", fontWeight: "bold" }}
            checkBoxStyles={{ borderColor: "rgb(0, 95, 175)" }}
            labelStyles={{color:'red',fontWeight: 'bold'}}
            // labelStyles={formDataValidation.fund ? styles.inValidColor : styles.validColor}
          />
          <FieldValidation value="fund"/>
          <TextInput
            label="Aadhar Number"
            value={formData.aadharNum}
            mode="outlined"
            onChangeText={(value) => handleInputChange("aadharNum", value)}
            keyboardType="phone-pad"
            maxLength={12}
            style={{ marginBottom: 12 }}
            error= {formDataValidation.aadharNum}
          />
          <FieldValidation value="aadharNum"/>
          <Button
            icon="account-plus"
            mode="contained"
            onPress={() => setIsSubmit(true)}
            style={{ marginTop: 20, marginBottom: 10 }}
          >
            Add Member
          </Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "white",
  },
  radioButtonGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButtonRow: {
    marginBottom: 12,
    flexDirection: "row",
  },
  valid:{
    borderRadius: 5,
    marginTop: 6,
    marginBottom: 12,
    backgroundColor: "rgb(253, 252, 255)",
  },
  inValid:{
    borderRadius: 5,
    marginTop: 6,
    marginBottom: 12,
    backgroundColor: "rgb(253, 252, 255)",
    borderWidth: 2,
    borderColor: "rgb(186, 26, 26)"
  },
  inValidColor:{
    color: "rgb(186, 26, 26)"
  },
  validColor:{
    color: "rgb(255, 255, 255)"
  }
});

export default AddMember;
