import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrencyFormatter = ({ amount }) => {
  // Format the number as currency
  const formattedAmount = amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'INR', // You can change the currency code as needed
    minimumFractionDigits: 0,
  });

  return (
    <View>
      <Text style={styles.currencyText}>{formattedAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  currencyText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CurrencyFormatter;
