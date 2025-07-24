import { ActivityIndicator, Text, View } from 'react-native'

const Spinner = () => {
  return (
    <View style={{flexDirection:'column',flex:1,alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size='large'  color='blue' />
      <Text style={{color:'gray',fontSize:15}}>Loading...</Text>
    </View>
  )
}

export default Spinner