import {View, Text, Button } from 'react-native'
import {router} from 'expo-router'

export default function Produto(){
    return(
        <View style={{flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center'}}>
            <Text>Mouse s/ fio R$ 99,00</Text>
            <Button
                title='Comprar'
                onPress={()=>{
                    alert("Produto comprado com sucesso!")
                    router.push("/checkout");
                }}
            />
            <Button
                title='Cancelar compra'
                onPress={()=>{
                    router.back();
                }}
            />
        </View>
    )
}