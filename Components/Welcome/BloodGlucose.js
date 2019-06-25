import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native'
import text from './text'
import { TextField } from 'react-native-material-textfield';
import { connect } from 'react-redux'
import styles from './Styles'
import { StackActions, NavigationActions } from 'react-navigation';
import AutoHeightImage from 'react-native-auto-height-image';
import guy from '../../Images/People/M_name.png'
import woman from '../../Images/People/W_name.png'
class Name extends React.Component {
  constructor(props) {
    super(props)
    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitMin = this.onSubmitMin.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.minRef = this.updateRef.bind(this, 'min');
    this.maxRef = this.updateRef.bind(this, 'max');
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
    ['min', 'max']
      .map((name) => ({ name, ref: this[name] }))
      .forEach(({ name, ref }) => {
        if (ref.isFocused()) {
          this.setState({ [name]: text });
        }
      });
  }
  onSubmitMin() { this.max.focus(); }


  onSubmit() {
    let errors = {};
    let toLow=false;
    let minV;
    let maxV;
    let checkMin=false;
    let checkMax=false;
    if(!this.min.value){
      checkMin=false;
      errors[min]='Sould not be empty'
    }
    else if (this.min.value<1){
      checkMin=false;
      errors[min]= 'Too low'
    }
    else {
      min = this.min.value
      checkMin=true;
    }

    if(!this.max.value){
      checkMax=false;
      errors[max]='Sould not be empty'
    }
    else if (this.max.value<1){
      checkMax=false;
      errors[max]= 'Too low'
    }
    else if(this.max.value<minV){
      checkMax=false;
      errors[max]= 'The max should be higher than min'
    }
    else{
      maxV = this.max.value
      checkMax=true;
    }


    if(checkMax&&checkMin){
      const action = { type: "TOGGLE_MIN", value: minV }
      //Send to the store the value and the type of action
      this.props.dispatch(action)
      const action2 = { type: "TOGGLE_MAX", value: maxV }
      //Send to the store the value and the type of action
      this.props.dispatch(action2)

      if (this.props.param.endInit) {
        this.props.navigation.navigate("Recap")
      } else {
        const action3 = { type: "TOGGLE_END", value: true }
        this.props.dispatch(action3)

        //AS it's the last action, we reset the stack in order to prevent user to go back
        this.props.navigation.dispatch(resetAction);
      }

    }


    // ['min', 'max']
    //   .forEach((name) => {
    //     let value = this[name].value();
    //
    //     if (!value) {
    //       errors[name] = 'Should not be empty';
    //     }
    //     else if (value < 1) {
    //       errors[name] = 'Too low';
    //       console.log("Inférieur a 1")
    //       toLow=true;
    //
    //     }
    //     else if(!toLow) {
    //       toLow=false;
    //       if (name === 'min') {
    //         min = value
    //         const action = { type: "TOGGLE_MIN", value: min }
    //         //Send to the store the value and the type of action
    //         this.props.dispatch(action)
    //       }
    //       else {
    //         console.log(min)
    //         console.log(value)
    //         if (min >= value) {
    //
    //           errors[name] = 'The max should be higher than min'
    //         } else {
    //           max = value
    //           const action2 = { type: "TOGGLE_MAX", value: max }
    //           //Send to the store the value and the type of action
    //           this.props.dispatch(action2)
    //
    //           if (this.props.param.endInit) {
    //             this.props.navigation.navigate("Recap")
    //           } else {
    //             const action3 = { type: "TOGGLE_END", value: true }
    //             this.props.dispatch(action3)
    //
    //             //AS it's the last action, we reset the stack in order to prevent user to go back
    //             this.props.navigation.dispatch(resetAction);
    //           }
    //         }
    //
    //       }
    //     }
    //   });



    this.setState({ errors });
  }

  updateRef(name, ref) {
    this[name] = ref;
  }



  render() {
    let { errors = {}, ...data } = this.state;
    let { min = 4, max = 10 } = data;
    return (
      <View style={[styles.main_container, { backgroundColor: this.props.param.color }]}>
        <ImageBackground source={require('../../Images/blue.png')} imageStyle={{ resizeMode: 'stretch' }} style={styles.img_bulle}>
          <View style={styles.bulle}>
            <Text style={styles.content}>{text.bg}</Text>


            <TextField
              keyboardType='numeric'
              ref={this.minRef}
              value={data.min}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitMin}
              returnKeyType='next'
              title='mmol/L'
              label='Min'
              error={errors.min}
            />

            <TextField
              keyboardType='numeric'
              ref={this.maxRef}
              value={data.max}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmit}
              returnKeyType='done'
              title='mmol/L'
              label='Max'
              error={errors.max}
            />

            <Button title='Ok' onPress={() => this.onSubmit()} />
          </View>
          <View style={styles.guy}>
            {this._displayDoctor()}
          </View>
        </ImageBackground>
      </View>
    )
  }

  //Action for the button OK
  _buttonClick() {
    let errors = {};

    if (nameText = "") {
      errors.name = 'Should not be empty'
    }
  }

  _displayDoctor() {
    if (this.props.param.sexe === "F") {
      return (
        <AutoHeightImage //In order that the NSE logo being adapt for every phone screen
          width={180}
          source={woman}
        />
      )
    }
    else {
      return (
        <AutoHeightImage //In order that the NSE logo being adapt for every phone screen
          width={215}
          source={guy}
        />
      )
    }
  }

}
const stylesP = StyleSheet.create({
  textInput: {
    flexDirection: 'row',
  }
})


//Mapping of store to props of the component
const mapStateToProps = (state) => {
  return {
    param: state.prefReducers,
    data: state.dataReducers
  }
}
//Constante for reset the stack
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Recap' })],
});

export default connect(mapStateToProps)(Name)
