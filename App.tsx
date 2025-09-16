import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import NativeLogger from './specs/NativeLogger';

function App() {
  return (
    <View style={styles.container}>
      <Button title="Log" onPress={() => NativeLogger?.log('Hello World')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
