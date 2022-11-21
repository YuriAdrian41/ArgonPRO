import { StyleSheet, View } from 'react-native';

const CustomDrawerContent = ({ drawerPosition, navigation, profile, focused, state, ...rest }) => {
  return (
    <View style={styles.container}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CustomDrawerContent;