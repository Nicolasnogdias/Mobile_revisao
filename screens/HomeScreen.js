import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { styles } from '../css/styles';  

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');
  
  const calcularSoma = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!isNaN(n1) && !isNaN(n2)) {
      const contaSoma = (n1 + n2);
      setResultado("O resultado da soma é : " + contaSoma);
    } else {
      setResultado("Número Inválido");
    }
  };
    const calcularSubtracao = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!isNaN(n1) && !isNaN(n2)) {
      const contaSubtracao = (n1 - n2);
      setResultado("O resultado da subtração é : " + contaSubtracao);
    } else {
      setResultado("Número Inválido");
    }
  };
    const calcularMultiplicacao = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!isNaN(n1) && !isNaN(n2)) {
      const contaMultiplicacao = (n1 * n2);
      setResultado("O resultado da multiplicação é : " + contaMultiplicacao);
    } else {
      setResultado("Número Inválido");
    }
  };
    const calcularDivisao = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!isNaN(n1) && !isNaN(n2)) {
      const contaDivisao = (n1 / n2);
      setResultado("O resultado da divisão é: " + contaDivisao);
    } else {
      setResultado("Número Inválido");
    }
  };
    
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <View style={styles.buttom}>
      <Button title="➕" onPress={calcularSoma} />
      <Button title="➖" onPress={calcularSubtracao} />
      <Button title="✖️" onPress={calcularMultiplicacao} />
      <Button title="➗" onPress={calcularDivisao} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Resultado"
        value={resultado}
        editable={false} 
      />
  </View>
  );
};

export default App;