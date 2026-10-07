import {View, Text, Button } from 'react-native'
import {router} from 'expo-router'

export default function Loja(){
    return(
        <View style={{flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center'}}>
            <Text>Bem vindo a nossa Loja</Text>
            <Button
                title='Ver Produto'
                onPress={()=>{
                    router.push("/produto");
                }}
            />
            <Button
                title='Ir para Dashboard'
                onPress={()=>{
                    router.replace("/dashboard");
                }}
            />
        </View>
    )
}