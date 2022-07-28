import React from "react";
import {View, TextInput} from 'react-native';
import styles from './SearchBar.style';

//SearchBar ise TextInput kullanarak olustudugumuz bir arama componenti.

const SearchBar = props => {
    return (
        <View style={styles.searchBar_container}>
            <TextInput
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder="Ara.."
            />
        </View>   
    );
};

export default SearchBar;