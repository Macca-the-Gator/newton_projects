import { ImageBackgroundComponent } from "react-native"
import { FlatList } from "react-native/types_generated/index"

from 'react-native'
const frutas = ['laranja', 'banana', 'maçã', 'uva', 'abacaxi']

export default function Index() {
  return (
    <FlatList
        data={frutas}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
    />
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fffd',
    marginHorizontal: 12,
    marginVertical: 12,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    gap: 16
  },
  texto: {
    fontSize: 20,
    color: '#f00909'
  }
})