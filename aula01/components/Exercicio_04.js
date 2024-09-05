import React from 'react';
import { View, Text } from 'react-native';

const Exercicio_04 = ({ items }) => {
  return (
    <View>
      {items && items.map((item, index) => (
        <View key={index}>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
      ))}
    </View>
  );
};

// Exemplo de uso do componente Lista
export const items = [
  { name: 'Item 1', description: 'Descrição do Item 1' },
  { name: 'Item 2', description: 'Descrição do Item 2' },
  { name: 'Item 3', description: 'Descrição do Item 3' },
  { name: 'Item 4', description: 'Descrição do Item 4' },
  { name: 'Item 5', description: 'Descrição do Item 5' },
];

// resolvendo o componente Exercicio_03 em Lista com os itens
<Exercicio_04 items={items} />;


export default Exercicio_04;
