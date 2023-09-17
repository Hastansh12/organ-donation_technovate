import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

const GeneralMapView = () => {
  // Coordinates for current location (example)
  const currentLocation = { latitude: 19.1, longitude: 72.9 };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 19.0860, // Latitude of Mumbai
          longitude: 72.8846, // Longitude of Mumbai
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {/* Marker for Lilavati Hospital */}
        <Marker
          coordinate={{ latitude: 19.0676, longitude: 72.8330 }} // Coordinates for Lilavati Hospital
          title="Lilavati Hospital"
        >
          <Callout>
            <View>
              <Text style={styles.calloutTitle}>Lilavati Hospital</Text>
              <Image
                source={require('../../assets/images/h1.jpg')} // Replace with the actual image path
                style={styles.calloutImage}
              />
            </View>
          </Callout>
        </Marker>

        {/* Marker for donor Aradhya */}
        <Marker
          coordinate={{ latitude: 19.1554, longitude: 72.8498 }} // Coordinates for Goregaon (Aradhya's location)
          title="Donor: Aradhya"
        >
          <Callout>
            <View>
              <Text style={styles.calloutTitle}>Donor: Aradhya</Text>
              <Image
                source={require('../../assets/images/card_person.jpg')} // Replace with the actual image path
                style={styles.calloutImage}
              />
            </View>
          </Callout>
        </Marker>

        {/* Marker for Current Location */}
        <Marker
          coordinate={currentLocation} // Replace with the actual coordinates of the current location
          title="Current Location"
        >
          <Callout>
            <View>
              <Text style={styles.calloutTitle}>Current Location</Text>
              {/* You can add details or an image for the current location if needed */}
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  calloutImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default GeneralMapView;
