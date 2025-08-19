import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';


const ferramentas = [
  { 
    id: '1',
    name: 'Martelo',
    price:'R$ 19,99',
    utility:'Um martelo serve para destruir coisas',
    image: require('../assets/martelo.jpg'),
  },
  { 
    id: '2',
    name: 'Parafusadeira',
    price:'R$ 39,99',
    utility:'Serve para parafusar e desparafusar',
    image: require('../assets/parafusadeira.jpg'),
  },
  { 
    id: '3',
    name: 'Tesoura',
    price:'R$ 48,29',
    utility:'Serve para cortar coisas',
    image: require('../assets/tesoura.jpg'),
  },
  { 
    id: '4',
    name: 'Trena',
    price:'R$ 32,20',
    utility:'Serve para medir o tamanho de coisas',
    image: require('../assets/trena.jpg'),
  },
  { 
    id: '5',
    name: 'Fita',
    price:'R$ 18,90',
    utility:'Serve para grudar, juntar ou isolar coisas',
    image: require('../assets/fita.jpg'),
  },
];

const InfoScreen = () => {
  return(
    <View style = {styles.container}>
      <FlatList
      data={ferramentas}
      renderItem={({item}) => (
        <View style={styles.content}>
        <Text style={styles.FerraName}>{item.name}</Text>
        <Text style={styles.FerraPrice}>{item.price}</Text>
        <Text style={styles.FerraUtil}>{item.utility}</Text>
        <Image source={item.image} style={styles.FerraImage} resizeMode='contain'/>
</View>
  )}
/>
  </View>
  );
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
  FerraName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'black',
  },
  FerraPrice: {
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
    marginBottom: 5,
  },
  FerraUtil: {
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
    marginBottom: 5,
  },
  FerraImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
});
export default InfoScreen;