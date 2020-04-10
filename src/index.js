import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// Os componentes do RN não possuem valor semantico (significado)
// Não possuem estilização própria
// Todos os components possuem por padrão "display: flex"

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3 etc

export default function App() {
  return ( 
    <>
      <StatusBar barStyle="light-content" backgroundColor='#7159c1' />
      <View style={styles.container}>
        <Text style={styles.title}> Hello World! </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7158c1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
})