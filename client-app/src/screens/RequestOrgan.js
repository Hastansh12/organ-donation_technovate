import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';

const RequestOrgan = () => {
  const [urgency, setUrgency] = useState('Normal'); // Initial state: Normal

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Request Organ</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Organ Needed"
        />
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Urgency Level:</Text>
          <Picker
            style={styles.picker}
            selectedValue={urgency}
            onValueChange={(itemValue) => setUrgency(itemValue)}
          >
            <Picker.Item label="Normal" value="Normal" />
            <Picker.Item label="Severe" value="Severe" />
            <Picker.Item label="Critical" value="Critical" />
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Additional Notes"
          multiline
        />
        <LinearGradient colors={['#0073e6', '#0097ff']} style={styles.requestButton}>
          <TouchableOpacity>
            <Text style={styles.requestButtonText}>Submit Request</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingLeft: 8,
  },
  pickerContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  picker: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
  },
  requestButton: {
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  requestButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RequestOrgan;
