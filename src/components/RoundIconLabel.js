import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RoundIconLabel = () => {
  return (
    <View style={styles.main}>
      <Text>RoundIconLabel</Text>
    </View>
  )
}

export default RoundIconLabel

const styles = StyleSheet.create({
    main:{
        height:10,
        width: 20
    }
})