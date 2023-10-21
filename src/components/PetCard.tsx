import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SimpleGrid} from 'react-native-super-grid';

const PetCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.outline}>
          <Image
            source={require('../assets/img/dogPicture.jpg')}
            style={styles.dogPic}
          />
        </View>
      </View>
      <View style={styles.right}>
        <SimpleGrid
          data={[1, 2, 3, 4]}
          listKey={'t'}
          renderItem={({item}) => <View style={{backgroundColor: '#06465e'}}><Text>60%</Text></View>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: 'black',
    height: 120,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 15,
  },
  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
  },
  outline: {
    borderColor: 'yellow',
    borderWidth: 3,
    borderRadius: 50,
    padding: 2,
  },
  right: {
    width: '70%',
  },
  dogPic: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});

export default PetCard;
