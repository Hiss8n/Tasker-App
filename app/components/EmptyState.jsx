import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <View style={styles.emptySpace}>
        <View style={styles.icons}>
            <Ionicons name="clipboard-outline" size={46} color='#f1e0e0ff' />
          </View>

            <Text style={{color:'#12a9f5ff',fontFamily:'poppins',marginLeft:4,fontSize:20}}>No Task Found</Text>
         
          </View> 
             <Text style={{color:'#f1e0e0ff',fontFamily:'poppins',marginLeft:4,fontSize:16}}>
              Add Takes today to see them here..</Text>
        
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignContent:'center',
    alignItems:'center', 
    justifyContent:'center',
    
    height:360

  },
    emptySpace:{
      flexDirection:'column',
       alignContent:'center'
    },
    icons:{
        width:120,
        height:120,
        backgroundColor:'#81808065',
       alignContent:'center',
       justifyContent:'center',
       alignItems:'center',
       borderRadius:'50%',
       marginBottom:12
      
    }

})

export default EmptyState