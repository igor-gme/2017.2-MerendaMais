import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, Dimensions, Image } from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');
const BackIcon = require('../images/ic_keyboard_arrow_left_48pt.png');

const styles = StyleSheet.create(
  {
    button: {
      color: 'black',
      fontSize: 30,
      marginLeft: 30,
    },
    buttonWrapper: {
    },
    wrapper: {
      height: 100,
      flexDirection: 'row',
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#FF9500',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      alignItems: 'center',
    },
    textLogo: {
      // Font size 30 looks nice on 360 width phone.
      // (x * widthYourPhone = fontSize) where x is the proportion used in fontSize above.
      fontSize: width * 0.08,
      color: 'white',
      fontWeight: 'bold',
      marginTop: 10,
    },

    textSubTitle: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    },

    textWrapper: {
      flexDirection: 'column',
      alignItems: 'center',
      flex: 1,
    },
  },
);

const Header = props => (
  <View style={styles.wrapper}>
    {props.backButton && (
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={() => Alert.alert('clicar')} >
          <Image source={BackIcon} />
        </TouchableOpacity>
      </View>
    )}
    <View style={styles.textWrapper}>
      <Text style={styles.textLogo}>{props.title}</Text>
      <Text style={styles.textSubTitle}>{props.subTitle}</Text>
    </View>
  </View>
);
Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  backButton: PropTypes.string,
};
Header.defaultProps = {
  title: 'Merenda +',
  subTitle: '',
  backButton: null,
};
export default Header;
