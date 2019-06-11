import React from 'react'
import {StyleSheet, View,Text,Button,TouchableOpacity,TextInput} from 'react-native'
import text from './text'
import { connect } from 'react-redux'

class Name extends React.Component{
  constructor(props){
    super(props)
    nameText="";
  }


  //Method which update at each new input the name.
  _nameTextInputChanged(text){
    this.nameText=text
  }


  render(){
    return(
      <View style={styles.main_container}>
      <View style={styles.bulle}>
        <Text style={styles.content}>{text.name}</Text>
        <TextInput
          style={styles.textinput}
          placeholder='Name'
          onChangeText={(text)=>this._nameTextInputChanged(text)}
          onSubmitEditing={() => this._buttonClick()}//Possibility to click on OK on the keyboard
        />
        <Button title='Ok' onPress={() => this._buttonClick()}/>
      </View>
      </View>
    )
  }

  //Action for the button OK
  _buttonClick(){
    const action = {type: "TOGGLE_NAME", value: this.nameText}
    //Send to the store the value and the type of action
    this.props.dispatch(action)

    //Check if the initialization is over
    if(this.props.param.endInit){
      this.props.navigation.navigate("Recap")
    }else{
      this.props.navigation.navigate("Type")
    }
  }

}
const styles = StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor:'#DDEAF2'
  },
  bulle:{

  },
  h2:{
    fontSize:20,
  },
  content:{

  },
  button_container:{
    flexDirection:'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  button:{
    width: 100,
    height: 50,
    backgroundColor: '#5057E1',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_button :{

    color: '#FFFFFF'
  }
})


//Mapping of store to props of the component
const mapStateToProps = (state) => {
  return {
    param: state
  }
}

export default connect(mapStateToProps)(Name)
