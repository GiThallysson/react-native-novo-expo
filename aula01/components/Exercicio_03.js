import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

const Exercicio_03 = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Digite algo"
      />
      <Text>texto surgindo {text}</Text>
    </View>
  );
};

export default Exercicio_03;
