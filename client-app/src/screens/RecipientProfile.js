import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const RecipientProfile = () => {
  // Hardcoded recipient's general medical information
  const recipientInfo = {
    name: 'John Doe',
    age: 45,
    bloodType: 'O+',
    organNeeded: 'Kidney',
    medicalCondition: 'Chronic Kidney Disease',
    contactNumber: '+1 123-456-7890',
    email: 'john.doe@example.com',
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/images/heart.png')} // Replace with the actual image source
        />
        <Text style={styles.name}>{recipientInfo.name}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>{recipientInfo.age}</Text>

        <Text style={styles.label}>Blood Type:</Text>
        <Text style={styles.value}>{recipientInfo.bloodType}</Text>

        <Text style={styles.label}>Organ Needed:</Text>
        <Text style={styles.value}>{recipientInfo.organNeeded}</Text>

        <Text style={styles.label}>Medical Condition:</Text>
        <Text style={styles.value}>{recipientInfo.medicalCondition}</Text>

        <Text style={styles.label}>Contact Number:</Text>
        <Text style={styles.value}>{recipientInfo.contactNumber}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{recipientInfo.email}</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardBody: {},
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    marginBottom: 12,
  },
  editButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RecipientProfile;
