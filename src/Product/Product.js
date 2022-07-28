import React from "react";
import {View, Text, Image} from "react-native";
import styles from "./Product.style";

const Product = ({products}) => {
    return (
        //Image kısmında ürünlerin resimlerini cağırdık.
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: products.imgURL }} />  
            <View style={styles.inner_container}> 
                <Text style={styles.title}> {products.title} </Text>
                <Text style={styles.price}> {products.price} </Text>
            </View>
        </View>
    )
}

export default Product;