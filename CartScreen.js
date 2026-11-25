
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { AppContext } from './AppContext';
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen() {

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    totalPrice,
  } = useContext(AppContext);

  const handleCheckout = () => {
    Alert.alert(
      'Checkout Successful!',
      `Your total payment is PHP ${totalPrice.toFixed(2)}`
    );
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>My Cart</Text>
        <Text style={styles.subtitle}>
          Review your selected products
        </Text>
      </View>

      {cart.length === 0 ? (

        <View style={styles.emptyContainer}>
          <Ionicons
            name="cart-outline"
            size={80}
            color="#CBD5E1"
          />

          <Text style={styles.emptyTitle}>
            Your Cart is Empty
          </Text>

          <Text style={styles.emptyText}>
            Add some products to get started!
          </Text>
        </View>

      ) : (

        <View>

          {cart.map((item) => (

            <View key={item.id} style={styles.product}>

              <View style={styles.productInfo}>
                <Text style={styles.name}>
                  {item.name}
                </Text>

                <Text style={styles.price}>
                  PHP {Number(item.price).toFixed(2)}
                </Text>

                <Text style={styles.subtotal}>
                  Subtotal: PHP {(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>

              <View style={styles.actions}>

                <View style={styles.quantityContainer}>

                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => decreaseQuantity(item.id)}
                  >
                    <Ionicons name="remove" size={18} color="#2563EB" />
                  </TouchableOpacity>

                  <Text style={styles.quantity}>
                    {item.quantity}
                  </Text>

                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => increaseQuantity(item.id)}
                  >
                    <Ionicons name="add" size={18} color="#2563EB" />
                  </TouchableOpacity>

                </View>

                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeFromCart(item.id)}
                >
                  <Ionicons name="trash-outline" size={18} color="#EF4444" />
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>

              </View>

            </View>

          ))}

          <View style={styles.summary}>

            <Text style={styles.summaryTitle}>
              Order Summary
            </Text>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Total Items</Text>
              <Text style={styles.summaryValue}>{totalItems}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Total Amount</Text>
              <Text style={styles.totalPrice}>
                PHP {totalPrice.toFixed(2)}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handleCheckout}
            >
              <Ionicons name="card-outline" size={20} color="#FFFFFF" />

              <Text style={styles.checkoutText}>
                Proceed to Checkout
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    padding: 18,
  },

  header: {
    marginBottom: 22,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
  },

  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 5,
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },

  emptyTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#334155',
    marginTop: 15,
  },

  emptyText: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 8,
  },

  product: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  productInfo: {
    marginBottom: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },

  price: {
    fontSize: 15,
    color: '#2563EB',
    fontWeight: '600',
    marginTop: 7,
  },

  subtotal: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 5,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    borderRadius: 8,
  },

  quantityButton: {
    padding: 9,
  },

  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    paddingHorizontal: 12,
  },

  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },

  removeText: {
    color: '#EF4444',
    fontWeight: '600',
    marginLeft: 5,
  },

  summary: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 30,
    elevation: 3,
  },

  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 18,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  summaryText: {
    fontSize: 15,
    color: '#64748B',
  },

  summaryValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E293B',
  },

  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
  },

  checkoutButton: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  checkoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },

});
