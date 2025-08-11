import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
  },
    input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 0,
    paddingLeft: 10,
    width: '100%',
    textAlign: 'left'    
},
    buttom: {
    textAlign: 'center',    
    padding: 20,
    flexDirection: 'row',    
},

  container2: {
    flex: 1,
    justifyContent: 'flex-end', 
    padding: 20,
  },
  input2: {
    height: 50,
    borderColor: 'black',
    borderWidth: 3,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  image2: {
    width: 350,
    height: 500,
  }  
});