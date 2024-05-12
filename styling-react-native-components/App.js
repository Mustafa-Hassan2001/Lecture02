import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function App(){
  const isDarkMode = useColorScheme === 'light'
  return(
    <View style={styles.container}>
      // <Text style={isDarkMode ? styles.whiteText : styles.whiteText}> Hello World</Text>
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteText: {
    color: '#FFFFFF'
  },
  // darkText: {
  //   color: '#00000'
  // },
})


export default App;