import {View, Text, Button } from 'react-native'
import {router} from 'expo-router'

export default function CheckOut(){
    return(
        <View style={{flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center'}}>
            <Text>Confirmar compra?</Text>
            <Button
                title='Confirmar'
                onPress={()=>{
                    alert("Compra Realizada")
                    router.dismiss();
                }}
            />
            <Button
                title='Cancelar'
                onPress={()=>{
                    router.dismiss();
                }}
            />
        </View>
    )
}