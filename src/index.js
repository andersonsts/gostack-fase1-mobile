import React, { useEffect, useState } from 'react';
import { SafeAreaView, Platform, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import api from './services/api';

// Os componentes do RN não possuem valor semantico (significado)
// Não possuem estilização própria
// Todos os components possuem por padrão "display: flex"

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3 etc

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    changeNavigationBarColor('transparent', false);

    api.get('projects').then(res => {
      setProjects(res.data);
    })
  }, [])

  async function handleAddProject() {
    const res = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Anderson Santos'
    })

    const project = res.data;

    setProjects([...projects, project]);
  }

  return ( 
    <>
      <StatusBar barStyle="light-content" backgroundColor='#7159c1' />

      <SafeAreaView style={styles.container}>
        <FlatList 
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.title}>{project.title}</Text>
          )}
        />

        <TouchableOpacity 
          activeOpacity={0.7} 
          style={styles.button} 
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7158c1',
    paddingVertical: Platform.OS === 'android' ? 30 : 0,
  },

  title: {
    color: '#eee',
    fontSize: 40,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  }
})