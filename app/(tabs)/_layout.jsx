import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Tabs } from 'expo-router'

const Tab = () => {
  return (
    <>
    <StatusBar style={{}} />
    <Tabs
     screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor:'rgba(9, 13, 49, 1)',
            borderRadius: 10,
            height:65,
            position: 'absulote',
            marginBottom: 35,
            marginTop: 2,
            justifyContent:'center',
            alignItems: 'center'
        }
     }}
    
    >
        <Tabs.Screen
            name="profile"
            options={{
                title: " ",
                tabBarIcon:({focused})=>(
                    <View style={{width:50, height: 50 ,borderRadius: '50%' ,marginTop: 22 ,justifyContent:'center',alignItems: 'center' , backgroundColor: focused? 'rgba(101, 164, 227, 1)':'none'}}>
                        <Image source ={require('../../assets/user.png')} style={styles.icon}>
                            
                        </Image>
                    </View>
                )
            }}    
        />
        <Tabs.Screen
            name="clearance"
            options={{
                title: "",
                headerShown:false,
                tabBarIcon:({focused})=>(
                    <View style={{width:50, height: 50 ,borderRadius: '50%',marginTop: 22 ,justifyContent:'center',alignItems: 'center' , backgroundColor: focused? 'rgba(101, 164, 227, 1)':'none'}}>
                        <Image source ={require('../../assets/clearance.png')} style={styles.icon}>
                            
                        </Image>
                    </View>
                )
            }}    
        />
        <Tabs.Screen
            name="home"
            options={{
                title: " ",
                headerShown:false,
                tabBarIcon:({focused})=>(
                    <View style={{width:50, height: 50 ,borderRadius: '50%',marginTop: 22,justifyContent:'center',alignItems: 'center', backgroundColor: focused? 'rgba(101, 164, 227, 1)':'none'}}>
                        <Image source ={require('../../assets/home.png')} style={styles.icon}>
                            
                        </Image>
                    </View>
                )
            }}    
        />
        <Tabs.Screen
            name="requirements"
            options={{
                title: " ",
                headerShown:false,
                tabBarIcon:({focused})=>(
                    <View style={{width:50, height: 50 ,borderRadius: '50%',marginTop: 22 ,justifyContent:'center',alignItems: 'center' , backgroundColor: focused? 'rgba(101, 164, 227, 1)':'none'}}>
                        <Image source ={require('../../assets/requirements.png')} style={styles.icon}>
                            
                        </Image>
                    </View>
                )
            }}    
        />
        <Tabs.Screen
            name="notification"
            options={{
                title: " ",
                headerShown:false,
                tabBarIcon:({focused})=>(
                    <View style={{width:50, height: 50 ,borderRadius: '50%',justifyContent:'center',alignItems: 'center' ,marginTop: 22, backgroundColor: focused? 'rgba(101, 164, 227, 1)':'none'}}>
                        <Image source ={require('../../assets/notif.png')} style={styles.icon}>
                        </Image>
                    </View>
                )
            }}    
        />

    </Tabs>
    </>          
    
  )
}

export default Tab

const styles = StyleSheet.create({
    icon:{
        width: 30, height: 30,
        marginBottom: 2,
    }
})