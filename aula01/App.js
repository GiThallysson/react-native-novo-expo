import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Exercicio_01 from './components/Exercicio_01';
import Exercicio_02 from './components/Exercicio_02';
import Exercicio_03 from './components/Exercicio_03';
import Exercicio_04 from './components/Exercicio_04';

import {items} from './components/Exercicio_04';


export default function App() {
  const [selectedPage, setSelectedPage] = useState(1);

  

  const renderPage = () => {
    switch (selectedPage) {
      case 1:
        return <Exercicio_01 />;
      case 2:
        return <Exercicio_02 />;
      case 3:
        return <Exercicio_03 />;
      case 4:
        return <Exercicio_04 items={items} />;
      default:
        return <Exercicio_01 />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Page 1" onPress={() => setSelectedPage(1)} />
        <Button title="Page 2" onPress={() => setSelectedPage(2)} />
        <Button title="Page 3" onPress={() => setSelectedPage(3)} />
        <Button title="Page 4" onPress={() => setSelectedPage(4)} />
      </View>
      {renderPage()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});
