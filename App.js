import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 40 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <TextInput
          placeholder="Add Gadgets"
          style={{
            borderColor: "black",
            borderWidth: 2,
            padding: 10,
            width: "80%",
          }}
        />
        <Button title="ADD" style={{ width: "40%" }} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
