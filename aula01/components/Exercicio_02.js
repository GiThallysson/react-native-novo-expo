import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Exercicio_02 = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
      <Button title="Decrementar" onPress={() => setCount(count - 1)} />
    </View>
  );
};

export default Exercicio_02;
