import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {

  const [saida, mudaSaida] = useState("?");
  const [valInicio, mudaValorInicio] = useState(1);
  const [valFinal, mudaValorFinal] = useState(100);
  const [mensagemErro, mudaMensagemErro] = useState("");
  const [mostraErro, mudaMostraErro] = useState(false);
  const gerarNumero = () => {
    if(valInicio>valFinal || valInicio == valFinal || valInicio == "" || valFinal == ""){
      mudaMostraErro(true);
      {valInicio>valFinal&&  mudaMensagemErro("O valor mínimo não pode ser maior que o máximo")}
      {valInicio == valFinal &&  mudaMensagemErro("O valores não pode ser iguais")}
      {valInicio==""  &&  mudaMensagemErro("Os valores não podem ser vazios")}
      {valFinal==""  &&  mudaMensagemErro("Os valores não podem ser vazios")}
      {valInicio=="" && valFinal =="" &&  mudaMensagemErro("Os valores não podem ser vazios")}
      mudaSaida("?");
    }else{
      mudaMostraErro(false);
      var numeroGerado = Math.floor(Math.random() * (valFinal - valInicio + 1)) + valInicio*1;
      if(isNaN(numeroGerado) || Number.isInteger(numeroGerado) == false){
        mudaMostraErro(true);
        {isNaN(numeroGerado) || Number.isInteger(numeroGerado) == false &&  mudaMensagemErro("Os valores devem ser números inteiros");}
        mudaSaida("?");
      }else{
      mudaSaida(numeroGerado);
      }
    }
  }
  return (
    <View style={styles.container}>
      {mostraErro == true &&  
      <View style={styles.errorSection}>
        <Text style={styles.errorMessage}>{mensagemErro}</Text>
      </View>}
      <View style={styles.inputSection}>
        <Text style={styles.inputText}>Min</Text>
        <TextInput style={styles.inputs}
          onChangeText={mudaValorInicio}
          value={valInicio.toString()}
          keyboardType="numeric" />
        <Text style={styles.inputText}>Max</Text>
        <TextInput style={styles.inputs}
          onChangeText={mudaValorFinal}
          value={valFinal.toString()}
          keyboardType="numeric" />
      </View>
      <View style={styles.buttonSection}>
        <Text style={styles.text}>{saida}</Text>
        <Button
          title="Sortear"
          onPress={gerarNumero}
        />
      </View>
      <Text style={styles.footer}>Desenvolvido por Rúben Filipe</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#BDC1C6',
    fontSize: 150,
    marginVertical: 75,
  },
  footer: {
    color: 'gray',
    position: "absolute",
    bottom: 10,
    fontSize: 15,
    textAlign: 'center'
  },
  inputSection: {
    flexDirection: "row",
  },
  inputText: {
    color: '#BDC1C6',
    fontSize: 15,
  },
  inputs: {
    backgroundColor: '#fff',
    width: "30%",
    marginHorizontal: "5%",
    height: 17,
    borderBottomWidth : 1.0,
    borderColor: '#BDC1C6',
    color: '#858585',
  },
  buttonSection: {
    width: '80%',
  },
  errorSection: {
    backgroundColor: "#F2727280",
    width: '100%',
    height: 120,
    position: "absolute",
    left: 0,
    top: 0,
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    color: '#FF5656',
    fontSize: 30,
    fontWeight: '600',
  }
});
