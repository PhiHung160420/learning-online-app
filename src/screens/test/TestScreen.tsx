import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {DVHCVN} from 'utils/constants/dvhcvn';

export default function TestScreen() {
  const [filterBankList, setFilterBankList] = useState([]);
  const dataCity = DVHCVN;
  const [showCity, setShowCity] = useState(false);
  const [bankName, setBankName] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          value={bankName}
          style={{
            height: 40,
            width: '90%',
            borderWidth: 1,
            borderColor: 'gray',
            fontSize: 18,
            color: 'black',
          }}
          onChangeText={() => {}}
        />
        <TouchableOpacity onPress={() => setShowCity(true)}>
          <Text>Show</Text>
        </TouchableOpacity>
      </View>
      {showCity ? (
        <FlatList
          data={dataCity}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => {}}>
              <Text>{item?.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item?.name}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({});
