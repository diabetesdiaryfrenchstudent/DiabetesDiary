import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Entypo"

export default class MenuHeader extends React.Component {
  constructor(props){
    super(props)

  }
  render() {
    const {nav,name}=this.props
    return (
      <View style={{flexDirection: 'row'}}>
      <Icon name='menu'
               type='Entypo'
               style={{ fontSize:30, marginLeft: 15}}
               onPress={() =>nav.openDrawer() }
              />
              <Text> {name}</Text>
              </View>
    );
  }
}
