import React from 'react'
import {StyleSheet, ScrollView, Button, Text,Image,View,Dimensions} from 'react-native'
import text from './text'
import AutoHeightImage from 'react-native-auto-height-image';
import styles from './Styles'
import nse from '../../Images/nse.png'

class Welcome extends React.Component{
  render(){

    return(
    <ScrollView style={styles.main_container}>
    <View style={stylesP.container}>
      <View style={stylesP.header}>
      <Image style={stylesP.imageApp}
        source={require('../../Images/icon.png')}/>

      <Text style={stylesP.main_title}>{text.main_title}</Text>
      </View>
      <Text style={stylesP.title_2}>{text.responsibility_title}</Text>
      <Text style={stylesP.content}>{text.responsibility_content}</Text>
      <Text style={stylesP.title_2}>{text.data_title}</Text>
      <Text style={stylesP.content}>{text.data_content}</Text>
      <Text style={stylesP.title_2}>{text.understand_title}</Text>
      <Text style={stylesP.content}>{text.endText}</Text>
      <Text style={stylesP.content}>{text.pressOk}</Text>
      <View style={stylesP.imgNSE}>
      <AutoHeightImage //In order that the NSE logo being adapt for every phone screen
          width={Dimensions.get('window').width}
          source={nse}
        />
        </View>
      <Button style={styles.button} title='ACCEPT' onPress={() => this._nextScreen()}/>
      </View>
    </ScrollView>
  )}


  _nextScreen = () => {
    this.props.navigation.navigate("Sexe")
  }


}

const stylesP = StyleSheet.create({

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
    margin :10,
  },
  imgNSE:{
    marginBottom: 10,
  },
  container:{
    marginBottom: 10,
  }

})
export default Welcome
