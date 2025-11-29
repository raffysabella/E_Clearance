import { StyleSheet,View} from 'react-native'
import React from 'react'
import Login from './(auth)/login'
import StudentDashboard from './(tabs)/home'
import Requirements from './(tabs)/requirements'
const index = () => {
  return (
    <View style={{flex: 1}}>
      <Login></Login>
    {/* <StudentDashboard></StudentDashboard> */}
    {/* <Requirements></Requirements> */}
    </View>
    
    
  )
}

export default index

const styles = StyleSheet.create({

})