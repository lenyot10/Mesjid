/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';

const NavBarIcon = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image style={{width: 26, height: 26}} source={props.img} />
      <Text style={{fontSize: 12, marginTop: 4 , color : props.active ? '#57B2C0' : '#545454'}}>{props.title}</Text>
    </View>
  );
};
export default NavBarIcon;
