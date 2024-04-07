import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BookDetailScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Ionicons name="ellipsis-horizontal" size={24} color="black" />
      </View>

      {/* Title */}
      <Text style={styles.historyTitle}>HISTORY</Text>
      <Text style={styles.mainTitle}>
        Always forgive your enemies, nothing annoys
      </Text>

      {/* Subheading */}
      <View style={styles.subHeading}>
        <Text style={styles.publisher}>
          Published from{' '}
          <Text style={{fontWeight: 'bold', color: '#190344'}}>istudio</Text>
        </Text>
        <Text style={styles.date}>23 Mar 2019</Text>
      </View>

      {/* Book Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../images/book-details.png')}
          style={styles.image}
        />
      </View>
      {/* Ratings */}
      <View style={{margin: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'gold'}}>
          <Text style={{fontSize: 20, color: '#190344'}}>4.7</Text>
          ★★★★☆
        </Text>
        <Text style={{fontSize: 14, color: 'darkgray', marginVertical: 5}}>
          892 Ratings on Google Play
        </Text>

        {/* Paragraph section */}
        <View style={styles.paragraph}>
          <Text style={{color: '#190344'}}>
            I failed the first quarter of a class in school, so I made a fake
            report card. I did this every quarter that year. I forgot that they
            mail home the end year cards, and my mom got it before I could
            intercept...Read more
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 30,
  },
  historyTitle: {
    fontSize: 14,
    color: 'orange',
  },
  mainTitle: {
    fontSize: 32,
    color: '#190344',
  },
  subHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  publisher: {
    fontSize: 14,
    color: 'darkgray',
  },
  date: {
    fontSize: 14,
    color: 'darkgray',
  },
  image: {
    width: 300,
    height: 200,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginLeft: 4,
  },
  imageContainer: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginHorizontal: 20,
    paddingRight: 0,
    paddingLeft: 50,
    marginVertical: 20,
    backgroundColor: 'lightgray',
  },
  paragraph: {
    marginVertical: 10,
    padding: 10,
    fontSize: 18,
  },
  tabNavigator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 42,
  },
  homeIcon: {
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
});

export default BookDetailScreen;
