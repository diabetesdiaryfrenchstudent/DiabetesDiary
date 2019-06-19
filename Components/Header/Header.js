// Components/Header/Header.js

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import {Header} from 'react-native-elements'
import AutoHeightImage from 'react-native-auto-height-image';

import Icon from "react-native-vector-icons/Entypo"
import styles from '../../Tools/Styles'
import h1 from '../../Images/Help/tutorial_homescreen.png'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visibleModal: null,
    };
  }

/** Display modal with help tutorial images adapting to each tab*/
  _renderModalContent = () => (
   <View style={styles.modalContent, {flex:1}}>
     <TouchableOpacity style={{flex:1, alignItems: 'center', justifyContent: 'center'}} onPress={()=>this.setState({visibleModal:null})}>
     <AutoHeightImage width={Dimensions.get('window').width} source={h1}/>
     </TouchableOpacity>
   </View>
 );


  render() {
    const {name,nav}=this.props

    return (
      <View>
        <Header
          leftComponent={<Icon name='menu' style={{ fontSize:30, marginLeft: 15}} onPress={()=>nav.openDrawer()}/> }
          centerComponent={<Text> {name}</Text>}
          rightComponent={<Icon name='help' style={{ fontSize:25, marginRight: 15}} onPress={()=> this.setState({ visibleModal: 1 })}/>}
        />

        <Modal isVisible={this.state.visibleModal === 1} onRequestClose={() => {this.setState({ visibleModal: null})}}>
          {this._renderModalContent()}
        </Modal>
      </View>

    );
  }
}
