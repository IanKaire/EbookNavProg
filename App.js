import * as React from 'react';
import {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import BookDetailScreen from './src/screens/BookDetail';
import AllBooksScreen from './src/screens/AllBooks';
import TabIcon from './src/components/TabIcon';

export default function App() {
  const [tabValue, setTabValue] = useState(true);

  const [activeTab, setActiveTab] = useState('home'); // Initial active tab is 'home'

  function tabValueHandler(tabName) {
    setActiveTab(tabName);
    setTabValue(prevTabValue => !prevTabValue);
  }

  let screen = tabValue ? <BookDetailScreen /> : <AllBooksScreen />;

  return (
    <SafeAreaView style={styles.appContainer}>
      {screen}
      <View style={styles.tabNavigator}>
        <TabIcon
          onPress={() => tabValueHandler('home')}
          name="home"
          style={activeTab === 'home' ? styles.activeIcon : styles.inActiveIcon}
        />
        <TabIcon
          onPress={() => tabValueHandler('bar-chart')}
          name="bar-chart"
          style={
            activeTab === 'bar-chart' ? styles.activeIcon : styles.inActiveIcon
          }
        />
        <TabIcon
          onPress={() => tabValueHandler('mic')}
          name="mic"
          style={activeTab === 'mic' ? styles.activeIcon : styles.inActiveIcon}
        />
        <TabIcon
          onPress={() => tabValueHandler('bookmark')}
          name="bookmark"
          style={
            activeTab === 'bookmark' ? styles.activeIcon : styles.inActiveIcon
          }
        />
        <TabIcon
          onPress={() => tabValueHandler('person')}
          name="person"
          style={
            activeTab === 'person' ? styles.activeIcon : styles.inActiveIcon
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  tabNavigator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  activeIcon: {
    color: 'black',
    fontSize: 28,
    marginHorizontal: 10,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  inActiveIcon: {
    color: 'lightgray',
    fontSize: 24,
  },
});
