import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { Constants } from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;

// colors 
export const colors = {
    primary: "#fffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444"
}

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top:${StatusBarHeight + 10}px;
    backgroundColor: ${primary};
    `


export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items : center;
    `;
    

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
    `;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
    `;

export const SubTitle = styled.Text`
    font-size: 19px;
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
    `;

export const StyedFormArea = styled.View`
    width: 90%;
    `;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 10px ;
    padding-left: 50px ;
    padding-right: 50px ;
    border-radius: 5px;
    font-size: 12px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 12px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 10px;
    top: 35px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    left: 10px;
    top: 35px;
    position: absolute;
    z-index: 1;
`;

export const styledButton = styled.Touchable`
    padding: 10px;
    background-color: ${brand}
    justify-content: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
    `;

export const ButtonText = styled.Text`
    color: ${primary}
    font-size: 12px;
    `;    