import React from 'react';
import {Text, ScrollView, View, TextInput, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { asyncCreateCounselor } from '../actions/counselorActions';

class RegisterScreen extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      cpf: '',
      email:'',
      phone: '',
      first_name: '',
    }
  }

  saveRegister() {
     console.log(this.state.cpf);
     console.log(this.state.first_name);
     console.log(this.state.email);
     console.log(this.state.phone);
  }

  render() {
  return (

    <ScrollView>

      <View style={styles.principal}>
        <View style={styles.topo}>
            <Text style={styles.textLogo}>Merenda +</Text>
        </View>
      </View>

      <Text style={styles.container}> </Text>

      <Text style={styles.container}>     CPF</Text>
      <TextInput
        placeholder = "Digite o seu CPF"
        placeholderTextColor = '#95a5a6'
        style={styles.InputInfo}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({cpf:text})}
      />
      <Text style={styles.container}>     Nome</Text>
      <TextInput
        placeholder = "Digite o seu nome completo"
        placeholderTextColor = '#95a5a6'
        style={styles.InputInfo}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({first_name:text})}
      />
      <Text style={styles.container}>     Email</Text>
      <TextInput
        placeholder = "Digite o seu email"
        placeholderTextColor = '#95a5a6'
        style={styles.InputInfo}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({email:text})}
      />
      <Text style={styles.container}>     Telefone</Text>
      <TextInput
        placeholder = "Digite o seu telefone"
        placeholderTextColor = '#95a5a6'
        style={styles.InputInfo}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({phone:text})}
      />

      <TouchableOpacity  onPress={() => this.props.createUser(this.state)}
        style= {styles.buttonContainer}>
        <Text style={styles.buttonText}>Concluir</Text>
      </TouchableOpacity>

      <View style={styles.rodape}>
        <TouchableOpacity
          activeOpacity = {0.6}
        >
        <Text>Já tem um cadastro?
          <Text style={{color: 'blue'}}> Entrar</Text>
        </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
  }
}

const mapStateToProps = (state) => {
    return{
        counselor: state.counselor

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createUser(userData){
            dispatch(asyncCreateCounselor(userData));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

const styles = {
principal: {
      flex: 1
  },

topo: {
      flex: 1.2,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#FF9500',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowRadius: 6,
      justifyContent: 'center',
      alignItems: 'center'

  },

textLogo: {
      fontSize: 35,
      color:'white',
      fontWeight:'bold',
      marginTop:10
  },

rodape: {
       flex: 0.7,
       borderTopColor: '#a9a9a9',
       borderTopWidth: 1,
       justifyContent: 'center',
       alignItems: 'center',
       padding: 10
   },

InputInfo: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginBottom: 10
},

buttonContainer: {
    paddingVertical:10,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#FF9500'
},

buttonText:{
  textAlign: 'center',
  color: '#FFF'
}

};
