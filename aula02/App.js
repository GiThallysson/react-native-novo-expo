import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Menu setPage={setPage} />
      {page === 1 && <Page1 />}
      {page === 2 && <Page2 />}
      {page === 3 && <Page3 />}
      {page === 4 && <Page4 />}
      {page === 5 && <Page5 />}
    </ScrollView>
  );
};

const Menu = ({ setPage }) => {
  return (
    <View style={styles.menu}>
      <Button title="Página 1" onPress={() => setPage(1)} />
      <Button title="Página 2" onPress={() => setPage(2)} />
      <Button title="Página 3" onPress={() => setPage(3)} />
      <Button title="Página 4" onPress={() => setPage(4)} />
      <Button title="Página 5" onPress={() => setPage(5)} />
    </View>
  );
};

const Page1 = () => {
  return (
    <View style={styles.page1}>
      <View style={[styles.box, { backgroundColor: 'red' }]} />
      <View style={[styles.box, { backgroundColor: 'green' }]} />
      <View style={[styles.box, { backgroundColor: 'blue' }]} />
    </View>
  );
};

const Page2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centeredBox} />
    </View>
  );
};

const Page3 = () => {
  return (
    <View style={styles.row}>
      <View style={[styles.sideBox, { backgroundColor: 'red' }]} />
      <View style={[styles.middleBox, { backgroundColor: 'green' }]} />
      <View style={[styles.sideBox, { backgroundColor: 'blue' }]} />
    </View>
  );
};

const Page4 = () => {
  return (
    <View style={styles.page4}>
      <View style={[styles.flexBox, { backgroundColor: 'red' }]} />
      <View style={[styles.flexBox, { backgroundColor: 'green' }]} />
      <View style={[styles.flexBox, { backgroundColor: 'blue' }]} />
    </View>
  );
};

const Page5 = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <View style={styles.page5}>
      <Text style={styles.header}>Lista de Tarefas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Nova Tarefa"
        />
        <Button title="Adicionar" onPress={addTask} />
      </View>
      <ScrollView>
        {tasks.map((t, index) => (
          <Text key={index} style={styles.task}>{t}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  page1: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  box: {
    height: 100,
    width: '90%',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  centeredBox: {
    width: 50,
    height: 50,
    backgroundColor: 'purple',
  },
  row: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    justifyContent: 'space-around',
  },
  sideBox: {
    width: 50,
    height: '100%',
  },
  middleBox: {
    flex: 1,
    height: '100%',
  },
  page4: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  flexBox: {
    flex: 1,
    width: '90%',
    marginBottom: 10,
  },
  page5: {
    flex: 1,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
  },
  task: {
    fontSize: 18,
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
  },
});

export default App;
