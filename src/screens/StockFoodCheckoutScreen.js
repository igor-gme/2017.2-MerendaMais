import React from 'react';
import CheckBox from 'react-native-checkbox';
import PropTypes from 'prop-types';
import { StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../components/Header';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  principal: {
    flex: 1,
  },

  buttonContainer: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
  },

  content: {

    marginBottom: 9,
    flex: 6,
    flexDirection: 'column',
  },

  checkbox: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    flexWrap: 'wrap',
  },
  text: {
    flexDirection: 'row',
  },
  text2: {
    paddingTop: 15,
    flex: 1,
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 12,
    height: height * 0.25,
    paddingLeft: 10,
    fontSize: width * 0.05,
    textAlignVertical: 'top',
  },

  textBox: {
    paddingLeft: 10,
    paddingTop: 30,
    paddingRight: 10,
  },
});

export default class StockFoodCheckoutScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      observation: '',
    };
  }
  render() {
    return (
      <ScrollView style={styles.content}>
        <Header
          title={'Relatório'}
          subTitle={'Estoque de alimento'}
        />
        <View>
          {
            this.props.report.map(item => (
              <View style={styles.text}>
                <CheckBox
                  containerStyle={styles.checkbox}
                  key={item.key}
                  label=" "
                  onChange={() => this.props.setStockFoodReport(item.key)}
                />
                <Text style={styles.text2}>{item.label}</Text>
              </View>
            ),
            )
          }
        </View>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.textBox}>
            <TextInput
              onChangeText={text => this.setState({ observation: text })}
              style={styles.textInput}
              multiline
              underlineColorAndroid="transparent"
              placeholder="Observações (opcional)"
            />
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.setFoodStockObservation(this.state.observation)}
        >
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

StockFoodCheckoutScreen.propTypes = {
  setFoodStockObservation: PropTypes.func.isRequired,
  setStockFoodReport: PropTypes.func.isRequired,
  report: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    key: PropTypes.number,
  })).isRequired,
};
