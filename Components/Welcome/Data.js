import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground, Image } from 'react-native'
import text from './text'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation';
import styles from './Styles'
import AutoHeightImage from 'react-native-auto-height-image';
import guy from '../../Images/People/M_sexe.png'
import woman from '../../Images/People/W_sexe.png'
import CheckBox from './CheckBox'
import Modal from 'react-native-modal';


class Data extends React.Component {
  constructor(props){
    super(props)
    this.state={

        bg:this.props.data.bg,
        ins:this.props.data.ins,
        wei:this.props.data.wei,
        med:this.props.data.med,
        act:this.props.data.act,
        car:this.props.data.car,
        cal:this.props.data.cal,

    }
    this.falseBegin=true;
    if(!this.state.bg){
      this.falseBegin=true
    }
    else{
      this.falseBegin=false
    }

  }
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={stylesP.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  _renderModalContent = () => (
    <View style={stylesP.modalContent}>
      <Text>You cannot monitor both calories and carbs</Text>
      {this._renderButton('Ok', () => this.setState({ visibleModal: null }))}
    </View>
  );

  _changeCheckBox_bg=()=>{
    this.setState({bg: !this.state.bg})
  }

  _changeCheckBox_ins=()=>{
    this.setState({ins: !this.state.ins})
  }
  _changeCheckBox_wei=()=>{
    this.setState({wei: !this.state.wei})
  }
  _changeCheckBox_med=()=>{
    this.setState({med: !this.state.med})
  }
  _changeCheckBox_act=()=>{
    this.setState({act: !this.state.act})
  }
  _changeCheckBox_car=()=>{
    if(this.state.cal){
      this.setState({cal: !this.state.cal})
      this.setState({ visibleModal: 1 })
    }
    this.setState({car: !this.state.car})
  }
  _changeCheckBox_cal=()=>{
    if(this.state.car){
      this.setState({car: !this.state.car})
        this.setState({ visibleModal: 1 })
    }
    this.setState({cal: !this.state.cal})
  }
  render() {
    return (
      <View style={[styles.main_container, { backgroundColor: this.props.param.color }]}>
        <ImageBackground source={require('../../Images/blue.png')} imageStyle={{ resizeMode: 'stretch' }} style={styles.img_bulle}>
        <Modal isVisible={this.state.visibleModal === 1} onRequestClose={() => {this.setState({ visibleModal: null})}}>
          {this._renderModalContent()}
        </Modal>
          <View style={styles.bulle}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <CheckBox
                selected={this.state.bg}
                  onPress={this._changeCheckBox_bg}
                  text='Blood glucose'
                />
                <CheckBox
                selected={this.state.ins}
                  onPress={this._changeCheckBox_ins}
                  text='Insuline'
                />
                <CheckBox
                selected={this.state.wei}
                  onPress={this._changeCheckBox_wei}
                  text='Weight'
                />
                <CheckBox
                selected={this.state.med}
                  onPress={this._changeCheckBox_med}
                  text='Medication'
                />

              </View>

              <View>
              <CheckBox
              selected={this.state.act}
                onPress={this._changeCheckBox_act}
                text='Activity'
              />
              <CheckBox
              selected={this.state.car}
                onPress={this._changeCheckBox_car}
                text='Carbohydrates'
              />
              <CheckBox
              selected={this.state.cal}
                onPress={this._changeCheckBox_cal}
                text='Calories'
              />
              </View>



            </View>
            <Button title='Ok' onPress={() => this._Click()}/>
          </View>
          <View style={styles.guy}>
            {this._displayDoctor()}
          </View>
        </ImageBackground>
      </View>
    )
  }


  _displayDoctor() {
    if (this.props.param.sexe === "F") {
      return (
        <AutoHeightImage //In order that the NSE logo being adapt for every phone screen
          width={175}
          source={woman}
        />
      )
    }
    else {
      return (
        <AutoHeightImage //In order that the NSE logo being adapt for every phone screen
          width={225}
          source={guy}
        />
      )
    }
  }

  //Action when user choose his sex
  _Click() {
    const action1= { type: "TOGGLE_BG", value: this.state.bg }
    this.props.dispatch(action1)
    const action2 = { type: "TOGGLE_INS", value: this.state.ins }
    this.props.dispatch(action2)
    const action3 = { type: "TOGGLE_WEI", value: this.state.wei }
    this.props.dispatch(action3)
    const action4 = { type: "TOGGLE_MED", value: this.state.med }
    this.props.dispatch(action4)
    const action5 = { type: "TOGGLE_ACT", value: this.state.act }
    this.props.dispatch(action5)
    const action6 = { type: "TOGGLE_CAR", value: this.state.car }
    this.props.dispatch(action6)
    const action7 = { type: "TOGGLE_CAL", value: this.state.cal }
    this.props.dispatch(action7)

    if((this.state.bg&&this.falseBegin)||(this.state.bg&&!this.props.param.endInit)){
      this.props.navigation.navigate("BloodGlucose")
    }else{
      console.log(this.falseBegin)
      const action8 = {type :"TOGGLE_END", value:true}
      this.props.dispatch(action8)
      //AS it's the last action, we reset the stack in order to prevent user to go back
      this.props.navigation.dispatch(resetAction);
    }

  }
}


const stylesP = StyleSheet.create({
  h2: {
    fontSize: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

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


export default connect(mapStateToProps)(Data)
