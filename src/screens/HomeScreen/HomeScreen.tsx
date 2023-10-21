import React from 'react';
import {SafeAreaView} from 'react-native';
import Announcement from '../../components/Announcement';
import PetCard from "../../components/PetCard";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Announcement />
      <PetCard />
    </SafeAreaView>
  );
};

export default HomeScreen;
