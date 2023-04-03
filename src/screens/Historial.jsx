import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, deleteOrder } from '../store/actions/getHistorial.action';
import Ionicons from '@expo/vector-icons/Ionicons';

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.rootOrders.list);
  console.log("ordenes de FB" ,orders)

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const formatDay = (time) => {
    const date= new Date(time)
    return date.toLocaleDateString();
}

const onHandleDeleteOrder = ({id})=>{
  console.log('delete order', id)
  dispatch(deleteOrder(id))
}

  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container} key={item.id}>
          <Text style={[styles.name, { color: item.status ? 'green' : 'red' }]}>{item.name} </Text>
          <Text style={styles.date}>{formatDay(item.date)}</Text>
          <TouchableOpacity onPress={()=> onHandleDeleteOrder(item.id)}>
                <Ionicons name="md-trash" size={22} color={"red"} />
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
  },
  name: {
    marginRight: 8,
  },
  date: {
    color: 'gray',
  },
});

export default OrdersScreen;
