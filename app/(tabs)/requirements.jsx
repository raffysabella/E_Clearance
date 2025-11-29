import { StyleSheet, Text, View, FlatList,Image, TouchableOpacity, Modal,TextInput,Dimensions,Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect,useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Requirements = () => {


const [modalVisibility, setVisiblity] = useState(false);
const [title , setTitle] = useState();
const [description, setDiscription] = useState();
const [date, setDate] = useState();
const [keyboardVisible, setKeyboardVisible] = useState(false);
const [name, setName] = useState();
const [paymentMod, setPaymentMod] = useState(false)
const [sanction, setSanction] = useState()

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

useEffect(()=>{
    const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
        
    return() => {
        showSub.remove();
        hideSub.remove();
      }
    },[])

const setData = (title,description,date,name,sanction)=>{
  setTitle(title);
  setDiscription(description);
  setDate(date);
  setName(name);
  setVisiblity(true);
  setSanction(sanction)

  
}

const requirements = [
  {
    id: 1,
    name: "Registrar",
    title: "School ID Verification",
    description: "Please upload or present your valid School ID for verification.",
    status: "Pending",
    hasSanction: false,
    date: "2024-01-16"
  },
  {
    id: 2,
    name: "Registrar",
    title: "Form 137 Submission",
    description: "Students transferring from another school must submit their Form 137.",
    status: "Pending",
    hasSanction: false,
    date: "2024-02-01"
  },
  {
    id: 3,
    name: "Guidance Office",
    title: "Sanction Fee",
    description: "You have an outstanding sanction of ₱200 that must be settled.",
    status: "Unsettled",
    amount: 200,
    hasSanction: true,
    date: "2024-02-10"
  },
  {
    id: 4,
    name: "Library",
    title: "Book Return",
    description: "Please return the borrowed book: 'Programming Fundamentals'.",
    status: "Overdue",
    hasSanction: false,
    date: "2024-02-05"
  },
  {
    id: 5,
    name: "Library",
    title: "Lost Book Fee",
    description: "Penalty for lost book. Please settle the amount.",
    amount: 350,
    status: "Unpaid",
    date: "2024-02-11",
    hasSanction: true
  },
  {
    id: 6,
    name: "Accounting",
    title: "Laboratory Fee",
    description: "Pending payment for Laboratory Fee.",
    amount: 500,
    hasSanction: true,
    status: "Pending",
    date: "2024-01-20"
  },
  {
    id: 7,
    name: "Department Head",
    title: "Subject Clearance",
    description: "Please coordinate with your professor for pending requirements.",
    status: "Incomplete",
    hasSanction: false,
    date: "2024-01-30"
  },
  {
    id: 8,
    name: "Clinic",
    title: "Medical Clearance",
    description: "Submit your updated medical certificate.",
    status: "Pending",
    hasSanction: false,
    date: "2024-02-03"
  },
  {
    id: 9,
    name: "Registrar",
    title: "Good Moral Requirement",
    description: "Transfer students must submit a Good Moral Certificate.",
    status: "Pending",
    hasSanction: false,
    date: "2024-02-08"
  },
  {
    id: 10,
    name: "IT Department",
    title: "Email Reset Required",
    description: "Please reset your school email password for account security.",
    status: "Pending",
    hasSanction: false,
    date: "2024-02-06"
  }
]

    
  return (
    <View >
      <View  style={styles.container}>
        <View style={styles.innerCon}>
            <View style={styles.requirementsCon}>
                <View>
                    <Text style={styles.headertxt}>
                        Requirements
                    </Text>
                </View>
                <FlatList
                 data={requirements}
                 keyExtractor={(item)=> item.id}
                 renderItem={({item})=>(
                  <View style={styles.requirements}>
                    <View style={styles.infoCOn}>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{marginRight: '5%'}}>
                            <Image source={require('../../assets/icon-occ.webp')} style={styles.img}></Image>
                          </View>
                          <View >
                            <Text style={styles.nameAndDate}>
                              {item.name}
                            </Text>
                          </View>
                        </View>
                        <View>
                          <Text style={styles.nameAndDate}>{item.date}</Text>
                        </View>
                    </View>

                    <View style={styles.requirementsInfo}>
                      <Text style={styles.txtName} >
                        {item.name}
                      </Text>
                      <Text style={styles.titleAndDescriptiontxt} numberOfLines={2} lipsizeMode="tail" > 
                        {item.description}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity style={styles.viewbtn} key={item.id} onPress={()=>setData(item.title, item.description,item.date,item.name,item.hasSanction)}>
                        <Text style={{color:'white'}}>
                          View
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  
                 )}/>
              <View style={{height: '5%', width: '80%'}}></View>
            </View>
 
      <Modal
        animationType="fade"
        transparent = {true}
        visible = {modalVisibility}
        onRequestClose={()=>setVisiblity(!modalVisibility)}
        >   
            <SafeAreaView style={[styles.modalCon, {bottom: keyboardVisible ? SCREEN_HEIGHT * 0.05 : SCREEN_HEIGHT * 0.15,
             width: SCREEN_WIDTH * 0.85,}]}>
                <View style={styles.modHeader}>
                  <View style={styles.imgV}>
                    <Image source={require('../../assets/icon-occ.webp')} style={styles.occImg}></Image>
                  </View>
                  <View style={styles.nameV}>
                    <Text style={styles.nameVal}>{name}</Text>
                  </View>
                  <View style={styles.dateV}>
                    <Text style={styles.dateVal}>{date}</Text>
                  </View>
                </View>
                <View style={styles.modalInnerCon}>
                  <View>
                    <View style={{width:'70%', height:'16%', backgroundColor:'rgba(31, 23, 70, 1)', justifyContent:'center',alignItems:'center',marginLeft: '2%', borderRadius:15, marginTop:'4%'}}>
                      <Text style={styles.modtitle}>
                        {title}
                      </Text>
                    </View>
                    <View style={{width:'96%', height:'50%', borderColor:'rgba(31, 23, 70, 1)',borderWidth:2,marginLeft: '2%', borderRadius:10, marginTop:'2%'}}>
                      <Text style={styles.modDescript}>
                         {description}
                      </Text>
                    </View>
                  </View>

                  <View>
                    {sanction ? (
                      <TouchableOpacity  onPress={()=>setPaymentMod(true)} style={styles.paybtn}><Text 
                      style={styles.paytxt}>Pay Online</Text></TouchableOpacity>
                    ):(<Text > </Text>)
                    
                    }
                  </View>
                </View>
                <Modal
                  animationType='fade'
                  transparent
                  visible={paymentMod}
                  onRequestClose={()=>setPaymentMod(!paymentMod)}
                  
                >
                  <View style={styles.qrV}>
                    <Image source={require('../../assets/CashG.jpg')} style={styles.qrImg}></Image>
                  </View>
                </Modal>


                </SafeAreaView>

        </Modal>
            
        </View>
      </View>

    </View>
  )
}

