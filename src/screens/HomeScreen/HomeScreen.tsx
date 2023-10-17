import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {BellIcon} from 'react-native-heroicons/outline';

const HomeScreen = () => {

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          source={require('../../assets/img/logo.png')}
          style={styles.logo}
        />
        <View style={styles.profile}>
          <BellIcon color={'black'} size={26} />
          <Image
            source={require('../../assets/img/profilePic.jpg')}
            style={styles.profilePic}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    display: 'flex',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 20,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginRight: 20,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 75,
  },
});

export default HomeScreen;
