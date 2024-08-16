import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { hp, wp } from "../helper/common";
import { LinearGradient } from "expo-linear-gradient";
import {theme} from '../constants/theme'
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

const index = () => {
   const router=useRouter()
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/welcome.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />

      {/* linear gradient */}
      <Animated.View entering={FadeInDown.duration(600)} style={styles.colorGradient}>
        <LinearGradient
          colors={[
            'rgba(255, 255, 255, 0.1)',
            'rgba(255, 255, 255, 0.5)',
            'white',
            'white',
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />

        {/* content */}
        <View style={styles.contentContainer}>
          <Animated.Text entering={FadeInDown.delay(400).springify()} style={styles.title}>Pixels</Animated.Text>
          <Animated.Text entering={FadeInDown.delay(500).springify()} style={styles.punchline}>Every Pixels Tells a Story</Animated.Text>
          <Animated.View entering={FadeInDown.delay(500).springify()}>
            <Pressable onPress={()=>router.push('home')} style={styles.startButton}>
              <Text style={styles.startText}>Start Explore</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  container: {
    flex: 1,
  },
  gradient: {
    width: wp(100),
    height: hp(65),
    bottom: 0,
    position: "absolute",
  },
  colorGradient:{
    flex:1,
    // position:'absolute',
    // bottom:0
  },
  contentContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end',
    gap:14,
    // position:'absolute',
    // bottom:0
  },
  title:{
    fontSize:hp(7),
    color:theme.colors.neutral(0.9)
  },
  startButton:{
    marginBottom:50,
    backgroundColor:theme.colors.neutral(0.9),
    padding:15,
     paddingHorizontal:90,
    borderRadius:theme.radius.xl,
    borderCurve:'continuous'
  },
  startText:{
    color:theme.colors.white,
    fontSize:hp(3),
    fontWeight:theme.fontWeight.medium,
    leterSpacing:1
  },
  punchline:{
    fontSize:hp(2),
    letterSpacing:1,
  }
});
