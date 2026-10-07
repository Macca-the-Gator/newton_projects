import {View, Text } from 'react-native'

export default function Dashboard(){
    return(
        <View style={{flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center'}}>
            <Text>Bem vindo a Dashboard!</Text>
            <Text>Não tem como voltar para a loja daqui</Text>
        </View>
    )
}