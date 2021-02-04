import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import FormField from '../components/SellScreen/FormField'


const SellScreen = ({ navigation }) => {
   
    return (
         
        <View>
            <FormField label={'Name'} placeholder={'Name'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
        marginTop: 20,
        alignItems: "center"
    },
});

export default SellScreen;
