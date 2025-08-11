import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const InfoScreen = () => {
  return(
    <ScrollView style = {styles.container}>
      <View style = {styles.content}>
      <Text style = {styles.title}> A Calculadora de 4 operações </Text>
      <Image 
      source={require('../assets/calculadora.jpg')}
      style = {styles.image}
      />
      <Text syle = {styles.text}>
      A calculadora de quatro operações é uma ferramenta prática que permite realizar cálculos básicos de adição, subtração, multiplicação e divisão. Desenvolvida com uma interface intuitiva, ela facilita o uso mesmo por usuários iniciantes, sendo ideal para atividades simples do dia a dia ou fins educacionais.</Text>
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'black',
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
});
export default InfoScreen;