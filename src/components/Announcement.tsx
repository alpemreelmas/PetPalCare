import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Announcement = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={'cover'}
        source={require('../assets/img/announcementBackground.jpg')}
        imageStyle={styles.img}>
        <View style={styles.context}>
          <View style={styles.contextLeft}>
            <Text style={styles.text}>Dog walking in your neighbor</Text>
            <Pressable style={styles.button}>
              <Text style={styles.btnTxt}>Book now</Text>
            </Pressable>
          </View>
          <Image
            resizeMode={'contain'}
            source={require('../assets/img/dogVector.png')}
            style={styles.dogVector}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  context: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    display: 'flex',
    flexDirection: 'row',
  },
  img: {
    borderRadius: 15,
  },
  text: {
    fontWeight: '900',
    fontSize: 22,
    color: 'black',
  },
  button: {
    backgroundColor: 'black',
    width: 90,
    padding: 5,
    height: 40,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: 'white',
  },
  contextLeft: {
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    gap: 20,
  },
  dogVector: {
    width: '50%',
    height: 200,
  },
});

export default Announcement;
