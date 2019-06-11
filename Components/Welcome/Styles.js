import React, {StyleSheet} from 'react-native'
import { connect } from 'react-redux'
const styles= StyleSheet.create({

  main_container:{
    flex:1,
    paddingHorizontal: 10,
    backgroundColor:'#DDEAF2',
  },
  bulle:{
    margin:10,
  },
  button_container:{
    flexDirection:'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  button:{
    width: 100,
    height: 50,
    backgroundColor: '#5057E1',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_button :{
    color: '#FFFFFF'
  }
}
);

const mapStateToProps = (state) => {
  return {
    param: state.color
  }
}

export default connect(mapStateToProps)(styles)
