import { StyleSheet, Text, View,TextInput,Image,
TouchableOpacity, Platform,KeyboardAvoidingView, Modal,
Keyboard, Dimensions, ActivityIndicator,StatusBar} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BlurView } from 'expo-blur'
import { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'



const Login = () => {
    // const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight;
    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

    const router = useRouter();
    const [studId, setStudId] = useState('');
    const [password, setPassword] = useState('');
    const [showpass, setShowpass] = useState(false)
    const [keyboardVisible , setKeyboardVisible] = useState(false);
    const [modal,setModal] = useState(true)
    const [isLoading, setLoading] = useState(false)
    
    useEffect(()=>{
        const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
        const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
        
        return() => {
            showSub.remove();
            hideSub.remove();
        }
    },[]);

    useEffect(()=>{
        const checkLogin = async ()=>{
            const isLogged = await AsyncStorage.getItem('isLoggedIn');
            if(isLogged === 'true'){
                router.push('/home');
            }
        };

        checkLogin();
    },[]);

 const handleLogin = async () => {
    if (!studId.trim() || !password.trim()) {
            Alert.alert("Error", "Please enter both Student ID and Password");
            return;
     }
    try {
      const response = await axios.post(
          'http://192.168.137.1/E_Clearance_backend/login.php',
          {studId:studId.trim(),password:password.trim()},
          {headers: { 'Content-Type': 'application/json' }},
          setLoading(true)
         
        );

      const data = response.data;
      if (data.success) {
        await AsyncStorage.setItem('isLoggedIn','true');
        Alert.alert("Success", data.message);
        console.log("Student info:", data.student);
        router.replace('/home')
      } else {
        Alert.alert("Error", data.message);
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Something went wrong. Check your connection.");
    }
  };
//    const handleLogin = () =>{
//        router.replace('/home') 

//    }
    const resetPass = () => {
        router.push('/authentication')
    };
    return(
        <>
        <LinearGradient
        colors={['#17171bff', '#7b9ee6ff', '#c5d3e0ff']}
        start={{x: 0.00, y: 0.98}}
        end={{x: 0.02, y: 0.00}}
        style={{ flex: 1 , marginTop:'10%'}}
        >
            <SafeAreaView style={{flex:1}}>
            <Image source={require('../../assets/icon-occ.webp')} style={styles.occlogo}>     
            </Image>
                <View style={[styles.container, {bottom: keyboardVisible ? SCREEN_HEIGHT * 0.35 : SCREEN_HEIGHT * 0.15,
                width: SCREEN_WIDTH * 0.85,}]}>
                    
                    <View style={styles.form}>
                        <Text style={styles.logintxt}>Login</Text>
                        <Text style={styles.signIn}>Sign in to continue</Text>
                        <TextInput placeholder='Student ID' style={styles.txtInput} value={studId} keyboardType='numeric' onChangeText={(e)=>setStudId(e)}></TextInput>
                        <TextInput placeholder='Password' style={styles.txtInput} secureTextEntry={!showpass} value={password} onChangeText={(pass)=>setPassword(pass)}></TextInput>

                        <TouchableOpacity onPress={()=>setShowpass(!showpass)} style={{width:'30%', height:'16%', marginTop:'-6%',marginLeft:'55%'}}>
                            <Image source={showpass?require('../../assets/eye-close-up.png'):require('../../assets/close-eye.png')}style={styles.eye}></Image>
                        </TouchableOpacity>
                        
                        {isLoading? <ActivityIndicator size="large"/> :
                        <LinearGradient
                            colors={['#2b466fff', '#ecebefff', '#2b466fff']}
                            start={{x: 1.00, y: 0.50}}
                            end={{x: 0.00, y: 0.50}}
                            style={styles.loginbtn}
                        >
                            <TouchableOpacity style={{width: 200, height:50,borderRadius: 20}}
                                onPress={handleLogin}
                            >
                                <Text style={styles.loginbtntxt}>Log In</Text>
                            </TouchableOpacity>    
                        </LinearGradient>  }

                        <TouchableOpacity onPress={resetPass}>
                            <Text style={styles.forgotPass}>
                                Forgot Password
                            </Text>
                        </TouchableOpacity>    
                    </View>
                </View>  
            </SafeAreaView>

        </LinearGradient>
    
    </>
  );
};
export default Login

const styles = StyleSheet.create({

    container:{
        position:'absolute',
        width: '90%',
        height: '70%',
        backgroundColor: 'rgba(0,0,0,0.10)',
        marginLeft:'8%',
        borderRadius: 10,
        marginTop:'20%',
        flex: 1,

    },
    occlogo:{
        width: 380, 
        height: 380, 
        opacity:0.3,
        marginTop:200, 
        marginLeft:5
    },
    form:{
        width: '100%',
        height: '100%',
        justifyContent:'center',

    },
    signIn:{
        textAlign:'center',
        color: 'white',
    },
    txtInput:{
        fontSize: 15,
        width:'80%',
        height: 40,
        color:'black',
        backgroundColor:'white',
        borderRadius:5,
        borderWidth:2,
        borderColor: 'black',
        marginLeft:28,
        marginTop:10,
    },
    logintxt:{
        fontSize: 80,
        fontWeight:600,
        color:'rgba(7, 31, 86, 1)',
        textAlign:'center',

    },

    loginbtntxt:{
        fontSize:25,
        fontWeight:800,
        color:'black',
        textAlign:'center',
 
    },
    loginbtn:{
        textAlign:'center',
        marginLeft:'15%',
        marginTop:4,
        width:'66.5%',
        height: 41,
        borderWidth:2,
        borderRadius: 20, 
        borderColor:'black'  
    },
    forgotPass:{
        textAlign:'center',
        marginTop:'10%',
        color:'white',
        fontWeight: 800
    },
    changePass:{
        marginTop:'42%',
        marginLeft:'8%',
        width: '86%',
        height: '66%',
        backgroundColor:'rgba(77, 127, 213, 1)',
        borderRadius:10
    },
    lockImg:{
        width:'80%', 
        height:'70%',
        marginTop:'20%',
        marginLeft:'5%',
        opacity: 0.3,
    
    },
    innerCOn:{
        height:'60%',
        width:'90%',
        marginTop:'50%',
        marginLeft:'5%',
        borderRadius:10,
        alignItems:'center',
        backgroundColor:'rgba(12, 11, 33, 0.48)'

    },

    modalCon:{
        marginTop:'42%',
        marginLeft:'8%',
        width: '86%',
        height: '66%',
        backgroundColor:'rgba(77, 127, 213, 1)',
        borderRadius:10,
        position:'absolute'
    },
    eye:{
        width: 20, 
        height: 20,
        marginLeft:'78%', 
        marginTop:'-9%'
    }


})