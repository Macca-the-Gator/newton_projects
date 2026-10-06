import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";


export  default function Contatos(){
    return(
        <View style={style.container}>
            <Text style={style.titulo}>Tela de contatos</Text>
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
        backgroundColor:"#d40897"
    },
    titulo:{fontSize:30,
        color:"#0519f8"
    }

})