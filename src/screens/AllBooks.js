import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AllBooksScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={24} color="#190344" />
        <Text style={styles.headerText}>All Books</Text>
        <Ionicons name="search-outline" size={24} color="#190344" />
      </View>

      {/* Ebook and Audiobooks Section */}
      <View style={styles.ebookAudioContainer}>
        <View style={styles.ebookContainer}>
          <Text style={styles.txtbookContainer}>Ebook</Text>
        </View>
        <Text style={styles.txtbookAudioContainer}>Audiobooks</Text>
      </View>

      {/* Book Images Grid */}
      <View style={styles.gridContainer}>
        {/* Images */}
        <Image
          source={require('../images/all-books-one.png')}
          style={styles.image}
        />
        <Image
          source={require('../images/all-books-two.png')}
          style={styles.image}
        />
        <Image
          source={require('../images/all-books-three.png')}
          style={styles.image}
        />
        <Image
          source={require('../images/all-books-four.png')}
          style={styles.image}
        />
        <Image
          source={require('../images/all-books-five.png')}
          style={styles.image}
        />
        <Image
          source={require('../images/all-books-six.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 22,
    color: '#190344',
    fontWeight: 'bold',
  },
  ebookAudioContainer: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  ebookContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '50%',
    height: '90%',
    padding: 10,
  },
  txtbookContainer: {
    color: '#190344',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  txtbookAudioContainer: {
    color: '#190344',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingRight: 40,
    fontSize: 18,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: '48%',
    height: 180,
    borderRadius: 20,
    marginVertical: 10,
  },
  tabNavigator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeIcon: {
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
});

export default AllBooksScreen;
