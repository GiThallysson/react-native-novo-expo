import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Exercicio_01 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}><Text>1</Text></View>
      <View style={styles.box2}><Text>2</Text></View>
      <View style={styles.box3}><Text>3</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0000',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
    }, 
    box1:{
        height:100,
        width:'100%',
        backgroundColor:'red'
      },
      box2:{
        height:100,
        width:'100%',
        backgroundColor:'blue'
      },
      box3:{
        height:100,
        width:'100%',
        backgroundColor:'green'
      
    }
  });
export default Exercicio_01