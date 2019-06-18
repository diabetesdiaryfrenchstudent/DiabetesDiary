// Components/About.js

import React from 'react'
import {View, ScrollView, StyleSheet, Text, Image, TouchableOpacity, Linking} from 'react-native'
import DataStorageInfo from  '../Components/DataStorageInfo'

import styles from '../Tools/Styles'
import NSEImage from '../Images/NSEImage.png'

class About extends React.Component {
  static navigationOptions = {
    title: 'About Diabetes Diary',
  }


  render() {
      return (
        <View style={styles.main_container}>
        <View style={{flex:2, margin: 5}}>

            <Text style={styles.Textcopyright}>Version: 2.0 (8963bfe)</Text>

            <Text style={styles.Textcopyright}>{'\n'}Diabetes Diary is a result of several research projects at the Noregian Center for E-health Research. Read more on the webpage :</Text>
            <TouchableOpacity onPress={() => Linking.openURL('http://diabetesdagboka.no')}>
              <Text style={styles.TextLink}> http://diabetesdagboka.no </Text>
            </TouchableOpacity>
            <Text style={styles.Textcopyright}> {'\n'}Keep in mind that Diabetes Diary is storing your health dat on your mobile device. Read more </Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('DataStorageInfo')}>
                <Text style={styles.Textcopyright, {textDecorationLine: 'underline', color: 'rgb(75,176,221)'}}>here.</Text>
              </TouchableOpacity>
            <Text style={styles.Textcopyright}>Copyright of this software belongs to NST(2013)/NSE(2017).</Text>

            <Text style={styles.Textcopyright}>{'\n'}{'\n'}Norwegian Food Composition Database 2017. Norwegian Food Safety Authority, The Norwegian Directorate of Health and University of Oslo.</Text>
            <TouchableOpacity onPress={() => Linking.openURL('http://www.matvaretabellen.no')}>
              <Text style={styles.TextLink}> http://www.matvaretabellen.no. </Text>
            </TouchableOpacity>


            <Text style={styles.Textcopyright}>{'\n'}{'\n'}The following third party components, licensed under Apache License 2.0, are used: android-xmlrpc, AChartEngine, exchangeit, Apache Oltu, jcsv.</Text>
            <TouchableOpacity onPress={() => Linking.openURL('http://www.apache.org/licenses/LICENSE-2.0.html')}>
              <Text style={styles.TextLink}> http://www.apache.org/licenses/LICENSE-2.0.html </Text>
            </TouchableOpacity>


            <Text style={styles.Textcopyright}>{'\n'}{'\n'}The following third party components, licensed under MIT License, are used: SeekArc. {'\n'}MIT License:</Text>
            <Text style={styles.Textcopyright, {fontSize: 8}}>Permission to use, copy, modify, ditribute, and sell this software and its documentation for any purpose is hereby granted without fee,
            provided that the above copyright notice appear in all copies and that both that copyright notice and this permmision notice appear in supporting documentation. No representations are made about the suitability of this software for any purpose. It is provided as is without express or implied warranty.</Text>

          </View>

          <View style={{flex:1}}>
            <Image source={NSEImage}  style={{flex:1, height: undefined, width: undefined}}  resizeMode='contain' />
          </View>
        </View>
      )
  }
}


export default About
