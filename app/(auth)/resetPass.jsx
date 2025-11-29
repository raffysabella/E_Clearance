import { StyleSheet, Text, View,Dimensions,Keyboard,Image,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useState,useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const ResetPass = () => {
    const router = useRouter();
    const [studId, setStudID] = useState();
    const [newpass, setNewPass] = useState();
    const [confirmPass, setConfirmPass] = useState();
    const [newPassVissible, setNewPassVissible] = useState(false);
    const [confirmPassVisible, setConfirmPassvisible] = useState(false);

    const [keyboardVisible , setKeyboardVisible] = useState(false)
    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

    useEffect(()=>{
        const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
        const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
        
        return() => {
            showSub.remove();
            hideSub.remove();
        }
    },[])
    const handlepassReset = () => {
        alert(
        "Password Updated \n Your password has been reset successfully. You can now log in with your new password."
        );
        router.push('/login')
        
    }



  return (
    
        <LinearGradient
            colors={['#17171bff', '#7b9ee6ff', '#c5d3e0ff']}
            start={{x: 0.00, y: 0.98}}
            end={{x: 0.02, y: 0.00}}
            style={{flex:1,marginTop:'10%'}}
        >
                            
            <SafeAreaView>
            <View style={[styles.outerCOn, {bottom: keyboardVisible ? SCREEN_HEIGHT * 0.35 : SCREEN_HEIGHT * 0.15, width: SCREEN_WIDTH * 0.85,}]}>
                <Image source={require('../../assets/secure.png')} style={styles.lockImg}></Image>
                <View style={{position:'absolute',marginBottom:'70%', width: '80%',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:50,fontWeight:800,color:'rgba(17, 35, 69, 1)', textAlign:'center',lineHeight: 40}}>
                        Reset Password
                    </Text>
                </View>
                <View style={styles.resetCon}>
                    <Text style={styles.inputLabel}>ID number</Text>
                    <TextInput style={styles.resetpassInput} value={studId}></TextInput>
                    <Text style={styles.inputLabel}>New Password</Text>

                    <TextInput style={styles.resetpassInput} value={newpass} secureTextEntry={!newPassVissible}></TextInput>
                    

                    <Text style={styles.inputLabel}>Confirm Password</Text>
                    <TextInput style={styles.resetpassInput} value={confirmPass} secureTextEntry={!confirmPassVisible}></TextInput>
                    
                    <TouchableOpacity onPress={()=>setConfirmPassvisible(!confirmPassVisible)} style={styles.confirmEyebtn}>
                            <Image source={confirmPassVisible ? require('../../assets/eye-close-up.png'):require('../../assets/close-eye.png')}
                            style={styles.confirmEye}
                            ></Image>
                    </TouchableOpacity> 
                     <TouchableOpacity onPress={()=>setNewPassVissible(!newPassVissible)} style={styles.newPassbtn}>
                            <Image source={newPassVissible ? require('../../assets/eye-close-up.png'):require('../../assets/close-eye.png')}
                            style={styles.newpassEye}
                            ></Image>
                    </TouchableOpacity>

                </View>
                    <LinearGradient
                        colors={['#2b466fff', '#ecebefff', '#2b466fff']}
                        start={{x: 1.00, y: 0.50}}
                        end={{x: 0.00, y: 0.50}}
                        style={styles.confirmbtn}
                    >
                        <TouchableOpacity style={{width: 200, height:50,borderRadius: 20}}
                            onPress={handlepassReset}
                        >
                            <Text style={styles.confirmbtntxt}>Confirm</Text>
                        </TouchableOpacity>    
                    </LinearGradient> 
            </View>
            </SafeAreaView>
        </LinearGradient>
    
    
  )
}

export default ResetPass

const styles = StyleSheet.create({

    lockImg:{
        marginTop:'20%',
        width: '90%',
        height:'66%',
        opacity: 0.3
    },
    outerCOn:{
        height:'66%',
        width:'90%',
        backgroundColor:'rgba(38, 84, 154, 0.3)',
        justifyContent:'center',
        alignItems:'center',
         marginTop:'70%',
         marginLeft:'8%',
        borderRadius:10,


    },
    resetpassInput:{
        fontSize: 15,
        fontWeight:800,
        width:'90%',
        height: '30%',
        color:'black',
        borderBottomWidth:2, 
        borderColor: 'black',
        marginBottom:'2%',
        marginLeft:'5%',
        paddingBottom:0,
        marginTop:'0%'
    },
    resetCon:{
        width:'100%', 
        height:'30%',
        marginTop:'10%',
        marginBottom:'2%',
        position:'absolute',
    },
    inputLabel:{
        fontSize: 15,
        fontWeight: 700,
        marginLeft:'5%',
        marginTop:'2%'
    },
    confirmbtn:{
        textAlign:'center',
        marginLeft:'8%',
        marginTop:'10%',
        marginBottom:'2%',
        width:202,
        height: 41,
        borderWidth:2,
        borderRadius: 20, 
        borderColor:'black' ,
    },
    confirmbtntxt:{
        fontSize:25,
        fontWeight:800,
        color:'black',
        textAlign:'center',
    },
    confirmEye:{
        width: 30, 
        height: 30,

    },
    newpassEye:{
        width: 30, 
        height: 30,

    },
    newPassbtn:{
        width:'30%', 
        height:'30%',
        marginLeft: '80%',
        marginTop:'-40%',
        marginBottom:'20%'
    },
    confirmEyebtn:{
        height:'30%',
        width:'30%',
        marginLeft: '80%',
        marginTop:'-16%'
    }




})