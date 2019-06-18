// Components/Help.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Button, Image} from 'react-native'
import Modal from 'react-native-modal'
import Icon from "react-native-vector-icons/Entypo"

import h1 from '../../Images/Help/tutorial_homescreen.png'

class Help extends React.Component {
  static navigationOptions = {
    title: 'Help',
  }
  constructor(props){
    super(props)
      this._helpContent=this._helpContent.bind(this)
      this.state = {
         visibleModal: null,
       };
  }

/** Display the tutorial image */
  _helpContent(){
    return(
      <View>
      <Modal backdropColor={'rgba(0, 0, 0, 0.50)'} onRequestClose={() => {this.setState({ visibleModal: null})}} isVisible={this.state.visibleModal === 2} style={styles.bottomModal}>
        <TouchableOpacity style={{flex:1, justifyContent: 'flex-end', marginRight:10}} onPress={()=>this.setState({visibleModal:null})}>
          <Image source={h1}/>
        </TouchableOpacity>
      </Modal>
      </View>
    )
  }

    render() {
        return (
          <View style={styles.main_container}>
            <Icon name='help'  style={{ fontSize:25, marginRight: 15}}  onPress={ () => this._helpContent() }/>
          </View>
        )}

  }


  export default Help
