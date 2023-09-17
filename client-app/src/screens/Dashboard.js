import React from 'react';
import { View, ScrollView, Text, Image, FlatList, StyleSheet } from 'react-native';

// Additional imports for sliders or carousels if needed

const Dashboard = () => {
  const storiesAndArticlesData = [
    {
      id: 1,
      title: 'The Gift of Life',
      content: 'Read about John\'s inspiring journey as an organ donor.',
      imageUrl: require('../../assets/images/article1.jpg'),
    },
    {
      id: 2,
      title: 'Saving Lives Together',
      content: 'Learn about organ donation and its impact on communities.',
      imageUrl: require('../../assets/images/article4.jpg'),
    },
    // Add more stories and articles here
  ];

  const donorInfo = {
    name: 'Aradhya Sakalley',
    donorID: '12345xyrwv',
    organType: 'Liver',
    // Add more donor information here
  };

  const hospitalsData = [
    {
      id: 1,
      name: 'Mumbai Central Hospital',
      location: 'Mumbai, Maharashtra',
    },
    {
      id: 2,
      name: 'Metro Health Clinic',
      location: 'Mumbai, Maharashtra',
    },
    // Add more hospitals in Mumbai here
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Slider for Stories and Articles */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.articlesContainer}
      >
        {storiesAndArticlesData.map((item) => (
          <View key={item.id} style={styles.storyCard}>
            <Image source={item.imageUrl} style={styles.storyImage} />
            <Text style={styles.storyTitle}>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Donor Card */}
      
      <View style={styles.card}>
        <Image source={require('../../assets/images/card_person.jpg')} style={styles.donorImage} />
        <Text style={styles.donorName}>{donorInfo.name}</Text>
        <Text>Donor ID: {donorInfo.donorID}</Text>
        <Text>Organ Type: {donorInfo.organType}</Text>
      </View>

      {/* Slider for List of Hospitals */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Hospitals in Mumbai</Text>
        <FlatList
          data={hospitalsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.hospitalCard}>
              <Text style={styles.hospitalName}>{item.name}</Text>
              <Text>Location: {item.location}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#d3ddf2',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articlesContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    padding : 20,
    borderRadius : 20
  },
  storyCard: {
    marginLeft: 10,
    width: 250,
    backgroundColor : '#ebf0fa',
    padding : 10, 
    borderRadius : 10
  },
  storyImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  donorImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  donorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  hospitalCard: {
    marginBottom: 10,
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Dashboard;