export default Requirements

const styles = StyleSheet.create({
    container:{
        marginTop: '10%',
        width: '100%',
        height: '94.5%',
        backgroundColor: 'rgba(129, 153, 218, 0.3)',
        borderRadius: 10
    },
    innerCon:{
        marginTop: '2%',
        width: '95%',
        height: '98%',
        marginLeft: '2.5%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 15,
       
    },
    requirementsCon:{
        marginTop: '4%',
        width: '95%',
        height: '95%',
        marginLeft: '2.5%',
        // backgroundColor: 'rgba(129, 153, 218, 0.3)',
        borderRadius: 15,
    },
    requirements:{
      backgroundColor: 'white',
      width: '95%',
      borderRadius: 10,
      marginLeft: '2.5%',
      marginTop: '2%',
      padding: 10,
      borderWidth: 2,
      borderColor:'rgba(8, 12, 59, 1)'

    },
    titleAndDescriptiontxt:{
      color:'rgba(8, 12, 59, 1)',
      fontSize: 10,
      fontWeight: 800,
      
    },
    requirementsInfo:{
      backgroundColor: 'rgba(196, 208, 236, 0.68)',
      padding: 10,
      borderRadius: 10,
      marginTop: '2%'
    },
    viewbtn:{
      width: '28%',
      backgroundColor: 'rgba(8, 12, 59, 1)',
      padding: 3,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '4%',
      marginLeft: '70%'
    },
    modalCon:{
      position:'absolute',
      width: '95%', 
      minHeight:'70%',
      backgroundColor:'rgba(8, 12, 59, 1)',
      borderRadius: 10,
      marginLeft: '8%',
      marginTop:'10%',

    },
    modalInnerCon:{
      width: '90%', 
      height:'80%', 
      backgroundColor:'rgba(248, 249, 255, 1)',
      borderRadius: 10,
      marginLeft: '5%',
      flexDirection:'column'
      // elevation: 20

    },
    nameAndDate:{
      color:'rgba(8, 12, 59, 1)',
      fontSize: 12,
      fontWeight: 800,
    },
    modHeader:{
      width:'100%', 
      height:'12%', 
      marginTop:'6%', 
      marginLeft:'5%', 
      flexDirection:'row'
    },
    occImg:{
      width: 50, 
      height:50, 
      position:'absolute'
    },
    imgV:{
      width:'16%', 
      height:'100%'
    },
    nameV:{
      width:'56%', 
      height:'50%',
      marginTop:'2%'
    },
    nameVal:{
      color:'white', 
      fontSize:22, 
      fontWeight: 800
    },
    dateV:{
      width:'20%', 
      height:'40%',
      marginTop:'4%'
    },
    dateVal:{
      color:'white', 
      fontSize:12, 
      fontWeight: 600
    },
    modtitle:{
      fontSize:20, 
      color:'white', 
      fontWeight:800
    },
    modDescript:{
      fontSize:16,
      marginLeft:'4%' ,
      color:'rgba(34, 30, 30, 1)', 
      fontWeight:600
    },
    paybtn:{
      width:'50%', 
      height:'30%',
      backgroundColor:'rgba(23, 22, 69, 1)', 
      borderRadius:30, 
      marginLeft:'25%',
      marginTop:'10%'
    },
    paytxt:{
      fontSize:16,
      fontWeight: 800, 
      textAlign:'center',
      color:'white', 
      marginTop:10
    },
    qrV:{
      marginTop: '100%', 
      marginLeft:'32%'
    },
    qrImg:{
      width:150, 
      height:150
    },
    img:{
      width: 20,
      height: 20, 
      opacity: 0.5
    },
    txtName:{
      color: 'rgba(8, 12, 59, 1)', 
      fontSize: 15, 
      fontWeight: 800
    },
    infoCOn:{
      width: '90%', 
      flexDirection: 'row', 
      justifyContent:'space-between' 
    },
    headertxt:{
      fontSize: 30, 
      fontWeight: 800, 
      marginLeft: 10, 
      marginBottom: 3
    }
})