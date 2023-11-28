import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [value, setValue] = useState("0");

  const addNum = () => {
    if (num1 === "" || num2 === "") {
      setValue("0");
    } else {
      const res = parseFloat(num1) + parseFloat(num2);
      setValue(res.toString());
    }
  };

  const subNum = () => {
    if (num1 === "" || num2 === "") {
      setValue("0");
    } else {
      const res = parseFloat(num1) - parseFloat(num2);
      setValue(res.toString());
    }
  };

  const mulNum = () => {
    if (num1 === "" || num2 === "") {
      setValue("0");
    } else {
      const res = parseFloat(num1) * parseFloat(num2);
      setValue(res.toString());
    }
  };

  const divNum = () => {
    if (num1 === "" || num2 === "") {
      setValue("0");
    } else {
      let res = parseFloat(num1) / parseFloat(num2);
      res = parseFloat(res.toFixed(6));
      setValue(res.toString());
    }
  };

  const clearNum = () => {
    setNum1("");
    setNum2("");
    setValue("0");
  };

  return (
    <View style={Styles.root}>
      <View style={Styles.displayContainer}>
        <Text style={Styles.displayText}>Answer</Text>
        <Text style={Styles.displayAns}>{value}</Text>
        <TextInput
          value={num1}
          onChangeText={setNum1}
          style={Styles.input}
          placeholder="Enter the first number"
          placeholderTextColor="#7754D6"
          keyboardType="number-pad"
        />
        <TextInput
          value={num2}
          onChangeText={setNum2}
          style={Styles.input}
          placeholder="Enter the second number"
          placeholderTextColor="#7754D6"
          keyboardType="number-pad"
        />
        <View style={Styles.buttonContainer}>
          <View style={Styles.button}>
            <Button title="Add" color="#7754D6" onPress={addNum} />
          </View>
          <View style={Styles.button}>
            <Button title="Subtract" color="#7754D6" onPress={subNum} />
          </View>
          <View style={Styles.button}>
            <Button title="Multiply" color="#7754D6" onPress={mulNum} />
          </View>
          <View style={Styles.button}>
            <Button title="Divide" color="#7754D6" onPress={divNum} />
          </View>
          <View style={Styles.button}>
            <Button title="Clear" color="#7754D6" onPress={clearNum} />
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#1E0F3E",
    alignItems: "center",
    justifyContent: "center",
  },
  displayContainer: {
    backgroundColor: "#1E0F3E",
    padding: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  displayAns: {
    fontSize: 68,
    color: "#7754D6",
  },
  displayText: {
    fontSize: 20,
    color: "#7754D6",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 9,
    width: 300,
    height: 55,
    borderRadius: 5,
    fontSize: 20,
    color: "#7754D6",
    borderColor: "#7754D6",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 50,
  },
  button: {
    margin: 2,
  },
});
export default App;
