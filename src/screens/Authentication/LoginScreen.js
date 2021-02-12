import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, Alert} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './Styles';
import { Button, Input } from 'react-native-elements';
import { auth } from '../../../backend/Firebase';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if(authUser) {
                navigation.replace("Home");
            }
        })
        
        return unsubscribe;
    }, [])
    
    const signingin = () => {
      console.log("sign in  funct");
      auth.signInWithEmailAndPassword(email,password).
      then((userInfo) => {
        console.log("herher signedd asdin");
        navigation.replace("Home");
      }).catch((error) => Alert.alert(error.message)) ;

    }
    
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
    
      <View style={{}}>
          <View style={styles.Greettop}>
              <Text style={styles.GreettopText}>Welcome Back</Text>
          </View>
        <View style={styles.Greetbottom}>
               <View
            style={{
              flex: 1,
              backgroundColor: '#F2F2F2',
              borderTopLeftRadius: 150,
            }}></View>
        </View>
      </View>

      <View style={styles.info}>
        <View>
            <Input 
                placeholder = 'Enter email'
                leftIcon = {<Fontisto name="email" size={25} color="#000" />}
                rightIcon = {<AntDesign name="check" size={25} color="#000" />}
                onChangeText = {(value) => setEmail(value)}
                type="email"
                value = {email}
            />
        </View>
        <View>
            <Input
                placeholder= 'enter a strong password'
                leftIcon = {<AntDesign name="lock1" size={25} color="#000" />}
                rightIcon = {<AntDesign name="check" size={25} color="#000" />}
                onChangeText={(value) => setPassword(value)}
                secureTextEntry = {false}
                value={password}
                secureTextEntry
            />
        </View>
      </View>
      <View style={styles.buttonPart}>
        <Button
            title = "Login"
            raised
            containerStyle = {
                {
                    width : "70%",
                    alignSelf : "center",
                    marginVertical : 10,
                }
            }
            onPress = {
                signingin
          }
            disabled = { 
               false
            }
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              borderBottomWidth: 0.7,
              width: '30%',
              borderColor: 'black',
            }}></View>
          <Text>OR</Text>
          <View
            style={{
              borderBottomWidth: 0.7,
              width: '30%',
              borderColor: 'black',
            }}></View>
        </View>

        <Button
            title = "Signup"
            raised
            containerStyle = {
                {
                    width : "70%",
                    alignSelf : "center",
                    marginVertical : 10
                }
            }
            onPress={() => {
                navigation.navigate('SignUp');
              }}

        />
      </View>
    
    </KeyboardAvoidingView>
  );
}
