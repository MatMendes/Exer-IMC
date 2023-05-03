import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from './componentes/Input';
import { Button } from './componentes/Botao';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    if (peso !== '' && altura !== '') {
      const imc = (parseFloat(peso) / Math.pow(parseFloat(altura), 2)).toFixed(2);
      setResultado(`Seu IMC é ${imc}`);
    } else {
      setResultado('Insira seu peso e altura.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>
      <Input
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={(valor) => setPeso(valor)}
      />
      <Input
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={(valor) => setAltura(valor)}
      />
      <Button title="Calcular" onPress={() => calcularIMC()} />
      <Text style={styles.resultado}>{resultado}</Text>
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
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});