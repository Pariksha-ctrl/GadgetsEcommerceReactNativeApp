import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  // it is a hook called 'useState' from react to get and set the value
  const [enteredGadget, setEnteredGadget] = useState("");

  // function that will get the user input 'gadget' and set it
  const gadgetInputHandler = (enteredText) => {
    setEnteredGadget(enteredText);
  };

  // fuction that will handle the 'ADD' button to add the gadgets entered by the user
  // it will add the entered gadget to the list of gadget
  const addGadgetHandler = () => {
    // to see that the entered gadgets are saved correctly
    console.log(enteredGadget);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Gadgets"
          style={styles.input}
          onChangeText={gadgetInputHandler}
          value={enteredGadget}
        />
        <Button title="ADD" onPress={addGadgetHandler} />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    width: "80%",
  },
});
