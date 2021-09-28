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
  const [hidePassword, setHidePassword] = useState(true);
    return(
        <StyledContainer>
             <StatusBar style="dark" />
            <InnerContainer>
            <PageLogo resizeMode="cover" source={require('./../assets/img/99.png')} />
            <PageTitle>Beauty Studio</PageTitle>
            <SubTitle>Account Login</SubTitle>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                console.log(values);
            }}
            > 
            {({ handleChange, handleBlur, handleSubmit, values})=>( 
                <StyledFormArea>
                <MyTextInput
                  label="Email Address"
                  icon="mail"
                  placeholder="Enter the Email"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"                 
                />

                <MyTextInput
                  label="Password"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  icon="lock"
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  
                />
              
            </StyledFormArea>
            )}
            </Formik>          
            </InnerContainer>
        </StyledContainer>
    );
};


const MyTextInput = ({ label, icon,isPassword,hidePassword,setHidePassword, ...props }) => {
    return (
      <View>
        <LeftIcon>
          <Octicons name={icon} size={30} color={brand} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput{...props}/>
        {isPassword &&(
          <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
          </RightIcon>
        )}
        
      </View>
    );
  };
  
export default Login;