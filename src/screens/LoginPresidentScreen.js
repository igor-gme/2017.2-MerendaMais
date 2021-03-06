import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const iconAccount = require('../images/account_circle.png');
const iconLock = require('../images/ic_lock.png');

const styles = StyleSheet.create({
  principal: {
    flex: 1,
  },
  content: {
    flex: 6,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

  },
  footer: {
    flex: 0.7,
    borderTopColor: '#a9a9a9',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    margin: 5,
  },
  InputCPF: {
    paddingLeft: 2,
    paddingRight: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 7,
  },
  InputPassword: {
    paddingLeft: 2,
    paddingRight: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    borderColor: 'gray',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 7,
  },
  buttonLogin: {
    paddingHorizontal: 133,
    paddingVertical: 18,
    marginTop: 50,
    marginBottom: 0,
    backgroundColor: '#FF9500',
    borderRadius: 8,
    borderWidth: 1,
  },

});

export default class LoginPresidentScreen extends React.Component {
  asyncLoginCounselor() {
    const CPF = this.props.cpf;
    const password = this.props.password;
    const userData = {
      username: CPF,
      password,
    };
    this.props.asyncLoginCounselor(userData);
  }

  renderBtnLogin() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#FF9500" />
      );
    }
    return (
      <TouchableOpacity
        style={styles.buttonLogin}
        activeOpacity={0.7}
        onPress={() => this.asyncLoginCounselor()}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>Entrar</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.principal}>
        <Header />
        <View style={styles.content}>
          <View style={styles.InputCPF}>
            <Image source={iconAccount} style={styles.icon} />
            <TextInput
              style={styles.styleInput}
              width={280}
              returnKeyType="next"
              onChangeText={CPF => this.props.modifyCPF(CPF)}
              maxLength={11}
              value={this.props.cpf}
              underlineColorAndroid="transparent"
              placeholder="CPF"
              onSubmitEditing={() => this.passwordInput.focus()}
            />
          </View>

          <View style={styles.InputPassword}>
            <Image source={iconLock} style={styles.icon} />
            <TextInput
              style={styles.styleInput}
              width={280}
              underlineColorAndroid="transparent"
              returnKeyType="go"
              secureTextEntry
              onChangeText={password => this.props.modifyPassword(password)}
              value={this.props.password}
              placeholder="Senha"
              ref={input => this.passwordInput === input}
            />
          </View>

          {this.renderBtnLogin()}

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => Actions.loginCounselorScreen()}
          >
            <Text style={{ marginTop: 30 }}>É um conselheiro?
              <Text style={{ color: 'blue' }}>Clique aqui</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => Actions.registerScreen()}
          >
            <Text>Ainda não se cadastrou?
              <Text style={{ color: 'blue' }}> Cadastrar-se</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

LoginPresidentScreen.propTypes = {
  modifyCPF: PropTypes.func.isRequired,
  modifyPassword: PropTypes.func.isRequired,
  asyncLoginCounselor: PropTypes.func.isRequired,
  cpf: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
