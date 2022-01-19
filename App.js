
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const [luckyNumberImage, setLuckyNumberImage]= useState(require("./assets/dice-images/smiley.png"))
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lucky Number</Text>
      <Text style={styles.status}>First throw the dice to get your luky number</Text>
      <Button title='STEP 1. THROW LUCKY NUMBER'/>
      <Image style={styles.dice}/>
      <Text style={styles.status}>then throw the dice to get the win number</Text>
      <Button title='STEP 2. THROW WINNING NUMBER'/>
      <Image style={styles.dice}/>
      <Text style={styles.status}>To see if your are lucky</Text>
      <Button title='STEP 2. THROW WINNING NUMBER'/>
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
  header:{
    fontSize:30,
    marginBottom:15
  },
  dice:{
    marginTop:15,
    width:80,
    height:80,
    marginBottom: 15
  },
  status:{
    fontSize:15,
    marginBottom: 25
  }
});
