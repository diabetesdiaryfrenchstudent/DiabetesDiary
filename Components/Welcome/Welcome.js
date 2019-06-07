import React from 'react'
import {StyleSheet, ScrollView, Button, Text,Image,View,Dimensions} from 'react-native'
import text from './text'
import AutoHeightImage from 'react-native-auto-height-image';

import nse from '../../Images/nse.png'

class Welcome extends React.Component{


  render(){

    return(
    <ScrollView style={styles.main_container}>
      <View style={styles.header}>
      <Image style={styles.imageApp}
        source={require('../../Images/icon.png')}/>

      <Text style={styles.main_title}>{text.main_title}</Text>
      </View>
      <Text style={styles.title_2}>{text.responsibility_title}</Text>
      <Text style={styles.content}>{text.responsibility_content}</Text>
      <Text style={styles.title_2}>{text.data_title}</Text>
      <Text style={styles.content}>{text.data_content}</Text>
      <Text style={styles.title_2}>{text.understand_title}</Text>
      <Text style={styles.content}>{text.endText}</Text>
      <Text style={styles.content}>{text.pressOk}</Text>
      <AutoHeightImage //In order that the NSE logo being adapt for every phone screen
          width={Dimensions.get('window').width}
          source={nse}
        />
      <Button style={styles.button} title='ACCEPT' onPress={() =>{}}/>
    </ScrollView>
  )}
}
const imgSize ={
  width: this.width,
  height: this.height
}
const styles = StyleSheet.create({
  main_container:{
    flex:1,

    backgroundColor:'#DDEAF2',
  },
  header:{
    flex:1,
    flexDirection:'row',
    marginBottom: 20,
  },
  imageApp:{
    width: 100,
    height: 100,
  },
  main_title:{
    fontWeight: 'bold',
    fontSize: 30,
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 5
  },
  title_2:{
    fontSize:20,
    marginBottom:15,
  },
  content:{
    marginBottom:10,
    fontSize: 15,
  },
  button:{
    marginTop:10,
    paddingTop:20
  }

})
export default Welcome