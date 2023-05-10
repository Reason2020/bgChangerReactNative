import { StyleSheet, Text, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [ backgroundColor, setBackgroundColor ] = useState('#0d74e7');

  function generateRandomColor() {
    let colorCode = '';
    const hexStrings = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {
      const characterIndex = Math.floor(Math.random() * 16);
      const characterCode = hexStrings[characterIndex];
      colorCode += characterCode;
    }

    return colorCode;
  }

  function buttonPressHandler() {
    const newColor = generateRandomColor();
    setBackgroundColor(`#${newColor}`);
  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: backgroundColor}]}>
      <StatusBar backgroundColor={backgroundColor} />
      <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={buttonPressHandler}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    padding: 20,
    width: 200,
    backgroundColor: "#2fbb4f",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: 'bold'
  }
});
