import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

interface FormState {
  email: string;
  password: string;
}

export default function HomeScreen() {
  const [formData, setFormData] = useState<FormState>({ email: '', password: '' });
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = () => {
    const { email, password } = formData;

    if (!email || !password) {
      Alert.alert('Error', 'Both email and password are required.');
    } else {
      setShowResult(true)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          placeholder="Enter Email Address"
          style={styles.input}
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter Password"
          secureTextEntry
          style={styles.input}
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />

      {
        showResult && <View style={styles.resultBox}>
          <Text style={styles.resultText}>{`Your email is: ${formData.email}`}</Text>
          <Text style={styles.resultText}>{`Your password is: ${formData.password}`}</Text>
        </View>
      }


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  inputBox: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white'

  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: 'white'

  },
  resultBox: {
    marginTop: 20,

  },
  resultText: {
    color: 'white'
  }
});
