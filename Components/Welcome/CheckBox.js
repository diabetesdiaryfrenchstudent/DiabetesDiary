import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const CheckBox = ({ selected, onPress, style, textStyle, size = 30, color = '#211f30', text = '', ...props}) => (
      <TouchableOpacity style={stylesP.main_container} onPress={onPress} {...props}>
       <Icon
           size={size}
           color={color}
           name={ selected ? 'check-square-o' : 'square-o'}
       />

       <Text style={textStyle}> {text} </Text>
   </TouchableOpacity>
    )

const stylesP= StyleSheet.create({
  main_container:{
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  }

})
export default CheckBox
