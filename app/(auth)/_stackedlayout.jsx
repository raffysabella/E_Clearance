import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'

const Layout = () => {
  return (
    <>
   <Stack>
    <Stack.Screen
        name="login"
        options={{
            headerShown: false
    }}/>
    <Stack.Screen
        name="home"
        options={{
            headerShown: false
        }}
    />
    <Stack.Screen
      name="clearance"
      options={{
        headerShown:false
      }}
    
    />
    <Stack.Screen
      name="resetPass"
      options={{
        headerShown:false
      }}
    />
    <Stack.Screen
    name="authentication"
    options={{
      headerShown:false
    }}
    
    />
   </Stack>

   </>
  )
}

export default Layout

const styles = StyleSheet.create({})