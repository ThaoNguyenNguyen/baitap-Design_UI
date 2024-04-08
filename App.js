import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,Alert, Text, View, TextInput, Button, TouchableHighlight,Image  } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [pasword, setPasword] = useState('');
  const  onPress = ()=>{
    if(name==''|| pasword=='')
    {
      alert(`bạn chưa nhập đủ thông tin`);
    }
    else
    alert(`Bạn đã đăng nhập thành công với Username = ${name} và Pasword = ${pasword}`);
      
  }
  return (
    <View style={styles.container1}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/027/127/591/large_2x/pokemon-logo-pokemon-icon-transparent-free-png.png',
        }}
      />

      <TextInput style={styles.textInput} onChangeText={setName} placeholder="Nhap user name" value={name}/>
      
      <TextInput style={styles.textInput} onChangeText={setPasword} placeholder="Nhap password" secureTextEntry value={pasword}/>
      
      <TouchableHighlight style={styles.button}
      
      onPress={onPress}>
      
      <Text style={styles.buttonText}>
      
      Login
      
      </Text>
      
      </TouchableHighlight>
      
      </View>
      


  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6'
  },
  textInput: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'blue',
    width: 300,
    height: 30,
    borderColor: 'blue',
    backgroundColor: 'white',
    marginBottom: 10
  },
  logo: {
    width:300,
    height: 100,
    position:'relative',
    zIndex:1
  },
  
  buttonText:{
    backgroundColor: "#14bd2a",
    width: 300,
    height: 30,
    textAlign:'center',
    paddingTop: 3,
    
  },



 
});
