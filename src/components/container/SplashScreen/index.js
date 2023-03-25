import { View, Text, Image, Platform, Dimensions } from 'react-native'
import React from 'react'
import { splashImg } from '../../../assets'
// import { Spinner } from 'native-base'
import { ActivityIndicator } from 'react-native-paper';

import { themeStyleSheet } from '../../../constants'
import spacing from '../../../constants/spacing'

const SplashScreen = ({navigation}) => {

  const { height, width, fontScale } = Dimensions.get('window');

  setTimeout(() => {

    navigation.reset({
      routes: [{
          name: 'welcome',
          params: {
              fromSplash: true,
          }
      }]
  });

  }, 3000);


  return (
    <View testID='splash_screen' style={{ backgroundColor: "#fff", justifyContent: "center", alignItems: "center", height: "100%", }}>
      <Image
        source={splashImg}
        style={{ height: Platform.OS == 'android' ? height : 300, width: Platform.OS == 'android' ? width : 300, position: "absolute" }}
      />
      <View style={{ height: "50%", justifyContent: "center", alignItems: 'flex-end', flexDirection: 'row', paddingBottom: spacing.extraLarge }}>
        <Text style={{ color: themeStyleSheet.mainColor, fontSize: 16 }}>Grab your component</Text>
        <ActivityIndicator animating={true} color="purple" size={25} style={{ height: 20, paddingHorizontal: 10 }} />

        {/* <Spinner color={themeStyleSheet.mainColor} style={{ height: 20, paddingHorizontal: 10 }} size={30} /> */}
      </View>

    </View>
  )
}

export default SplashScreen