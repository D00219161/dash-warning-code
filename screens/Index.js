import React from "react";
import Screen from './Screen';

export const IndexScreen = ({navigation}) => <Screen navigation={navigation} name="Home Screen" />
export const LoginScreen = ({navigation}) => <Screen navigation={navigation} name="Login" />
export const CreateAccountScreen = ({navigation}) => <Screen navigation={navigation} name="Create Account" />
export const UserAccountScreen = ({navigation}) => <Screen navigation={navigation} name="User Account" />
export const ScanScreen = ({navigation}) => <Screen navigation={navigation} name="Scan" />
export const ScanningScreen = ({navigation}) => <Screen navigation={navigation} name="Scanning" />
export const ServiceScreen = ({navigation}) => <Screen navigation={navigation} name="Roadside Assistance" />
export const OfflineScreen = ({navigation}) => <Screen navigation={navigation} name="Most Common Faults" />
export const RedFaultsScreen = ({navigation}) => <Screen navigation={navigation} name="Red Faults" />
export const AmberFaultsScreen = ({navigation}) => <Screen navigation={navigation} name="Amber Faults" />
export const GreenBlueFaultsScreen = ({navigation}) => <Screen navigation={navigation} name="Green & Blue Faults" />
export const ElectricFaultsScreen = ({navigation}) => <Screen navigation={navigation} name="Electric & Hybrid Faults" />
export const ForumScreen = ({navigation}) => <Screen navigation={navigation} name="Forum" />
export const LogoutScreen = ({navigation}) => <Screen navigation={navigation} name="Logout" />