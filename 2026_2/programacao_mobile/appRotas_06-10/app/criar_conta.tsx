import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";


export  default function Criar_Conta(){
    return(
        <View style={style.container}>
            <Text style={style.titulo}>Crie sua conta</Text>
            <Link href={"/"}>
                <Text>Voltar</Text>
            </Link>
        </View>
    )
}
const style = StyleSheet.create({
    container:{flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#f40808"
    },
    titulo:{fontSize:30,
        color:"#0519f8"
    }

})