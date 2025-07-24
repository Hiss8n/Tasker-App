import { Text } from 'react-native'

const ShowDate = () => {
    const today = new Date()
    const options ={day:'numeric',month:'long',year:'numeric'}
    const newToday=today.toLocaleDateString("en-US",options)

    
  return (
/*     <View style={{flexDirection:'row',marginBottom:12,paddingTop:3,backgroundColor:'red'}}> */
      <Text style={{color:'#f0f5f1ff',fontSize:12,fontWeight:600}}>{newToday}</Text>
    /* </View>  */
  )
}

export default ShowDate