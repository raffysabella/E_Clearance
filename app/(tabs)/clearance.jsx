import { StyleSheet, Text, View,Image,Dimensions ,FlatList} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Clearance = () => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const clearancedata = [
    {id:1,role:"Class Treasurer", assignedOfficer: " "},
    {id:2,role:"Class Mayor", assignedOfficer: " "},
    {id:3,role:"SBO BSIT Treasurer", assignedOfficer: "Daven Rose S. Areñola "},
    {id:4,role:"SBO BSIT Governor", assignedOfficer: "Gabriel Emmanrey B. Mendoza"},
    {id:5,role:"CSG Treasurer", assignedOfficer: "Eve Patrice Y. Roxas"},
    {id:6,role:"CSG Presedent ", assignedOfficer: "Jhon Dave Carl C. Dangcal"},
    {id:7,role:"REGISTRAR", assignedOfficer: "Ms. Bernadeth T. Nacua"},
    {id:8,role:"LABRARIAN", assignedOfficer: "Dr. Rodelia T. Arancon"},
    {id:9,role:"GUIDANCE COUNCELOR", assignedOfficer: "Mr. Manuel B. Chavo"},
    {id:10,role:"SCHOOL NURSE", assignedOfficer: "Ron Jake I. Romero"},
    {id:11,role:"COMP. LAB CUSTODIAN", assignedOfficer: "John Fred A. Cariaga"},
    {id:12,role:"BILLING/CASHIER", assignedOfficer: "Jachris"}
  ];

  return (
    <View>
      {/* <LinearGradient
        colors={['#eeeeeeff','#a9bbe0ff']}
        start={{x: 1.00, y: 0.50}}
        end={{x: 0.00, y: 0.50}}
        style={styles.headerCon}
      >   
          <View style={styles.innerCOn}> 
            <View style={{width: '70%'}}>
              <Text style={styles.dashboartxt}>Student Clearance</Text>
            </View>
            <View style={styles.logo}>
              <Image source={require('../../assets/icon-occ.webp')} style={{width:40, height:40 , opacity:0.5}}>
              </Image>
            </View>
          </View> 
      </LinearGradient> */}
      <View style={styles.wrapper}>
      <View  style={[styles.maiNcon, {top: (SCREEN_HEIGHT - SCREEN_WIDTH * 1) / 2, left: (SCREEN_WIDTH - SCREEN_HEIGHT * 1) / 2 ,height: SCREEN_WIDTH  ,width: (SCREEN_HEIGHT - 40), transform: [{ rotate: '-90deg' }]}]}>
          <View>
            <Text style={styles.headertxt}>
              Clearance
            </Text>
          </View>
          <View style={{width: '100%', height: '84%',}}>
            <View style={styles.headerCON}>
              <View style={styles.header1}>

              </View>
              <View style={styles.header2}>
                <Text style={styles.headerstxt}>Assigned Officer</Text>
              </View>
              <View style={styles.header3}><Text style={styles.headerstxt}>Approved</Text></View>
              <View style={styles.header4}><Text style={styles.headerstxt}>Date</Text></View>
            </View>
            <View style={styles.flatCon}>
            <FlatList
              data={clearancedata}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View key={item.id} style={styles.dataCON}>
                  <View style={styles.roleCOn}>
                    <Text key={item.id}>   {item.role}</Text>
                  </View>
                  <View key={item.id} style={styles.assignedOfficerCOn}>
                    <Text key={item.id}>  {item.assignedOfficer}</Text>
                  </View>
                  <View style={styles.statusCon}>
                    <Text></Text>
                  </View>
                  <View style={styles.dateCon}>
                      <Text></Text>
                  </View>
                </View>
              )}
            />
            </View>          
          </View>
      </View>
      </View>
    </View>
  )
}

export default Clearance

const styles = StyleSheet.create({

  innerCOn:{
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-around', 
    height: 52, 
    borderWidth: 2, 
    borderRadius: 10,
    borderColor: 'rgba(15, 91, 255, 1)'
  },
  dashboartxt:{
    fontSize: 25,
    fontWeight: 700,
    color: 'rgba(54, 104, 196, 1)',
    marginTop:5.5,
    marginLeft: 20
  },
  logo:{
    width: '30%',
    height: 50,
    marginLeft: 20,
    marginTop: 5
    
  },
  headerCon:{
    width: '90%', 
    height: 52, 
    justifyContent:'flex-start',
    borderRadius: 10,
    marginLeft:'5%',
  },
  wrapper: {
    marginTop: '2%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // This centers the rotated view
  },
  header1:{
    borderBottomWidth: 2,  
    width: '28%', 
    height:'14%', 
    backgroundColor:'rgba(46, 3, 3, 1)'
  },
  header2:{
    borderBottomWidth: 2, 
    borderLeftWidth: 2, 
    borderRightWidth: 2, 
    width: '32%', 
    height:'14%', 
    backgroundColor:'rgba(46, 3, 3, 1)', 
    justifyContent:'center', 
    alignItems:'center'
  },
  header3:{
    borderBottomWidth: 2, 
    borderRightWidth:2,
    width: '20%', 
    height:'14%', 
    backgroundColor:'rgba(91, 94, 4, 1)',
    alignItems:'center',
    justifyContent:'center'

  },
  header4:{
    borderBottomWidth: 2, 
    width: '20%', 
    height:'14%', 
    backgroundColor:'rgba(91, 94, 4, 1)',
    alignItems:'center',
    justifyContent:'center'

  },
  maiNcon:{ 
    position:'absolute' ,
    backgroundColor: 'rgba(129, 153, 218, 0.3)',
    justifyContent:'center', alignItems:'center',
    padding: '3%',
    marginTop:'-40%',
    marginLeft:'4%'
  },
  headertxt:{
    fontSize: 60, 
    fontWeight:800, 
    // color:'rgba(25, 33, 71, 1)',
    color:'rgba(1, 1, 1, 1)',
    marginLeft:'16%'
  },
  headerCON:{
    width: '90%', 
    height:'98%', 
    flexDirection: 'row', 
    justifyContent:'center', 
    backgroundColor:'white',
    marginLeft:'10.5%', 
    marginBottom:4, 
    marginTop: 2, 
    borderWidth: 2, 
    borderColor: 'black'
  },
  dataCON:{
    flexDirection: 'row', 
    width:'89.5%' ,
    justifyContent:'center',
    marginLeft:'10.5%'
  },
  flatCon:{
    width: '100%', 
    height: '82%', 
    justifyContent:'center', 
    position:'absolute', 
    marginTop:'6%'
  },
  assignedOfficerCOn:{
    width:'32.1%', 
    borderBottomWidth: 2, 
    borderLeftWidth: 2, 
    borderRightWidth: 2,
    padding:6, 
    borderColor:'black'
  },
  roleCOn:{
    borderBottomWidth: 2,  
    width: '28.2%',
    padding:6, 
    borderColor:'black'
  },
  statusCon:{
    width:'20%',
    borderBottomWidth: 2, 
    padding: 6, 
    borderColor: 'black'
  },
  dateCon:{
    width:'20%',
    borderBottomWidth: 2, 
    padding: 6, 
    borderColor: 'black',
    borderLeftWidth:2,
    justifyContent:'center',
    alignItems:'center'
   
  },
  headerstxt:{
    color:'white', 
    fontWeight:800
  }
})