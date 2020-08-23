/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';

class NavBar extends Component{
    render(){
        return (
            <View style={{backgroundColor: 'white',height: 55, flexDirection: 'row',borderTopWidth:1, alignItems:'center', justifyContent : 'center'}}>
                <NavBarIcon title = "Home" img={require('../../../assest/icon/home.png')} active />
                <NavBarIcon title = "Prayers" img={require('../../../assest/icon/time.png')} />
                <NavBarIcon title = "" img={require('../../../assest/icon/add.png')} />
                <NavBarIcon title = "Quran" img={require('../../../assest/icon/quran.png')} />
                <NavBarIcon title = "Profile" img={require('../../../assest/icon/account.png')} />
            </View>
        );
    }
}
export default NavBar;