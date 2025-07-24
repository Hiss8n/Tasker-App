import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SafeAreaContentext = ({children}) => {
const inset=useSafeAreaInsets()
  return (
    <View style={[styles.Screen,inset.top]}>
      {children}
    </View>
  )
}

const styles=StyleSheet.create({
    Screen:{
        flex:1,
        backgroundColor:'gray',
        paddingTop:30

    }
})

export default SafeAreaContentext


