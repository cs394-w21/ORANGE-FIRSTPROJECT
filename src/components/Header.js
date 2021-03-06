import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';
import CartItems from './MainScreen/CartItems';
import { Icon } from 'react-native-elements';

const Header = ({ displayCart, cart, setDisplayCart, navigation, setCart }) => {
    const toggleCart = () => {
        displayCart ? setDisplayCart(false) : setDisplayCart(true)
    }

    return (
        <SafeAreaView style={styles.safeViewStyle}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('SellScreen')} style={styles.sellButton}>
                    <Text style={styles.txt}>
                        Sell
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleCart()} style={styles.cartButton}>
                    <Icon
                        name='eye'
                        type='font-awesome'
                        color='black'
                    />
                    <Text style={styles.txt}>
                        ({cart.length})
                    </Text>
                </TouchableOpacity>
            </View>
            {/* { displayCart ? <CartItems data={cart}/> : null } */}
            {displayCart
            ?
            <Modal
                animationType="slide"
                transparent={true}>
                <View style={styles.centeredView}>
                    <View style={styles.cartModal}>
                        <CartItems data={cart} setCart={setCart} />
                        <TouchableHighlight
                            style={styles.modalStyle}
                            onPress={() => {
                                toggleCart();
                            }}
                        >
                            <Text style={styles.txt}>Close</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            :
            null}
        </SafeAreaView>
    );
};

const openButton = {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    top: 10,
};

const styles = StyleSheet.create({
    safeViewStyle: {
        marginTop: 20,
    },
    cartModal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
    },
    sellButton: {
        borderRadius: 10, 
        color: "white", 
        backgroundColor: "#fa953c", 
        width: 100, 
        padding: 10, 
        alignItems: "center",
        justifyContent: 'center',
    },
    cartButton: {
        borderRadius: 10, 
        color: "white", 
        backgroundColor: "#66b0ff", 
        width: 100, 
        padding: 10, 
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    modalStyle: {
        ...openButton, 
        backgroundColor: "#2196F3",
    },
    txt: {
        fontWeight: 'bold',
    }
});

export default Header;
