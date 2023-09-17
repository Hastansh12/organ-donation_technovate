import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const RecipientHome = () => {
  // State variable for match found
  const [matchFound, setMatchFound] = useState(true);
  const navigation = useNavigation();
  // Example match details
  const matchDetails = {
    name: 'Matched Donor',
    organ: 'Kidney',
    location: 'Lilavati Hospital, Mumbai',
  };
  const onViewPress = () => {
    navigation.navigate('MapView')
  }
  const onAcceptPress = () => {
    navigation.navigate('Accept')
  }
  // Example function to handle match found
  const handleMatchFound = () => {
    setMatchFound(true);
  };

  // Hardcoded data for organ requests
  const organRequests = [
    {
      id: 1,
      name: 'Aradhya',
      organ: 'Kidney',
      profileImage: require('../../assets/images/card_person.jpg'),
      status : 'accepted'
    },
    {
      id: 2,
      name: 'Jane Smith',
      organ: 'Liver',
      profileImage: require('../../assets/images/user.png'),
      status : 'pending'
    },
  ];

  // Hardcoded data for nearby hospitals
  const nearbyHospitals = [
    {
      id: 1,
      name: 'City Hospital',
      image: require('../../assets/images/h1.jpg'),
    },
    {
      id: 2,
      name: 'Community Medical Center',
      image: require('../../assets/images/h2.jpg'),
    },
    {
      id: 3,
      name: 'Gokuldham Medical Center',
      image: require('../../assets/images/h3.jpg'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Match Found Card */}
      {matchFound && (
        <View style={styles.matchCard}>
          <Text style={styles.matchCardTitle}>Alert!! Match Found</Text>
          {/* Display match details here */}
          <Image
            style={styles.matchCardImage}
            source={require('../../assets/images/h1.jpg')} // Add the image source here
          />
          <Text style={styles.matchCardText}>Name: {matchDetails.name}</Text>
          <Text style={styles.matchCardText}>
            Organ: {matchDetails.location}
          </Text>
          <View style={styles.buttonContainer}>
            {/* Accept Button */}
            <TouchableOpacity onPress={onAcceptPress} style={styles.acceptButton}>
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>

            {/* View on Map Button */}
            <TouchableOpacity onPress={onViewPress} style={styles.viewOnMapButton}>
              <Image
                source={require('../../assets/images/map_marker.png')} // Add the image source here
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>View on Map</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Your Request Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Requests</Text>
        {organRequests.map(request => (
          <View key={request.id} style={styles.requestCard}>
            <Image style={styles.profileImage} source={request.profileImage} />
            <View style={styles.requestCardContent}>
              <Text style={styles.requestCardTitle}>Name: {request.name}</Text>
              <Text style={styles.requestCardText}>Organ: {request.organ}</Text>
              <Text style={styles.requestCardText}>Status: {request.status}</Text>
            </View>
            <View style={styles.viewButton}>
              <TouchableOpacity>
                <Text style={styles.viewButtonText}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  matchCard: {
    backgroundColor: '#d1e0ff',
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    padding: 15,
  },
  matchCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  matchCardImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  matchCardText: {
    fontSize: 16,
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    padding: 10,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  acceptButton: {
    flexDirection: 'row',
    backgroundColor: '#0d214d',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  viewOnMapButton: {
    flexDirection: 'row',
    backgroundColor: '#061a45',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // Your Request Section Styles
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  requestCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#dfe6f5',
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 16,
  },
  requestCardContent: {
    padding: 16,
    flex: 1,
  },
  requestCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  requestCardText: {
    fontSize: 14,
    marginBottom: 4,
  },
  viewButton: {
    backgroundColor: '#0d214d',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop : 30,
    marginRight : 20
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // Nearby Hospitals Section Styles
  hospitalCard: {
    backgroundColor: 'lightblue',
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    alignItems: 'center',
  },
  hospitalImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default RecipientHome;
