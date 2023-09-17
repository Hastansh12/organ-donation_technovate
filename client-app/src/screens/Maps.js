import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const MapPage = () => {
  useEffect(() => {
    requestCameraPermission();
  }, []);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const [currentLocation, setCurrentLocation] = useState(null);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'App Location Permission',
          message:
            'App needs access to your location ' +
            'to find nearby hospitals and organ requests.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleFindHospitals = () => {
    // Implement logic to find hospitals nearby
    // You can use the currentLocation state to get the user's current location
    // and then make API calls or perform any other actions to find nearby hospitals.
  };

  const handleFindOrganRequests = () => {
    // Implement logic to find organ requests on the map
    // You can use the currentLocation state to get the user's current location
    // and then make API calls or perform any other actions to find organ requests.
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        style={{ padding: 10 }}
        placeholder="Search for a location"
        onPress={(data, details = null) => {
          // 'data' contains the details of the selected location
          console.log(data);
        }}
        query={{
          key: 'YOUR_GOOGLE_MAPS_API_KEY',
          language: 'en',
        }}
        styles={{
          container: {
            position: 'absolute',
            top: 10,
            left: 10,
            right: 10,
          },
          textInputContainer: {
            flex: 1,
            backgroundColor: 'transparent',
            height: 48,
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            flex: 1,
            height: 48,
            margin: 0,
            borderRadius: 5,
            paddingLeft: 16,
          },
          listView: {
            backgroundColor: 'white',
            borderRadius: 5,
            marginTop: 10,
          },
        }}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          // Set the initial region for Mumbai
          latitude: 19.0760, // Latitude of Mumbai
          longitude: 72.8777, // Longitude of Mumbai
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {/* Add markers for hospitals in Mumbai */}
        <Marker
          coordinate={{
            latitude: 19.049487, // Coordinates for Lilavati Hospital
            longitude: 72.826141,
          }}
          title="Lilavati Hospital"
          description="A popular hospital in Mumbai"
        >
          <Callout>
            <View>
              <Text>Lilavati Hospital</Text>
            </View>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 18.989098, // Coordinates for Tata Memorial Hospital
            longitude: 72.830387,
          }}
          title="Tata Memorial Hospital"
          description="A renowned cancer hospital"
        >
          <Callout>
            <View>
              <Text>Tata Memorial Hospital</Text>
            </View>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 18.972714, // Coordinates for Jaslok Hospital
            longitude: 72.806245,
          }}
          title="Jaslok Hospital"
          description="A well-known healthcare facility"
        >
          <Callout>
            <View>
              <Text>Jaslok Hospital</Text>
            </View>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 19.129334, // Coordinates for Kokilaben Hospital
            longitude: 72.829359,
          }}
          title="Kokilaben Dhirubhai Ambani Hospital"
          description="A leading multi-specialty hospital"
        >
          <Callout>
            <View>
              <Text>Kokilaben Dhirubhai Ambani Hospital</Text>
            </View>
          </Callout>
        </Marker>

        {currentLocation && (
          <Marker
            coordinate={currentLocation}
            title="Current Location"
            description="Your current location"
          >
            <Callout>
              <View>
                <Text>Your Current Location</Text>
              </View>
            </Callout>
          </Marker>
        )}
      </MapView>

      <TouchableOpacity onPress={getLocation} style={styles.getLocationButton}>
        <Text style={styles.getLocationButtonText}>Organ Recepients</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleFindHospitals} style={styles.findHospitalsButton}>
        <Text style={styles.buttonText}>Find Hospitals Nearby</Text>
      </TouchableOpacity>

      
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
  getLocationButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#0e3078',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  getLocationButtonText: {
    color: 'white',
  },
  findHospitalsButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#0e3078',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  findOrganRequestsButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#0e3078',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default MapPage;
