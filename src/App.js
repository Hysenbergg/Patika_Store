import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";  //Kullacağımız componentleri ekliyoruz.
import product_data from './product_data.json';   //Kullacağımız JSON dosyasını ekledik.
import SearchBar from './SearchBar';
import Product from './Product/Product';

function App() {
  const renderProduct = ({item}) => <Product products={item} />;  //Product componentinden gelenleri render ediyoruz. 
    
  return (    
    //SafeAreaView olmasa da olur. numColumns ile 2 sütundan oluşabileceğini belirtiyoruz. 
    //FlatList kullanarak ürünleri listelemeyi ayarladık. keyExtractor ile Json dosyasındaki üüerünlerin id kullanarak çağırdık.
    //data objesi ile de datanın hangisi oldugunu söylüyoruz.
    <SafeAreaView style={styles.container}>   
      <View style={styles.container}>       
        <Text style={styles.header_title}></Text>
        <SearchBar />
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          data={product_data}
          renderItem={renderProduct}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({   //Stil verdiğimiz kısım. 
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
  },
  header_title: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    color: 'purple',
  },
  searchbar: {
    backgroundColor: '#eceff1',
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
  },
});

export default App;