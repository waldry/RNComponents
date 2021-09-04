/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setNumbers([...numbers, ...newArray]);
  };

  const renderItem = (item: number) => {
    return (
      <Image
        source={{uri: `https://picsum.photos/id/${item}/500/400`}}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="InfiniteScroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={25} color="#5856D6" />
          </View>
        )}
      />
    </View>
  );
};
