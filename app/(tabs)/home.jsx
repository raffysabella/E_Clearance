import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView  } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import React, { useState } from 'react'
import Tab from './_layout';
import { useRouter } from 'expo-router';

const StudentDashboard = () => {
  const router = useRouter()
  const [name, setName] = useState("Ruf");
  const [notify, setNotify] = useState(4);
  const updatedClearance = [{ id: 1,status:"Registrar has Signed You"}, { id: 2, status: "CSG Presedent has Signed You"},{ id: 3,status: "Librarian has Signed You"}
    ,{id: 4,status:"Registrar has Signed You"}];
  console.log(updatedClearance);
  
  const handleClerancebtn = ()=>{
    router.push('/clearance');
  };
  const handleRequirementsbtn = ()=>{
    router.push('/requirements')
  }

  return (  
      <View style={{backgroundColor:'rgba(227, 227, 242, 1) ',marginTop:'10%'}}>
        <LinearGradient
        colors={['#eeeeeeff','#a9bbe0ff']}
        start={{x: 1.00, y: 0.50}}
        end={{x: 0.00, y: 0.50}}
        style={styles.headerCon}
      >   
         <View style={styles.innerCOn}> 
            <View style={{width: '70%'}}>
              <Text style={styles.dashboartxt}>Students Dashboard</Text>
            </View>
            <View style={styles.logo}>
              <Image source={require('../../assets/icon-occ.webp')} style={{width:40, height:40 , opacity:0.5}}>
              </Image>
            </View>
          </View> 
          </LinearGradient>

        {/* Welcome Container */}
        <View style={styles.Con}>
            <View style={styles.notifyCon}>
              <View style={styles.welcomeCon}>
                <Text style={styles.welcometxt}>
                  Welcome, {name} !
                </Text>
              </View>
              <Text style={styles.numberOfNotiftxt}>You have <Text style={{fontWeight:800}}>{notify}</Text> new requirements</Text>
              <TouchableOpacity style={styles.requirementsbtn} onPress={handleRequirementsbtn}>
                <Text style={styles.reqbtntxt}>See Requirements</Text>
              </TouchableOpacity>
            </View>
        {/* end */}

        {/* Update Container */}
        <View style={styles.updateCon}>
              <View style={styles.updateHeader}>
                <Text style={styles.headertxt}>Clearance Update</Text>
              </View>
              <FlatList
                data={updatedClearance}
                keyExtractor={(item)=> item.id}
                renderItem={({item})=>(
                    <View style={styles.statusCon}>
                      <View>
                        <Image source={require('../../assets/check (1).png')} style={styles.checkIcon}></Image>
                      </View>
                      <View>
                        <Text style={styles.statustxt}>{item.status}</Text>
                      </View>
                    </View>
                )}
              />
              <TouchableOpacity style={styles.gotoClearancebtn} onPress={handleClerancebtn}>
                <Text style={styles.gotoclearancetxt}>Go to clearance</Text>
              </TouchableOpacity>
            </View>
            {/* end       */}

            {/* Quick Action Container */}
            <View style={styles.quickActCon}>
                <View style={styles.quickActHeader}>
                  <Text style={styles.quickActtxt}>Quick Action</Text>
                </View>

                <View style={{flexDirection:'row', justifyContent: 'start', marginTop: 10, marginLeft: 20}}>
                  <View>
                    <TouchableOpacity style={styles.quickActbtn} onPress={handleClerancebtn}>
                      <Image source={require('../../assets/id-card.png')} style={{width:40, height: 40, tintColor: 'white'}}></Image>
                    </TouchableOpacity>
                    <View style={styles.quickActTxtCon}>
                      <Text style={styles.Actbtntxt}>
                        View{"\n"}Clerance
                      </Text>
                    </View>
                  </View>
                  <View style = {{marginLeft: 20}}>
                    <TouchableOpacity style={styles.quickActbtn} onPress={handleRequirementsbtn}>
                      <Image source={require('../../assets/letter.png')} style={{width:40, height: 40, tintColor: 'white'}}></Image>
                    </TouchableOpacity>
                    <View style={styles.quickActTxtCon}>
                      <Text style={styles.Actbtntxt}>
                        View{"\n"}Requirements
                      </Text>
                    </View>
                  </View>
                </View> 
            </View>
          {/* end */}

        </View>
        
      <Tab></Tab>
      </View>
  )
}

