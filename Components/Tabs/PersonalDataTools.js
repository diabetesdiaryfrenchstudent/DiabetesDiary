// Components/PersonalDataTools.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native'
import Modal from 'react-native-modal'
import { Divider, CheckBox } from 'react-native-elements'
import Header from '../Header/Header'
import styles from '../../Tools/Styles'

class PersonalDataTools extends React.Component {
  state = {
    visibleModal: null,
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity style={{flex:1}} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
        <Text> Design modals </Text>
        {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );


  render() {
      return (

        <View style={styles.main_container}>
          <Header name="Data Tools" nav={this.props.navigation}/>

          <ScrollView>
            <View style={styles.settingsBox}>
              <Text>   REGISTRATIONS</Text>
            </View>
          <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 1 })}>
              <Text>   Send registrations </Text>
            </TouchableOpacity>
          <Divider/>
            <View style={styles.settingsBox}>
              <Text>   DATABASE</Text>
            </View>
          <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 2 })}>
              <Text>   Send Database </Text>
            </TouchableOpacity>
          <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 3 })}>
              <Text>   Export </Text>
            </TouchableOpacity>
          <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 4 })}>
              <Text>   Import </Text>
            </TouchableOpacity>
          <Divider/>
            <View style={styles.settingsBox}>
              <Text>   DELETE</Text>
            </View>
          <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 5 })}>
              <Text>   Delete </Text>
            </TouchableOpacity>
          <Divider/>
            <View style={styles.settingsBox}>
              <Text>   DATA SHARING</Text>
            </View>
          <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 6 })}>
              <Text>   Data sharing </Text>
            </TouchableOpacity>
          <Divider/>
            <View style={styles.settingsBox}>
              <Text>   PARTICIPATE IN A RESEARCH PROJECT</Text>
            </View>
          <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 7 })}>
              <Text>   Participate in a research project </Text>
            </TouchableOpacity>
          <Divider/>
          </ScrollView>




        <Modal isVisible={this.state.visibleModal === 1} onRequestClose={() => {this.setState({ visibleModal: null})}}>
          <TouchableOpacity style={{flex:1, justifyContent: 'center', marginRight:10}} onPress={()=>this.setState({visibleModal:null})}>
            <View style={styles.modalContent}>
                <Text>Send registrations</Text>
                {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
            </View>
          </TouchableOpacity>
        </Modal>


        <Modal isVisible={this.state.visibleModal === 2} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <View style={styles.modalContentUnits}>
                <Text> Send database </Text>
                <View>{this._renderButton('Valider', () => this.setState({ visibleModal: null }))}</View>
            </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 3} onRequestClose={() => {this.setState({ visibleModal: null})}}>
              <View style={styles.modalContentUnits}>
              <Text> Export database </Text>
              <View>{this._renderButton('Valider', () => this.setState({ visibleModal: null }))}</View>
              </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 4} onRequestClose={() => {this.setState({ visibleModal: null})}}>
          <View style={styles.modalContentUnits}>
            <Text> Import database </Text>
            <View>{this._renderButton('Valider', () => this.setState({ visibleModal: null }))}</View>
          </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 5} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <View style={styles.modalContent}>
                <Text> Delete database</Text>
                {this._renderButton('Valider', () => this.setState({ visibleModal: null }))}
            </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 6} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <View style={styles.modalContent}>
                <Text>Share database</Text>
                {this._renderButton('Valider', () => this.setState({ visibleModal: null }))}
            </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 7} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <View style={styles.modalContent}>
                <Text>Participate</Text>
                {this._renderButton('Valider', () => this.setState({ visibleModal: null }))}
            </View>
        </Modal>


      </View>

      )
  }
}


export default PersonalDataTools
