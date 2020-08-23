/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, Platform,TouchableOpacity,ScrollView} from 'react-native';
import NavBar from './src/containers/organisme/NavBar';
export default class App extends Component {

  constructor(){
    super(); this.state = { isVisible : true,
  };
  }
  Hide_Splash_Screen=()=>{
  this.setState({ isVisible : false,
  });
  }
  componentDidMount(){ var that = this;
  setTimeout(function(){ that.Hide_Splash_Screen();
  },1000);
  }
  render()
  {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
      <View style={styles.SplashScreen_ChildView}>
      <Image source={require('./src/assest/logo/splashMesjid.jpg')}
      style={{width:'100%', height: '100%', resizeMode:
      'contain'}} />
      </View>
      </View> );
  return (
      <View style ={styles.MainContainer}>
        <View style ={{flex : 1}}>
       <View style ={{flex : 1}}>
          <ScrollView horizontal={true} style = {{flexDirection : 'row'}}>
              <TouchableOpacity>
                <View style = {{paddingTop : 10, flex:1, alignItems : 'center' , paddingRight : 10}}>
                <Text style = {{ fontSize : 20}}>follow</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style = {{paddingTop : 10, flex:1, alignItems : 'center' , paddingRight : 10}}>
                <Text style = {{ fontSize : 20}}>Trending</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style = {{paddingTop : 10, flex:1, alignItems : 'center' , paddingRight : 10}}>
                <Text style = {{ fontSize : 20}}>Live</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style = {{paddingTop : 10, flex:1, alignItems : 'center' , paddingRight : 10}}>
                <Text style = {{ fontSize : 20}}>Image</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style = {{paddingTop : 10, flex:1, alignItems : 'center' , paddingRight : 10}}>
                <Text style = {{ fontSize : 20}}>Vidio</Text>
                </View>
              </TouchableOpacity>
          </ScrollView>
          
        </View>
      </View>
        <NavBar />
        {
          (this.state.isVisible === true) ? Splash_Screen : null
        }
    </View>
    );
  }
}
const styles = StyleSheet.create({
      MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
    },
    SplashScreen_RootView:
    {
      justifyContent: 'center',
      // alignItems : 'center',
      flex:1,
      // margin: 10,
      position: 'absolute', width: '100%',
      height: '100%',
    },
    SplashScreen_ChildView:
    {
      justifyContent: 'center', alignItems: 'center', backgroundColor: '#fcf52b', flex:1,
    },
    });
