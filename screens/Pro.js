import { ImageBackground, StyleSheet, Image, Text, View, Pressable } from 'react-native';
import { Images } from "./../constants";

const Pro = props => {
  const { navigation } = props;

  return (
    <ImageBackground source={Images.Background} resizeMode="cover" style={styles.imgBg}>
      <Image source={Images.Logo} style={styles.logo} />
      <View style={styles.title}>
        <Text style={styles.tile}>Argon Design System</Text>
        <Text style={styles.pro}>PRO</Text>
      </View>
      <Text style={styles.description}>Take advantage of all the features and screens made upon Galio Design System, coded on React Native for both.</Text>
      <View style={styles.device}>
        <Image source={Images.Ios} style={styles.ios} />
        <Image source={Images.Android} style={styles.android} />
      </View>
      <Pressable style={styles.getProBtn} onPress={() => navigation.navigate('App')}>
        <Text style={styles.getPro}>GET PRO VERSION</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
    paddingVertical: 74,
    paddingHorizontal: 26,
  },
  logo: {
    marginTop: 118,
    marginLeft: 11,
    width: 46,
    height: 43,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 28.6,
    maxHeight: 183,
    paddingLeft: 11,
  },
  tile: {
    color: 'white',
    fontFamily: 'OpenSans_400Regular',
    fontSize: 55,
    lineHeight: 61,
    maxWidth: 186,
  },
  pro: {
    backgroundColor: '#11CDEF',
    borderRadius: 4,
    boxShadow: '0 1px 3px rgba(0, 0, 0, .08), 0 4px 6px rgba(50, 50, 93, .1)',
    color: 'white',
    fontFamily: 'OpenSans_700Bold',
    fontSize: 14,
    lineHeight: 19,
    marginBottom: 34,
    marginLeft: 11,
    minWidth: 42,
    minHeight: 24,
    paddingTop: 1.5,
    textAlign: 'center',
  },
  description: {
    color: 'white',
    fontFamily: 'OpenSans_400Regular',
    fontSize: 16,
    lineHeight: 23,
    paddingTop: 34,
    paddingRight: 8,
    paddingLeft: 13,
  },
  device: {
    flexDirection: 'row',
    paddingTop: 25,
  },
  ios: {
    width: 103,
    height: 68,
  },
  android: {
    marginLeft: 8,
    width: 142,
    height: 71,
  },
  getProBtn: {
    backgroundColor: '#11CDEF',
    borderRadius: 4,
    marginTop: 62,
    marginHorizontal: 6,
    paddingVertical: 12,
  },
  getPro: {
    color: 'white',
    fontFamily: 'OpenSans_700Bold',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
});

export default Pro;
