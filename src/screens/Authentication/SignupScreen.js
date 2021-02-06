import React, { useLayoutEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './Styles';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import { Button, Input } from 'react-native-elements';
import { auth } from '../../../backend/Firebase';

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    useLayoutEffect(() => {
       navigation.setOptions({
           headBackTitle : "Back To Login",
       });
    }, [navigation])
    
    const register = () => {
        auth.createUserWithEmailAndPassword(email,password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayname : "taichi"
                
            })
        console.log(authUser);
        }).catch((error) => console.log(error.message));
    }

    console.log("entered in signup")
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View style={{height: '50%'}}>
        <View style={styles.Greettop}>
          <Text style={styles.GreettopText}>Welcome Back</Text>
        </View>
        <View style={styles.Greetbottom}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              borderTopLeftRadius: 150,
            }}></View>
        </View>
      </View>

      <View style={[styles.info],{height : "37%"}}>
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
                secureTextEntry
                value={password}
            />
        </View>
        <View>
            <Input
                placeholder= 'Confirm password'
                leftIcon = {<AntDesign name="lock1" size={25} color="#000" />}
                rightIcon = {<AntDesign name="check" size={25} color="#000" />}
                onChangeText={(value) => setConfirmPassword(value)}
                secureTextEntry
                value={confirmPassword}
            />
        </View>
        <Text></Text>
      </View>
      <View style={[styles.buttonPart],{height : "10%"}}>
        <Button
            title = "Signup"
            raised
            containerStyle = {
                {
                    width : "70%",
                    alignSelf : "center",
                    marginVertical : 10,
                }
            }
            onPress={
                register
            }

            
            disabled = { 
               email.length==0 || password.length==0 || confirmPassword.length==0
            }
        />

      </View>
    </View>
  );
}
