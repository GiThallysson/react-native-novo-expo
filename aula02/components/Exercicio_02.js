import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Exercico_02 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Exercico_02</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
    }, 
    box1:{
        height:50,
        width:'50%',
        backgroundColor:'red'
      }
  });
export default Exercico_02