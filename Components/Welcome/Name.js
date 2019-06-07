import React from 'react'
import {StyleSheet, View,Text,Button,TouchableOpacity,TextInput} from 'react-native'
import text from './text'
import { connect } from 'react-redux'

class Name extends React.Component{
  constructor(props){
    super(props)
    searchedText="";
  }

  _searchTextInputChanged(text){
    this.searchedText=text
  }
  render(){
    return(
      <View style={styles.main_container}>
      <View style={styles.bulle}>
        <Text style={styles.content}>{text.name}</Text>
        <TextInput
          style={styles.textinput}
          placeholder='Name'
          onChangeText={(text)=>this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._buttonClick()}
        />
        <Button title='Ok' onPress={() => this._buttonClick()}/>
      </View>
      </View>
    )
  }

  _buttonClick(){
    const action = {type: "TOGGLE_NAME", value: this.searchedText}
    this.props.dispatch(action)
    this.props.navigation.navigate("Type")
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

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

export default connect(mapDispatchToProps)(Name)
