// Components/About.js

import React from 'react'
import {View, ScrollView, StyleSheet, Text, Image, TouchableOpacity, Linking} from 'react-native'
import Header from './Header/Header'
import styles from '../Tools/Styles'
import NSEImage from '../Images/NSEImage.png'

class About extends React.Component {
  static navigationOptions = {
    title: 'About Diabetes Diary',
  }

  render() {

      return (
        <View style={styles.main_container}>
          <Header name="Settings" nav={this.props.navigation}/>
        <View style={{flex:2, margin: 5}}>

            <Text style={styles.TextTitle}>Your own responsibility</Text>
            <Text style={styles.TextBody}>Diabetes Diary is an app developed to help people with diabetes to manage their disease better. Please keep in mind that you still have the responsibility for your own decisions about how to use the application, and how to manage your diabetes.</Text>

            <Text style={styles.TextTitle}>Data storage</Text>
            <Text style={styles.TextBody}>Please note that Diabetes Diary stores the information you enter about your health and habits, information that you might want to keep private. It is possible to protect the information, for example by locking the device with a pattern or a code. Normally, the database with data entries is stored where it can be accessed only by Diabetes Diary. However, if you choose to use the feature for exporting or sending the database, other applications may also be able to read the database.{'\n'}{'\n'}The Norwegian Centre for E-health Researchhopes you will find the app useful, and that it helps you with managing your diabetes.</Text>

          </View>

          <View style={{flex:1}}>
            <Image source={NSEImage}  style={{flex:1, height: undefined, width: undefined}}  resizeMode='contain' />
          </View>
        </View>
      )
  }
}


export default About
