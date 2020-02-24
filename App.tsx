import React from 'react';
import {View, Text, SafeAreaView, TextInput, Button} from 'react-native';

const App: React.FC = () => {
  const handleOnPress = () => {};
  return (
    <SafeAreaView>
      <View style={{padding: 15}}>
        <Text>Adyen React Native</Text>
        <TextInput style={{padding: 15}} placeholder="Card Number" />
        <TextInput style={{padding: 15}} placeholder="Security Code" />
        <TextInput style={{padding: 15}} placeholder="Expiry Year" />
        <TextInput style={{padding: 15}} placeholder="Expiry Month" />
        <Button title="Submit" onPress={handleOnPress} />
      </View>
    </SafeAreaView>
  );
};

export default App;
