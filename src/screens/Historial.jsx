import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, deleteOrder } from '../store/actions/getHistorial.action';
import Ionicons from '@expo/vector-icons/Ionicons';

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.rootOrders.list);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const formatDay = (time) => {
    const date = new Date(time);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  }

  const onHandleDeleteOrder = (id) => {
    dispatch(deleteOrder(id))
  }

  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={[styles.name, { color: item.status ? 'green' : 'red' }]}>{item.name}</Text>
            <Text style={styles.date}>{formatDay(item.date)}</Text>
          </View>
          <TouchableOpacity onPress={() => onHandleDeleteOrder(item.index)}>
            <Ionicons name="md-trash" size={24} color={"red"} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    height: 70,
  },
  leftContainer: {
    flex: 1,
    marginRight: 16,
  },
  name: {
    fontFamily: "open-sans",
    fontSize: 17,
    color: 'black',
  },
  date: {
    color: 'gray',
    marginTop: 4,
  },
});

export default OrdersScreen;
