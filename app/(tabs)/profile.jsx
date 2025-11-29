import { StyleSheet, Text, View,Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Modal  from 'react-native-modal';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {

  const router = useRouter();
  const [name, setName] = useState("Jhon Doe");
  const [course, setCourse] = useState("Batchelor of Science in Information Technology");
  const [year, setYear] = useState("3rd");
  const [studentType, setStudentType] = useState("Old");
  const [email ,setEmail] = useState("jhonDoe@gmail.com");
  const [address, setaddress] = useState("123 Main Street, Apt 4B, Los Angeles, CA 90012");
  const [phonenumber, setphoneNumber] = useState("+63 917 123 4567");
  const [visible ,setmodalVisible] = useState(false)
  
  useEffect(()=>{
    const checkLogin = async()=>{
      const isLogged = await AsyncStorage.getItem('isLoggedIn');
      if(isLogged !== 'true'){
        router.push('/login');
      }
      checkLogin();
    }
  },[]);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    router.replace('/login');
    

  }
  const handleChangepassword = () => {
    router.push('/changepass');
    
  }

  return (
    <View style={{width: '100%',height:'100%'}}>
      <View style={styles.imgCon1}>
        <Image source={require('../../assets/icon-occ.webp')} style={styles.img}></Image>
      </View>
      <View style={styles.con}>
        <TouchableOpacity onPress={()=>setmodalVisible(true)}>
          <Image source={require('../../assets/menus.png')} style={styles.menuicon}></Image>
        </TouchableOpacity>
        <View>
          <View style={styles.imgCon}>
            <Image source={require('../../assets/user.png')} style={{width: 120,height: 120}}></Image>
          </View>

          <TouchableOpacity>
            <Image></Image>
          </TouchableOpacity>

          <View style={styles.fullnameCon}>
            <Text style={styles.fulnametxt}>Full name</Text>
            <Text numberOfLines={2} style={styles.userName}>{name}</Text>
          </View>

          <View style={styles.con1}>
            <View style={styles.infoCon}>
              <Text style={styles.label}>Course</Text>
              <Text numberOfLines={2} lipsizeMode='tail' style={styles.val}>{course}</Text>
            </View>
            <View style={styles.infoCon}>
              <Text style={styles.label}>Year</Text>
              <Text style={styles.val}>{year}</Text>
            </View>
            <View style={styles.infoCon}>
              <Text style={styles.label}>Type</Text>
              <Text style={styles.val}>{studentType}</Text>
            </View>
          </View>

          <View style={styles.con2}>
              <View  style={styles.infoCon}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.val}>{email}</Text>
              </View>
              <View  style={styles.infoCon}>
                <Text style={styles.label}>Phone Number</Text>
                <Text style={styles.val}>{phonenumber}</Text>
              </View>
              <View  style={styles.infoCon}>
                <Text style={styles.label}>Address</Text>
                <Text style={styles.val}>{address}</Text>
              </View>

          </View>
        </View>
        <Modal
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        isVisible={visible}
        onBackdropPress={()=>setmodalVisible(!visible)}
        >
          <View style={styles.mainCon}>
                <View style={styles.menuConbtn1}>
                  <TouchableOpacity style={styles.menubtn} onPress={handleChangepassword}>
                    <Text style={styles.btntxt}>Change Password</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.menuConbtn2}>
                  <TouchableOpacity style={styles.menubtn} onPress={handleLogout}>
                    <Text style={styles.btntxt}>Log Out</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.foot}>
                  <View>
                    <TouchableOpacity>
                      <Text>Help |</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Text> Support</Text>
                    </TouchableOpacity>
                  </View>
                </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  con:{
      position:'absolute',
      marginTop: '10%',
      width: '95%',
      height: '94%',
      marginLeft: '2.5%',
      backgroundColor: 'rgba(129, 153, 218, 0.3)',
      borderRadius: 10
  },
  fullnameCon:{
    width:'90%', 
    height:'40%', 
    marginTop:'-26%',
    marginBottom:'8%', 
    marginLeft:'5%',
    justifyContent:'center',
    alignItems:'center'
  },
  fulnametxt:{
    fontSize:15, 
    fontWeight:600, 
    color:'rgba(43, 35, 35, 1)'
  },
  userName:{
    fontSize:30, 
    fontWeight:'800', 
    marginTop:'-3%',
    textAlign:'center'
  },
  imgCon:{
    width: 150,
    height: 150, 
    borderRadius: '50%',
     borderWidth: 2, 
     borderColor:'rgba(174, 40, 40, 1)',
     backgroundColor:'rgba(6, 51, 102, 1)',
     justifyContent:'center',
     alignItems:'center',
     marginLeft:'30%',
    marginTop:'-5%', 
    marginBottom:'2%'
  },
  imgCon1:{
    width:'90%', 
    height: '64%',
    marginTop:'40%', 
    marginLeft:'5%'
  },
  con1:{
    width:'90%', 
    height:'27%',
    marginLeft:'5%',
    borderRadius:10,
    borderWidth:2,
    borderColor:'rgba(17, 19, 82, 1)', 
    backgroundColor:'rgba(191, 217, 228, 0.55)', 
    marginTop:'-28%'
  },
  img:{
    width: '100%',
    height: '90%',
    opacity:0.2,
  },
  con2:{
    width:'90%', 
    height:'28%',
    marginLeft:'5%',
    borderRadius:10,
    borderWidth:2,
    borderColor:'rgba(17, 19, 82, 1)', 
    backgroundColor:'rgba(191, 217, 228, 0.55)', 
    marginTop:'2%'
  },
  menuicon:{
    width:50,
    height:50, 
    marginLeft:'3%', 
    marginTop:'3%'
  },
  label:{
    color:'black', 
    fontSize: 16
  },
  val:{
    color:'rgba(17, 19, 82, 1)', 
    fontSize: 14,
    fontWeight:800},
  infoCon:{
    marginLeft:'3%', 
    width:'90%', 
    marginTop:'2%'
  },
  menuConbtn1:{
    width:'100%', 
    height:'30%',
    marginTop:'10%',  },
  menuConbtn2:{
    width:'100%', 
    height:'30%',
    marginTop:'-60%',  },
  menubtn:{ 
    width:'100%',
    height:'20%',
    backgroundColor:'rgba(155, 155, 155, 0.65)'
  },
  btntxt:{
    marginLeft:'10%',
    marginTop:'4%'
  },
  mainCon:{
    width:'80%', 
    height:'98%',
    marginLeft:'-10%',
    marginTop:'-15%', 
    backgroundColor:'rgba(237, 241, 247, 1)'
  },
  foot:{
    width:'100%', 
    height:'30%', 
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'98%'
  }
})