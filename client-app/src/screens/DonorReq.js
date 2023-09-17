import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const DonorReq = () => {
  const navigation = useNavigation();

  // Sample data for registered donation hospitals and matched recipients
  const registeredHospitals = [
    {
      id: 1,
      name: 'City Hospital',
      location: 'Mumbai, India',
      image: require('../../assets/images/h1.jpg'), // Add image for the hospital
    },
    {
      id: 2,
      name: 'Community Medical Center',
      location: 'New York, USA',
      image: require('../../assets/images/h2.jpg'), // Add image for the hospital
    },
  ];

  const matchedRecipients = [
    {
      id: 1,
      name: 'Smit Dama',
      organ: 'Kidney',
      severity : 'High'
    },
    {
      id: 2,
      name: 'Mohit Dhatrak',
      organ: 'Kidney',
      severity : 'High'
    },
  ];

  // Function to handle connecting with a recipient
  const handleConnect = (recipientId) => {
    // Implement logic to initiate communication with the recipient here
    console.log(`Connected with Recipient ID: ${recipientId}`);
    navigation.navigate('Connect');
  };

  return (
    <ScrollView style={styles.container}>
       <Text style={styles.title}>Matched Recipients</Text>
      {matchedRecipients.map((recipient) => (
        <View key={recipient.id} style={styles.card}>
          <Text style={styles.cardTitle}>{recipient.name}</Text>
          <Text style={styles.cardText}>Organ: {recipient.organ}</Text>
          <Text style={styles.cardText}>Severity: {recipient.severity}</Text>
          <TouchableOpacity
            style={styles.connectButton}
            onPress={() => handleConnect(recipient.id)}
          >
            <Text style={styles.connectButtonText}>Connect</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Text style={styles.title}>Your Registered Donation Hospitals</Text>
      {registeredHospitals.map((hospital) => (
        <View key={hospital.id} style={styles.card}>
          <Image source={hospital.image} style={styles.hospitalImage} />
          <Text style={styles.cardTitle}>{hospital.name}</Text>
          <Text style={styles.cardText}>Location: {hospital.location}</Text>
          <TouchableOpacity
            style={styles.viewOnMapButton}
            onPress={() => {
              // Implement logic to view the hospital on the map here
              console.log(`View on Map: ${hospital.name}`);
            }}
          >
            <Image
              source={require('../../assets/images/map_marker.png')} // Add your map marker icon
              style={styles.viewOnMapIcon}
            />
            <Text style={styles.viewOnMapButtonText}>View on Map</Text>
          </TouchableOpacity>
        </View>
      ))}

     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5', // Light gray background
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#aec4f2',
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    padding: 16,
  },
  hospitalImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444', // Dark gray text color
  },
  connectButton: {
    backgroundColor: '#0f3a96', // Blue button color
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  connectButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  viewOnMapButton: {
    flexDirection: 'row',
    backgroundColor: '#0c2c70', // Blue button color
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  viewOnMapIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  viewOnMapButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DonorReq;
