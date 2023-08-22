import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, Animated } from 'react-native';
/*
Pour connection eas : eas login
Pour Build : eas build --profile development --platform android
Pour lancé : npx expo start --dev-client
*/
export default function App() {
  const [bounceValue, setBounceValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(bounceValue, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale: bounceValue }] }}>
        <Text style={styles.text}>Hello World!</Text>
      </Animated.View>
      <StatusBar style="auto" />
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
