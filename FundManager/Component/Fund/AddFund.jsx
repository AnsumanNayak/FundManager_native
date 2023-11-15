import * as React from "react";
import {
  Appbar,
  TextInput,
  HelperText,
  Button,
} from "react-native-paper";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
const AddMember = ({ navigation }) => {
  const [formDataValidation, setFormDataValidation] = React.useState({
    name: false,
    period: false,
    intrest: false,
    beginDt: false,
  });
  const [formData, setFormData] = React.useState({
    name: "",
    period: "",
    intrest: "",
    beginDt: "",
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

  const _goBack = () => navigation.navigate("Fund");

 
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Add Fund details" />
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

         
          <TextInput
            label="Duration in months"
            value={formData.period}
            mode="outlined"
            onChangeText={(value) => handleInputChange("period", value)}
            keyboardType="phone-pad"
            style={{ marginBottom: 12 }}
            error= {formDataValidation.period}
          />
          <FieldValidation value="period"/>
          <TextInput
            label="Monthly Intrest"
            value={formData.intrest}
            mode="outlined"
            onChangeText={(value) => handleInputChange("intrest", value)}
            keyboardType="phone-pad"
            maxLength={2}
            style={{ marginBottom: 12 }}
            error= {formDataValidation.intrest}
          />
          <FieldValidation value="intrest"/>
          <TextInput
            label="Meeting Day"
            value={formData.beginDt}
            mode="outlined"
            onChangeText={(value) => handleInputChange("beginDt", value)}
            keyboardType="phone-pad"
            maxLength={2}
            style={{ marginBottom: 12 }}
            error= {formDataValidation.beginDt}
          />
          <FieldValidation value="beginDt"/>
          <Button
            icon="cash-plus"
            mode="contained"
            onPress={() => setIsSubmit(true)}
            style={{ marginTop: 20, marginBottom: 10 }}
          >
            Add Fund
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
