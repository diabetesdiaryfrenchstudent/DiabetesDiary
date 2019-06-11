import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import text from './text'
import { connect } from 'react-redux'

class Sexe extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.bulle}>
          <Text style={styles.h2}>{text.hi}</Text>
          <Text style={styles.content}>{text.welcome}</Text>
          <View style={styles.button_container}>
            //Button to choose sex
            <TouchableOpacity style={styles.button} title='Man' onPress={() => this._Click("M")}>
              <Text style={styles.text_button}>Man</Text>
            </TouchableOpacity>
            //Button to choose sex
            <TouchableOpacity style={styles.button} title='Woman' onPress={() => this._Click("F")}>
              <Text style={styles.text_button}>Woman</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  //Action when user choose his sex
  _Click(sexe) {
    const action = { type: "TOGGLE_SEXE", value: sexe }
    //Send to the store the value and the type of action
    this.props.dispatch(action)

    //Check if the initialization is over
    if (this.props.param.endInit) {
      this.props.navigation.navigate("Recap")
    } else {
      this.props.navigation.navigate("Color")
    }

  }
}


const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#DDEAF2'
  },
  bulle: {

  },
  h2: {
    fontSize: 20,
  },
  content: {

  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: '#5057E1',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_button: {

    color: '#FFFFFF'
  }
})


//Mapping of store to props of the component
const mapStateToProps = (state) => {
  return {
    param: state
  }
}

export default connect(mapStateToProps)(Sexe)
