import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground, Image } from 'react-native'
import text from './text'
import { connect } from 'react-redux'
import styles from './Styles'
import AutoHeightImage from 'react-native-auto-height-image';
import guy from '../../Images/People/M_recap.png'
import woman from '../../Images/People/W_recap.png'
import { StackActions, NavigationActions } from 'react-navigation';

class Recap extends React.Component {
  constructor(props) {
    super(props)
    const sexe = ""

    if (this.props.param.sexe === "F") {
      this.sexe = "Woman"
    }
    else {
      this.sexe = "Man"
    }







  }


  render() {
    let tab = [];
    let data="";
    if (this.props.data.bg) {
      tab.push("Blood Glucose")
    }
    if (this.props.data.ins) {
    tab.push("Insulin")
    }
    if (this.props.data.wei) {
      tab.push("Weight")
    }
    if (this.props.data.med) {
    tab.push("Medication")
    }
    if (this.props.data.act) {
      tab.push("Activity")
    }
    if (this.props.data.car) {
      tab.push("Carbohydrates")
    }
    if (this.props.data.cal) {
      tab.push("Calories")
    }
    for(var i=0;i<tab.length;i++){
      data+=tab[i];
      if(i!=tab.length-1){
        data+=", "
      }
    }

    return (
      <View style={[styles.main_container, { backgroundColor: this.props.param.color }]}>
        <ImageBackground source={require('../../Images/blue.png')} imageStyle={{ resizeMode: 'stretch' }} style={styles.img_bulle}>
          <View style={styles.bulle}>
            <TouchableOpacity onPress={() => this._screenClick("Sexe")}>
              <Text style={stylesP.h2}>Sexe : {this.sexe}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._screenClick("Name")}>
              <Text style={stylesP.h2}>Name : {this.props.param.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._screenClick("Type")}>
              <Text style={stylesP.h2}>Type of diabetes : {this.props.param.type}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._screenClick("Color")}>
              <View style={stylesP.color_container}>
                <Text style={stylesP.h2}>Color :</Text>
                <View style={[styles.color, { backgroundColor: this.props.param.color }]}>
                  <Text>                      </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this._screenClick("Data")} style={{flexDirection: 'row'}}>
            <Text style={stylesP.h2}>Data : </Text>
            <Text style={styles.content}>{data}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this._screenClick("BloodGlucose")} style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={stylesP.h2}>Seuil : </Text>
            <Text style={stylesP.h2}>{this.props.param.min}</Text>
            <Text style={styles.content}> mmmol/L / </Text>
            <Text style={stylesP.h2}>{this.props.param.max}</Text>
            <Text style={styles.content}> mmol/L</Text>
            </TouchableOpacity>
            <Button title='Valider' onPress={() => this._buttonClick()} />
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
          width={180}
          source={woman}
        />
      )
    }
    else {
      return (
        <AutoHeightImage //In order that the NSE logo being adapt for every phone screen
          width={200}
          source={guy}
        />
      )
    }
  }

  _buttonClick = () => {

    this.props.navigation.navigate("MainComponent")
    //AS it's the last action, we reset the stack in order to prevent user to go back
    this.props.navigation.dispatch(resetAction);
  }
  _screenClick = (screen) => {
    this.props.navigation.navigate(screen)
  }




}
const stylesP = StyleSheet.create({
  h2: {
    fontSize: 20,
  },
  color: {
    marginLeft: 5,
    width: 40,
    height: 6,
  },
  color_container: {
    flexDirection: 'row'
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
  actions: [NavigationActions.navigate({ routeName: 'MainComponent' })],
});

export default connect(mapStateToProps)(Recap)
