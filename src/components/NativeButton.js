import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const NativeButton = ({message = 'Hello world'}) => (
  <View style={{ padding: 10, borderRadius: 5, borderColor: 'purple', borderWidth: 1 }}>
    <Text>Below is a button made with react native components</Text>
    <Button title={message} onPress={() => Alert.alert('An alert', 'from native!')}/>
  </View>
)

export default NativeButton;
