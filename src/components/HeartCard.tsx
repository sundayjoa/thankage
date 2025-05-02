// src/components/HeartCard.tsx
import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const horizontalMargin = 20;

interface HeartCardProps {
  imageSource: any;
  navigateTo: string;
}

const HeartCard = ({ imageSource, navigateTo }: HeartCardProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(navigateTo as never)}
      activeOpacity={0.8}
    >
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: windowWidth - horizontalMargin * 2,
    marginHorizontal: horizontalMargin,
    marginVertical: 12,
    borderRadius: 12,
    overflow: 'hidden',

    // iOS 전용 그림자
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    // Android 전용 그림자
    elevation: 4, 
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
  },
});

export default HeartCard;
