// Tools/Styles.js

import React from 'react'
import {StyleSheet} from 'react-native'


export default StyleSheet.create({
  //Containers
  main_container: {
    flex: 1,
    backgroundColor: 'rgb(221,234,242)'
  },
  box: {
    flex: 2,
    backgroundColor: '#ffffff',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


  //Texts
  Textcopyright: {
    textAlign:'justify',
  },
  TextLink: {
    textDecorationLine: 'underline',
    color: 'rgb(75,176,221)',
    textAlign:'center'
  },
  TextTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  TextBody: {
    textAlign:'justify',
  },

  //Buttons
  MenuButton: {
    backgroundColor: 'rgb(75,176,221)',
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 250
  },
  AddButton: {
    backgroundColor: 'rgb(255,255,255)',
    padding: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    width: 40
  },
  button: {
    backgroundColor: 'rgb(75,176,221)',
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 250
  },
  textButton:{
    color: 'rgb(255, 255, 255)',
    fontWeight: 'bold',
    fontSize: 16
  },


  //Modals
  modalContent: {
    backgroundColor: 'white',
    padding: 12 ,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  bottomModal: {
    backgroundColor: 'rgb(244, 72, 190)',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
})
