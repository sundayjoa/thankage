import React , { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Feather, FontAwesome } from '@expo/vector-icons';

type HeaderProps = {
    isLoggedIn: boolean;
    heartCount?: number;
}

const Header = ({ isLoggedIn, heartCount = 0 }: HeaderProps) => {
    return (
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
    
          <View style={styles.rightGroup}>
            <View style={styles.iconWithText}>
              <Image
                source={require('../../assets/images/heart.png')}
                style={styles.icon}
              />
              {isLoggedIn && (
                <Text style={styles.heartText}>{heartCount.toFixed(1)}</Text>
              )}
            </View>
    
            <FontAwesome name="qrcode" size={22} color="#333" style={styles.iconGap} />
            <Feather name="search" size={22} color="#333" style={styles.iconGap} />
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      height: '10%',
      width: '100%',
      top: 0,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: 'white',
    },
    logo: {
      width: 120,
      height: 40,
      resizeMode: 'contain',
    },
    rightGroup: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconWithText: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 12,
    },
    heartText: {
      fontSize: 14,
      marginLeft: 4,
      color: '#333',
    },
    icon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
    iconGap: {
      marginLeft: 16,
    },
});

export default Header;

