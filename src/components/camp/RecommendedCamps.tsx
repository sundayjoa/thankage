// src/components/RecommendedCamps.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { useCampStore } from '../../store/useCampStore';
import { sampleCamps, SampleCamp } from '../../data/sampleCamps';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const RecommendedCamps = () => {
  const { setInitial, getRandom10 } = useCampStore();
  const [randomCamps, setRandomCamps] = useState<SampleCamp[]>([]);

  useEffect(() => {
    setInitial(sampleCamps); // 초기 데이터 등록
    setRandomCamps(getRandom10());
  }, []);

  const handleRefresh = () => {
    setRandomCamps(getRandom10());
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>이런 캠프는 어떠세요?</Text>
        <TouchableOpacity onPress={handleRefresh}>
          <Text style={styles.refresh}>⟳</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={randomCamps}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode="stretch" />
            <View style={styles.textArea}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 5,
  },
  refresh: {
    fontSize: 20,
    marginTop: -5,
  },
  card: {
    width: windowWidth,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 4,
    padding: 3,
  },
  image: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.14,
    borderRadius: 8,
    marginRight: 12,
  },
  textArea: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
  },
  desc: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
    fontWeight: 'bold',
  },
});

export default RecommendedCamps;
