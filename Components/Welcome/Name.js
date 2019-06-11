import React from 'react'
import {StyleSheet, View,Text,Button,TouchableOpacity,TextInput} from 'react-native'
import text from './text'
import { TextField } from 'react-native-material-textfield';
import { connect } from 'react-redux'
import styles from './Styles'

class Name extends React.Component{
  constructor(props){
    super(props)
      this.onFocus = this.onFocus.bind(this);
      console.log("ICI")
      this.onSubmit = this.onSubmit.bind(this);
      this.onChangeText = this.onChangeText.bind(this);
      this.firstnameRef = this.updateRef.bind(this, 'firstname')
      this.state = {
      };
    }

    onFocus() {
      let { errors = {} } = this.state;

      for (let name in errors) {
        let ref = this[name];

        if (ref && ref.isFocused()) {
          delete errors[name];
        }
      }

      this.setState({ errors });
    }

    onChangeText(text) {
      ['firstname']
        .map((name) => ({ name, ref: this[name] }))
        .forEach(({ name, ref }) => {
          if (ref.isFocused()) {
            this.setState({ [name]: text });
          }
        });
    }

    onSubmit() {
      let errors = {};

      ['firstname']
        .forEach((name) => {
          let value = this[name].value();

          if (!value) {
            errors[name] = 'Should not be empty';
          }else{
          const action = {type: "TOGGLE_NAME", value: value}
          //Send to the store the value and the type of action
          this.props.dispatch(action)

          //Check if the initialization is over
          if(this.props.param.endInit){
            this.props.navigation.navigate("Recap")
          }else{
            this.props.navigation.navigate("Type")
          }
        }
        });

      this.setState({ errors });
    }

    updateRef(name, ref) {
      this[name] = ref;
    }



  render(){
    let { errors = {}, ...data } = this.state;
    let { firstname = 'name'} = data;
    return(
      <View style={styles.main_container}>
      <View style={styles.bulle}>
        <Text style={styles.content}>{text.name}</Text>
        <TextField
              ref={this.firstnameRef}
              value={data.firstname}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmit}
              returnKeyType='next'
              label='First Name'
              error={errors.firstname}
            />
        <Button title='Ok' onPress={() => this.onSubmit()}/>
      </View>
      </View>
    )
  }

  //Action for the button OK
  _buttonClick(){
    let errors={};

    if(nameText=""){
      errors.name='Should not be empty'
    }
}

}
const stylesP = StyleSheet.create({

})


//Mapping of store to props of the component
const mapStateToProps = (state) => {
  return {
    param: state
  }
}

export default connect(mapStateToProps)(Name)
