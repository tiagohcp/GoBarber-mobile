import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px;
  padding-top: ${getStatusBarHeight() + 24}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
`;

export const SignOutButton = styled.TouchableOpacity``;

export const ProfileContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 118px 30px ${Platform.OS === 'android' ? 220 : 40}px;
`;

export const UserAvatar = styled.ImageBackground`
  width: 186px;
  height: 186px;
  margin-top: 64px;
  margin-bottom: 24px;
  align-self: center;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  right: 0;
  bottom: 0;
  background: #ff9000;

  display: flex;
  align-items: center;
  justify-content: center;
`;