export default StudentDashboard

const styles = StyleSheet.create({
  headerCon:{
    width: '90%', 
    height: '7.5%', 
    justifyContent:'flex-start',
    marginTop: '2%',
    borderRadius: 10,
    marginLeft:'5%'
  },
  innerCOn:{
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-around', 
    height: 52, 
    borderWidth: 3, 
    borderRadius: 10,
    borderColor: 'rgba(8, 12, 59, 1)'
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
    hieght: 50,
    marginLeft: 20,
    marginTop: 5
    
  },
  Con:{
    width: '95%',
    height: '90%',
    backgroundColor: 'rgba(129, 153, 218, 0.3)',
    marginLeft: '2.5%',
    borderRadius: 10,
    marginTop: '2%',
  },
  notifyCon:{
    height: '25%',
    width: '90%',
    marginLeft: '5%',
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
    borderTopLeftRadius: 0
  },
  welcomeCon:{
    width: '100%',
    height: '25%',
    borderBottomRightRadius: 5,
    marginBottom: '6%'
  },
  welcometxt:{
    fontSize: 20,
    color: 'rgba(45, 64, 160)',
    fontWeight: 800,
    marginTop:'2%',
    marginLeft: '5%',
    marginBottom: '2%' ,
    flexShrink: 1
  },
  numberOfNotiftxt:{
    fontSize: 20,
    color: 'rgb(45, 64, 160)',
    textAlign: 'center',
    marginBottom: '5%',
  
  },
  requirementsbtn:{
    width: '50%',
    height: '22%',
    backgroundColor: 'rgba(8, 12, 59, 1)',
    marginLeft: '48%',
    borderRadius: 20,
    marginTop: '2%',
    marginBottom: '3%'
  },
  reqbtntxt:{
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    fontWeight: 500,
    marginTop: 8,

  },

  //Update Container Styles
  updateCon:{
    height: '43%',
    width: '90%',
    marginLeft: '5%',
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
    borderTopLeftRadius: 0
  },
  statusCon:{
    flexDirection: 'row', 
    width: '95%' ,
    borderRadius: 5, 
    backgroundColor: 'white',
    marginLeft:'2.5%',
    borderWidth:2,
    borderColor:'rgba(10, 16, 67, 1)',
    marginTop: 2,
    marginBottom: 2,
    padding: 5
  },
  checkIcon:{
    width:30,
    height: 30,
    marginLeft: '8%',
    marginTop:'5%',
  },
  statustxt:{
    fontSize: 13,
    marginTop: '5%',


  },
  updateHeader:{
    width: '95%',
    height: '15%',
    backgroundColor: 'rgba(8, 12, 59, 1)',
    marginLeft: '2.5%',
    borderRadius: 10,
    marginTop: '3%',
    marginBottom: 10,
  },
  headertxt:{
    fontSize: 25,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: 800,
    textAlign:'center',
    marginTop: 2

  },
  gotoClearancebtn:{
    width: '50%',
    height: '12%',
    backgroundColor: 'rgba(8, 12, 59, 1)',
    marginLeft: '48%',
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 10
  },
  gotoclearancetxt:{
    textAlign: 'center',
    marginTop:5,
    color: 'white',
    fontWeight: 600
  },


  // Quick Actions Container Styles

  quickActCon:{
    height: '25%',
    width: '90%',
    marginLeft: '5%',
    marginTop: 12,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
    borderTopLeftRadius: 0
  },
  quickActHeader:{
    height: '25%',
    width: '90%',
    marginLeft: '5%',
    marginTop: 5,
    backgroundColor: 'rgba(8, 12, 59, 1)',
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center'
  },
  quickActtxt:{
    fontSize: 20,
    color:'rgba(255, 255, 255, 1)',
    fontWeight: 800
  },
  quickActbtn:{
    width: 60,
    height: 60,
    borderRadius: '50%',
    backgroundColor: 'rgba(8, 12, 59, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12
  },
  quickActTxtCon:{
    width: 80,
    height: 35, 
    justifyContent:'center', 
    alignItems:'center'
  },
  Actbtntxt:{
    fontSize: 11, 
    textAlign:'center', 
    marginTop: 2,
    fontWeight: 500, 
    marginLeft: 2}
  
})