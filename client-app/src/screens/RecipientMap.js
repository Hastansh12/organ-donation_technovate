import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PermissionsAndroid } from 'react-native';
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
          title: 'Location Permission',
          message: 'This app needs access to your location for maps.',
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

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        style={{ padding: 10 }}
        placeholder="Search for a location"
        onPress={(data, details = null) => {
          console.log(data);
        }}
        query={{
          key: 'YOUR_GOOGLE_PLACES_API_KEY',
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
          latitude: 19.0760,
          longitude: 72.8777,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {/* Markers for hospitals */}
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
        
        {/* Marker for current location */}
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

      {/* Buttons for finding donors and hospitals */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={getLocation}
          style={styles.button}
        >
          <Image
            source={require('../../assets/images/user.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Find Donors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getLocation}
          style={styles.button}
        >
          <Image
            source={require('../../assets/images/heart.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Find Hospitals</Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0e3078',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
  },
});

export default MapPage;
