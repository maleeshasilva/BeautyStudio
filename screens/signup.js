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



const   SignUp=()=>{
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
    return(
        <StyledContainer>
             <StatusBar style="dark" />
            <InnerContainer>
             <PageTitle>Beauty Studio</PageTitle>
              <SubTitle>SignUp</SubTitle>
            <Formik
                initialValues={{ fullName:'',phoneNumber:'',email: '', password: '',Confirmpassword:'' }}
                onSubmit={(values) => {
                console.log(values);
            }}
            > 
            {({ handleChange, handleBlur, handleSubmit, values})=>( 
                <StyledFormArea>
                <MyTextInput
                  label="Full Name"
                  icon="person"
                  placeholder="Enter the FullName"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('fullname')}
                  onBlur={handleBlur('fullname')}
                  value={values.fullname}
                                 
                />
                <MyTextInput
                  label="Telephone Number"
                  icon="device-mobile"
                  placeholder="Enter the telephone"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                  keyboardType="phone-pad"                 
                />
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
                 <MyTextInput
                  label="Confirm Password"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('Confirmpassword')}
                  onBlur={handleBlur('Confirmpassword')}
                  value={values.Confirmpassword}
                  secureTextEntry={hidePassword}
                  icon="lock"
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  
                />
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>
                    SignUp
                  </ButtonText>
                </StyledButton>

                 <ExtraView>
                  <ExtraText>Already Have an Account? </ExtraText>
                  <TextLink onPress={() => navigation.navigate('Login')}>
                    <TextLinkContent>Login</TextLinkContent>
                  </TextLink>
                </ExtraView>
              
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
  
export default SignUp;