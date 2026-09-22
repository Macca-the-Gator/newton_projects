import {useState, useEffect} from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native'

interface ResultadoProps{
    texto: string
}

function Resultado({texto}: ResultadoProps){
    return(
        <Text style={styles.Resultado}>{texto}</Text>
       
    )
}

const opcoes = ['pedra', 'papel', 'tesoura']

export default function Jogo(){
    const[jogador, setJogador] = useState('')
    const[computador, setComputador] = useState('')
    const[placar, setPlacar] = useState({jogador: 0, computador: 0})
}

useEffect(() => {
    if(jogador && computador){
       console.log(`Jogador: ${jogador} - Computador: ${computador}`)
    }
}, [jogador, computador])


function jogar(escolha: string){
    const aleatorio = OPCOES[Math.floor(Math.random() * OPCOES.length)]
    setJogador(escolha)
    setComputador(aleatorio)

    if(escolha === aleatorio) return
    if(
    (escolha === 'pedra' && aleatorio === 'tesoura') || 
    (escolha === 'papel' && aleatorio === 'pedra') || 
    (escolha === 'tesoura' && aleatorio === 'papel')){
        setPlacar(placar + 1)
    }
}

function resultado(){
    if(!jogador) return 'Escolha uma opção'
    if(jogador === computador) return 'Empate!'
    if(
        (jogador === 'pedra' && computador === 'tesoura') || 
        (jogador === 'papel' && computador === 'pedra') || 
        (jogador === 'tesoura' && computador === 'papel')
    ){
        return 'Vc venceu!'
    }
    return 'Computador venceu!'
}

return (
  <View style={styles.container}>
    <Text style={styles.titulo}>Pedra, Papel e Tesoura</Text>
    <Resultado texto={resultado()} />
    <Text style={styles.placar}>Placar: {placar}</Text>
    
    <View style={styles.botoes}>
      {OPCOES.map((opcao) => (
        <Pressable 
          key={opcao}
          style={[styles.botao, jogador === opcao && styles.botaoEscolhido]} 
          onPress={() => jogar(opcao)}
        >
          <Text style={styles.botaoTexto}>{opcao}</Text>
        </Pressable>
      ))}
    </View>
  </View>
);


export default function Jogo(){

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        aligjnItems: 'center',
        padding: 20
    },
    titulo: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 16
    },
    placar: {
            fontSize: 16,
            marginBottom: 24,
    },
    botoes: {
        flexDirection: 'row',
        gap: 12,
    },
    botao:{
        backgroundColor: '#f0f0f0',
        padding: 12,
        borderRadius: 8
    },
    botaoTexto: {
        fontSize: 18,
        color: 'blue',
    },
    botaoEscolhido: {
        fontWeight: 'bold',
        color: 'green',
    }
}
