// Components/PersonalDataTools.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import Modal from 'react-native-modal'
import { Divider, CheckBox } from 'react-native-elements'
import Header from '../Header/Header'
import styles from '../../Tools/Styles'

class PersonalDataTools extends React.Component {
  state = {
    visibleModal: null,
    PrivacyWarn: true,
    text: null,
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

  _privacyWarning = () => {
    if (this.PrivacyWarn){
      this.setState({ visibleModal: 1 })
    }
  }

  render() {
      return (

        <View style={styles.main_container}>
          <Header name="Data Tools" nav={this.props.navigation}/>

          <ScrollView>
          <Text style={styles.SubTitles}> REGISTRATIONS</Text>
          <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => {console.log('Display Privacy Warning'), console.log('Open a device tab to share data')}} >
              <Text style={{paddingLeft: 8}}> Send regitrations </Text>
              <Text style={styles.TextInfos}> Send your registrations by email (CSV format, can be imported into Excel).</Text>
            </TouchableOpacity>
          <Divider/>
          <Text style={styles.SubTitles}> DATABASE</Text>
          <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => {console.log('Display Privacy Warning'), console.log('Open a device tab to share data')}}>
              <Text style={{paddingLeft: 8}}> Send database </Text>
              <Text style={styles.TextInfos}> Send the database file by email (external backup, transfer to new phone).</Text>
            </TouchableOpacity>
          <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => {console.log('Export the data'), this.setState({ visibleModal: 2 })}}>
              <Text style={{paddingLeft: 8}}> Export </Text>
              <Text style={styles.TextInfos}> Export the database to the phone's SD-card (for backup and restoring later, or copying to PC via USB cable).</Text>
            </TouchableOpacity>
          <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 3 })}>
            <Text style={{paddingLeft: 8}}> Import </Text>
            <Text style={styles.TextInfos}> Import a database from the phone's SD-card (e.g. restore from a previous backup).</Text>
            </TouchableOpacity>
          <Divider/>
          <Text style={styles.SubTitles}> DELETE</Text>
          <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 4 })}>
            <Text style={{paddingLeft: 8}}> Delete </Text>
            <Text style={styles.TextInfos}> Delete the database (NB! Cannot be undone!).</Text>
            </TouchableOpacity>
          <Divider/>
          <Text style={styles.SubTitles}> DATA SHARING</Text>
          <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 5 })}>
            <Text style={{paddingLeft: 8}}> Data sharing </Text>
            <Text style={styles.TextInfos}> Manage applications which have access to your data.</Text>
            </TouchableOpacity>
          <Divider/>
          <Text style={styles.SubTitles}> PARTICIPATE IN A RESEARCH PROJECT</Text>
          <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 6 })}>
            <Text style={{paddingLeft: 8}}> Participate in a research project </Text>
            <Text style={styles.TextInfos}> If you have a code for participating in a research project, enter it here.</Text>
            </TouchableOpacity>
          <Divider/>
          </ScrollView>




          <Modal isVisible={this.state.visibleModal === 1} onRequestClose={() => {this.setState({ visibleModal: null})}}>
              <View style={styles.modalContent}>
                  <Text style={styles.smallTitles}> Privacy warning </Text>
                  <Text>Please note that you are now sending personal health data. If you send them over email, there is a risk that the data might be read by someone else than the intended recipient.</Text>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <CheckBox checked={this.state.PrivacyWarn} onPress={() => this.setState({PrivacyWarn: !this.state.PrivacyWarn})}/>
                    <Text style={styles.TextInfos}> Don't show again</Text>
                  </View>
                  <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> Ok </Text>
              </View>
          </Modal>


          <Modal isVisible={this.state.visibleModal === 2} onRequestClose={() => {this.setState({ visibleModal: null})}}>
              <View style={styles.modalContent}>
                  <Text style={styles.smallTitles}> Data export to SD-card was successful </Text>
                  <Text>The file can be found here: ...</Text>
                  <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> Ok </Text>
              </View>
          </Modal>

        <Modal isVisible={this.state.visibleModal === 3} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <View style={styles.modalContentUnits}>
              <Text style={styles.smallTitles}> Export database </Text>
              <Text> Would you like to delete your current data and import this database? ....</Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> NO </Text>
                <Text style={styles.TextTouch} onPress={() => {this.setState({ visibleModal: 2 }),console.log('Delete and Import new')}}> YES </Text>
              </View>
            </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 4} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <View style={styles.modalContent}>
                <Text style={styles.smallTitles}> Delete database </Text>
                <Text>Are you sure you want to delete the whole database?</Text>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> NO </Text>
                  <Text style={styles.TextTouch} onPress={() => {console.log('Delete the database'), this.setState({ visibleModal: null })}}> YES </Text>
                </View>
            </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 5} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <View style={styles.modalContent}>
                <Text> ?</Text>
                <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> Ok </Text>
            </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 6} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <View style={styles.modalContent}>
                <Text style={styles.smallTitles}> Research project </Text>
                <Text>Please enter your code</Text>
                <TextInput style={{height: 40, borderColor: 'gray'}} onChangeText={(text) => this.setState({text})} value={this.state.text} />
                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> CANCEL </Text>
                  <Text style={styles.TextTouch} onPress={() => {console.log('Validate research participation'), this.setState({ visibleModal: null })}}> VALIDATE </Text>
                </View>
            </View>
        </Modal>


      </View>

      )
  }
}


export default PersonalDataTools
