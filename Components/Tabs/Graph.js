// Components/Graph.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Button, Dimensions} from 'react-native'
import Plotly from 'react-native-plotly'
//Details here https://github.com/rynobax/react-native-plotly

import Header from '../Header/Header'

import styles from '../../Tools/Styles'


const dayData = {
  __id: 'day',
  x: [1, 2, 3, 4, 5],
  y: [1, 2, 3, 4, 8],
  type: 'scatter',
};

const halfMonthData = {
  __id: 'halfMonth',
  x: [1, 2, 3, 4, 5],
  y: [8, 4, 3, 2, 1],
  type: 'scatter',
};

const monthData = {
  __id: 'month',
  x: [1, 2, 3, 4, 5],
  y: [7, 4, 3, 6, 1],
  type: 'scatter',
};

const threeMonthsData = {
  __id: 'threeMonths',
  x: [1, 2, 3, 4, 5],
  y: [5, 4, 9, 2, 4],
  type: 'scatter',
};


class Graph extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 24,
      data: [dayData],
      layout: { title: 'Blood Glucose Level' },
    };
  }

  update = (_, { data, layout, config }, plotly) => {
    plotly.react(data, layout, config);
  };

  render() {
      return (

        <View style={styles.main_container}>

        <Header name="Graph" nav={this.props.navigation}/>

            <View style={{flexDirection: 'row', justifyContent: 'center', margin:15}}>
              <Button title='24 hours' onPress={() => {this.setState({time: 24}), this.setState({ data: [dayData] })}}/>
              <Button title='14 days' onPress={() => {this.setState({time: 14}), this.setState({ data: [halfMonthData] })}}/>
              <Button title='30 days' onPress={() => {this.setState({time: 30}), this.setState({ data: [monthData] })}}/>
              <Button title='90 days' onPress={() => {this.setState({time: 90}), this.setState({ data: [threeMonthsData] })}}/>
            </View>



                <View style={{flex:1, width: '100%'}}>
                  <Plotly
                    data={this.state.data}
                    layout={this.state.layout}
                    update={this.update}
                    debug
                  />
                </View>

        </View>
      )
  }
}



export default Graph
