import React, {StyleSheet} from 'react-native'

export default StyleSheet.create({

  main_container:{
    flex:1,
    paddingHorizontal: 10,
    backgroundColor:'#DDEAF2',
  },
  bulle:{
    marginVertical: 30,
    marginHorizontal: 30,

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
  },
  img_bulle:{
    width: '100%',
    height: '65%',
    flex:3,
  },
  guy:{
    flex:4,
    marginTop: 70,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  content:{
    fontSize: 15,
  }
}
);
