import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Profile from './icon/profile';
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'blue'}} />
        <View
          style={{height: 55, backgroundColor: 'black', flexDirection: 'row'}}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor: 'white', width: 26, height: 26}} />
            <Text style={{fontSize: 12, color: 'aqua', marginTop: 4}}>
              Home
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor: 'white', width: 26, height: 26}} />
            <Text style={{fontSize: 12, color: 'aqua', marginTop: 4}}>
              Prayers
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor: 'white', width: 26, height: 26}} />
            <Text style={{fontSize: 12, color: 'aqua', marginTop: 4}}> </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor: 'white', width: 26, height: 26}} />
            <Text style={{fontSize: 12, color: 'aqua', marginTop: 4}}>
              Quran
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor: 'white', width: 26, height: 26}}>
              <Profile style={{color : 'red'}} />
            </View>
            <Text style={{fontSize: 12, color: 'aqua', marginTop: 4}}>
              Profile
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
