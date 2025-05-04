import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const windowWidth = Dimensions.get('window').width;
const horizontalMargin = 15;

interface HeartCardProps {
  imageSource: any;
  navigateTo?: keyof RootStackParamList;
}

const HeartCard = ({ imageSource, navigateTo }: HeartCardProps) => {
  const [calculatedHeight, setCalculatedHeight] = useState<number>(200); 

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const { uri } = Image.resolveAssetSource(imageSource);
    Image.getSize(
      uri,
      (width, height) => {
        const ratio = height / width;
        const scaledHeight = (windowWidth - horizontalMargin * 2) * ratio * 2.5;
        setCalculatedHeight(scaledHeight);
      },
      (error) => {
        console.warn('이미지 크기 불러오기 실패:', error);
      }
    );
  }, [imageSource]);

  return (
    <TouchableOpacity
      style={[styles.card, { height: calculatedHeight }]}
      onPress={() => navigation.navigate(navigateTo)}
      activeOpacity={0.8}
    >
      <Image source={imageSource} style={styles.image} resizeMode="stretch" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: windowWidth - horizontalMargin * 2,
    marginHorizontal: horizontalMargin,
    marginVertical: '1.5%',
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
    height: '100%',
  },
});

export default HeartCard;
