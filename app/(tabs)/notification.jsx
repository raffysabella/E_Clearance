import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React from 'react'

const notification = () => {
  const notifEx = [{id: 1 ,notif:"Office of the President Approved Your requirements"},{id: 2 ,notif: "Sanction is paid"}]
  return (
    <View style={styles.mainCon}>
      <View style={styles.innerCon}>
        <Text style={styles.headertxt}>
          Notification
        </Text>
        <FlatList
          data={notifEx}
          keyExtractor={(item)=> item.id}
          renderItem={({item})=>(
            <View style={styles.infoCon}>
                <View>
                  <Image source={require('../../assets/notif.png')} style={styles.img}></Image>
                </View>
                <View style={{width: '80%'}}>
                  <Text numberOfLines={1} ellipsizeMode="tail" key={item.id} style={styles.content} >{item.notif}</Text>
                </View>
            </View>

          )}
        >

        </FlatList>
      </View>
    </View>
  )
}

export default notification

const styles = StyleSheet.create({
  mainCon:{
    width:'95%', 
    height:'94%', 
    backgroundColor:'rgba(129, 153, 218, 0.3)', 
    marginLeft:'2.5%', 
    marginTop:'10%', 
    borderRadius:10
  },
  innerCon:{
    width:'95%', 
    height:'95%', 
    backgroundColor:'rgba(250, 251, 254, 0.9)',
    marginLeft:'2.5%', 
    marginTop:'2.5%',
     borderRadius: 10
  },
  headertxt:{
    fontSize:28, 
    color:'black', 
    fontWeight: 600, 
    marginLeft:'5%'
  },
  infoCon:{
    flexDirection:'row', 
    width:'95%', 
    padding: 12, 
    backgroundColor: 'rgba(255, 255, 255, 0.87)',
    marginLeft:'2.5%',
    borderRadius: 10, 
    marginTop: 5, 
    borderWidth: 2, 
    borderColor: 'rgba(22, 10, 47, 1)'
    },
    img:{
      width: 25, 
      height:25,
      tintColor: 'rgba(22, 10, 47, 1)',
      marginLeft:'5%'
    },
    content:{
      fontSize:16,
      color:'rgba(22, 10, 47, 1)',
      fontWeight: 600
    }
})