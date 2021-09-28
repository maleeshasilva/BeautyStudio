import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';


// formik
import { Formik } from 'formik';

import {
  StyledContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  Colors,
} from './../components/styles';

import { View, ActivityIndicator } from 'react-native';

//colors
const { darkLight, brand, primary } = Colors;

// icon
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';

// keyboard avoiding view
//import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';



const   Login=()=>{
    return(
        <StyledContainer>
             <StatusBar style="dark" />
            <InnerContainer>
            <PageLogo resizeMode="cover" source={require('./../assets/img/expo-bg1.png')} />
            <PageTitle>Beauty Studio</PageTitle>
            <SubTitle>Account Login</SubTitle>
            <formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                console.log(values);
            }}
            > 
            {({ handleChange, handleBlur, handleSubmit, values})=> <StyledFormArea>
                <MyTextInput>
                    label="Email Address"
                    icon="email"
                    placeholder="Enter your Email"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                </MyTextInput>
            </StyledFormArea>}
            </formik>          
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput =({label,icon, ...props})=>{
    return(
       <View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={brand}/>
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>

       </View>
    );
}
export default Login;