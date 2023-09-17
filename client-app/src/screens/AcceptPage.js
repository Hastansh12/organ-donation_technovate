import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AcceptOrganPage = () => {
  // Sample data for the organ donation card
  const donorName = 'Aradhya Sakalley';
  const organToBeDonated = 'Kidney';
  const navigation = useNavigation();
  // Function to handle the "View on Map" button press
  const handleViewOnMap = () => {
    navigation.navigate('MapView')
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/card_person.jpg')} // Add the path to your donor profile image
          style={styles.profileImage}
        />
        <Text style={styles.title}>Organ Donation Details</Text>
        <Text style={styles.label}>Donor Name:</Text>
        <Text style={styles.text}>{donorName}</Text>
        <Text style={styles.label}>Organ to be Donated:</Text>
        <Text style={styles.text}>{organToBeDonated}</Text>
        <TouchableOpacity style={styles.viewOnMapButton} onPress={handleViewOnMap}>
          <Text style={styles.buttonText}>View on Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookAppointmentButton}>
          <Text style={styles.buttonText}>Book an Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color for the entire screen
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Adjust the width of the card as needed
    alignItems: 'center', // Center card content horizontally
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 100, // Adjust the image dimensions as needed
    height: 100,
    borderRadius: 50, // To make it a circular profile picture
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
  },
  viewOnMapButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  bookAppointmentButton: {
    backgroundColor: 'green', // Change the button color as needed
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AcceptOrganPage;
