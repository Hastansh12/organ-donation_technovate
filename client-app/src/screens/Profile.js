import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import styles from '../styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHeart,
  faUser,
  faArrowRight,
  faHandsHelping,
} from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';
const handleEditProfilePress = () => {
  // Navigate to the new page for editing the profile
  navigation.navigate('Profile'); // Replace 'EditProfile' with your actual screen name
};
const Profile = ({ navigation }) => {
  return (
    <ScrollView style = {{padding: 30, borderRadius : 20, margin : 10, backgroundColor : '#dce5fa'}}>
      <View style={styles.profile}>
        <Image
          style={{ width: 150, height: 150, borderRadius : 150 , marginTop : 20}}
          source={
            require('../../assets/images/card_person.jpg')
          }
        />
        <Text style={styles.profileName}>Aradhya Sakalley</Text>
      </View>

      <View style={styles.menuOptions}>
        <Pressable
          style={styles.menuOption}
          onPress={() => {
            navigation.navigate('')
          }}>
          <FontAwesomeIcon color="#ccc" icon={faUser} />
          <Text style={styles.menuText}>Edit Organ Donor Profile</Text>
          <FontAwesomeIcon color="#ccc" icon={faArrowRight} />
        </Pressable>

        <Pressable
          style={styles.menuOption}
          onPress={() => {
            // Handle the action for managing organ donation preferences
          }}>
          <FontAwesomeIcon color="#ccc" icon={faHeart} />
          <Text style={styles.menuText}>Organ Donation Preferences</Text>
          <FontAwesomeIcon color="#ccc" icon={faArrowRight} />
        </Pressable>

        <Pressable
          style={styles.menuOption}
          onPress={() => {
            // Handle the action for learning more about organ donation
          }}>
          <FontAwesomeIcon color="#ccc" icon={faHandsHelping} />
          <Text style={styles.menuText}>Learn About Organ Donation</Text>
          <FontAwesomeIcon color="#ccc" icon={faArrowRight} />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Profile;
