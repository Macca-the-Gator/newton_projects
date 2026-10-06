import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";


export  default function Index(){
    return(
        <View style={styles.container2}>
            <View style={styles.header}>
                <Text style={styles.titulo}>App Rotas</Text>
                <View style={styles.nav}>
                    <Link style={styles.botao} href={"/criar_conta"}>Criar Conta</Link>
                    <Link style={styles.botao} href={"/produtos"}>Produtos</Link>
                    <Link style={styles.botao} href={"/sobre"}>Sobre</Link>
                    <Link style={styles.botao} href={"/contatos"}>Contatos</Link>
                </View>
            </View>
            <View style={styles.container}>
                <Image style={styles.img} source={require("../assets/images/images.jpg")}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>copyright @2026</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container2: { flex: 1 },
        header: { height: 60, 
            backgroundColor: '#4c1d95', 
            justifyContent: 'center',
            alignItems: 'center',
        },
        container: { flex: 1,
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: '#1e1b2e', 
            gap: 16, 
        },

        footer: { height: 50,
            backgroundColor: '#4c1d95',
            justifyContent: 'center', 
            alignItems: 'center', 
        },

        nav: { flexDirection: 'row', 
            gap: 36, 
            marginTop: 6, 
        },

        titulo: { fontSize: 22, 
            color: '#f1f1f1' 
        },

        botao: { color: '#f1f1f1', 
            fontSize: 16 
        },

        footerText: { color: '#f10c0c', 
            fontSize: 18 
        },

        img: { width: 400, 
            height: 400, 
            borderRadius: 20 
        },
})