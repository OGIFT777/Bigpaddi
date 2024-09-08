import React, { useContext, useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { AppContext } from '../Components/GlobalVariables';
import { formatMoney } from '../Components/FormatMoney';
import { Theme } from '../Components/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { collection, deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../FireBase/settings';
import { errorMessage } from '../Components/FormatErrorMessage';
import { useNavigation } from '@react-navigation/native';

export function MyProducts() {
    const { setPreloader, userUID } = useContext(AppContext);
    const [products, setProducts] = useState([]);
    const navigation = useNavigation();


    useEffect(() => {
        setPreloader(true);
        const unsubscribe = onSnapshot(
            query(collection(db, 'products'), where('userId', '==', userUID)),
            (snapshot) => {
                const allData = [];
                snapshot.forEach((item) => {
                    allData.push({ ...item.data(), docID: item.id });
                });
                setProducts(allData);
                setPreloader(false);
            },
            (error) => {
                setPreloader(false);
                Alert.alert("Error!", errorMessage(error.code), [{ text: "Try Again" }]);
            }
        );
        return () => unsubscribe(); // Clean up the listener on component unmount
    }, [userUID, setPreloader]);

    function deleteProduct(id, name) {
        setPreloader(true);
        deleteDoc(doc(db, "products", id))
            .then(() => {
                setPreloader(false);
                Alert.alert("Delete Product!", `(${name}) has been deleted successfully`);
            })
            .catch((e) => {
                setPreloader(false);
                Alert.alert("Error!", errorMessage(e.code), [{ text: "Try Again" }]);
            });
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Details")} style={styles.item}>
        {/* <View style={styles.item}> */}
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemContent}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemTitle}>
                    {item.title}
                </Text>
                <Text style={styles.itemPrice}>{formatMoney(item.price)}</Text>
                <TouchableOpacity 
                    style={styles.deleteButton}
                    onPress={() => {
                        Alert.alert(
                            "Delete Product!",
                            `Are you sure you want to delete this product? (${item.title})`,
                            [
                                { text: "No", style: "cancel" },
                                { text: "Yes!", onPress: () => deleteProduct(item.docID, item.title), style: "destructive" }
                            ]
                        );
                    }}
                >
                    <FontAwesomeIcon icon={faTrash} color={Theme.colors.red} size={25} />
                </TouchableOpacity>
                <Text style={styles.itemCategory}>{item.category}</Text>
            </View>
        {/* </View> */}
        </TouchableOpacity>
    );

    return (
<View style={{ flex: 1, marginTop: 50 }}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Posted Products</Text>
            </View>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.docID}
                numColumns={3} // Set the number of columns in the grid
                columnWrapperStyle={styles.columnWrapper} // Style for spacing between columns
                contentContainerStyle={styles.container}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No items yet</Text>
                        <Text style={styles.emptySubtitle}>Your Sell Assets is currently empty. Start posting your assets to fill it up</Text>
                    </View>
                }
            />    

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 16,
        backgroundColor: 'white',
    },
    headerTitle: {
        fontSize: 17,
        fontFamily: Theme.fonts.text600,
    },
    container: {
        padding: 16,
    },
    columnWrapper: {
        justifyContent: 'space-between', // Space items evenly within a row
    },
    item: {
        width: '30%', // Set width to fit 3 items per row with some margin
        marginBottom: 16,
        backgroundColor: '#f6f6f6',
        borderRadius: 10,
    },
    itemImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    itemContent: {
        padding: 8,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    itemCategory: {
        fontSize: 12,
        color: 'gray',
        textTransform: 'capitalize',
    },
    deleteButton: {
        alignSelf: 'flex-end',
        marginTop: 8,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    emptyText: {
        fontSize: 20,
        color: Theme.colors.light.text1,
        fontFamily: Theme.fonts.text600,
        textTransform: 'capitalize',
    },
    emptySubtitle: {
        color: Theme.colors.light.text2,
        textAlign: 'center',
        marginTop: 10,
    },
});
