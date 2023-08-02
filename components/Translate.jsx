import { useState } from 'react';
import { ActivityIndicator, Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Tts from 'react-native-tts';

export default function Translate() {
  const [from,setfrom]=useState('')
  const [to,setto]=useState('')
  const [froml,setfroml]=useState(-1)
  const [tol,settol]=useState(-1)
  const [l,setl]=useState(false)
  const lang = ["uz","en","ru"]
  const languages=["O'zbek","English","Russian"]
  const uri=`https://api.mymemory.translated.net/get?q=${from}&langpair=${lang[froml]}|${lang[tol]}`
  function btn(){
    if(from!="" && froml !=-1 && tol != -1){
      setl(true)
      setto('')
      fetch(uri).then(r=>r.json())
      .then(d=>{setto(d.responseData.translatedText)
        setl(false)
       
    })
      console.log(to);
      
    }else{
      Alert.alert("To'liq to'ldiring")
    }
  }
  return (
    
    <View style={styles.container}>
      <Text style={{fontSize:20}}>Tarjima Qilish:</Text>
      <View style={{width:"100%",height:"100vh",display:"flex" ,justifyContent:"center"}}>

        <SelectDropdown
          
          data={languages}
          onSelect={(selectedItem, index) => {
            setfroml(index)
          }}
          
        />
        <TextInput
          style={{width:200,height:150,borderWidth:1,fontSize:20}}
          onChangeText={setfrom}
          value={from}
          
        />
        
        <SelectDropdown
        data={languages}
        onSelect={(selectedItem, index) => {
          settol(index)
        }}
        />
        <Text style={{width:200,height:150,borderWidth:1,fontSize:20}}>
        {l ? (<ActivityIndicator size="30" color="red" />):""}
          {to}
          </Text>
      </View>
      <Button
        
        onPress={btn}
        title="Tarjima Qilish"
        color="#841584"
        // accessibilityLabel="Learn more about this purple button"

      />


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:30,
    
  }
});
