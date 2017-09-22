import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'
import { asyncGetCounselor } from '../actions/counselorActions';
import { connect } from 'react-redux';

class ListOfCounselor extends React.Component {
    render() {
        return (
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Nome: {this.props.counselor.first_name}</Text>
            <Text>cpf: {this.props.counselor.cpf}</Text>
            <Text>telefone: {this.props.counselor.telefone}</Text>
            <Text>email: {this.props.counselor.email}</Text>
            <Text>url: {this.props.counselor.url}</Text>
            <Text>id: {this.props.counselor.id}</Text>
            <TouchableOpacity  onPress={() => this.props.getCounselor(6)}>
            <Text>CLICA NESSA PORRA</Text>
            </TouchableOpacity>
            </View>
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
        getCounselor(id){
            dispatch(asyncGetCounselor(id));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfCounselor);
