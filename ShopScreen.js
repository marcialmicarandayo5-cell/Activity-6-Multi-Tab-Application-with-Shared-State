
import React, { useContext } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import { AppContext } from './AppContext';

export default function ShopScreen() {

  const { addToCart, loading } = useContext(AppContext);

  const products = [
    { id: 1, name: 'T-Shirt', price: 250, emoji: '👕', color: '#E8F1FF' },
    { id: 2, name: 'Shoes', price: 850, emoji: '👟', color: '#FFF0E6' },
    { id: 3, name: 'Backpack', price: 500, emoji: '🎒', color: '#E9F8EF' },
    { id: 4, name: 'Cap', price: 150, emoji: '🧢', color: '#F5EDFF' },
  ];

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="#F5F7FB" barStyle="dark-content" />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.subtitle}>WELCOME TO</Text>
            <Text style={styles.title}>My Shop 🛍️</Text>
            <Text style={styles.description}>
              Find something you will love!
            </Text>
          </View>
        </View>

        {/* Section Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Our Products</Text>
          <Text style={styles.productCount}>
            {products.length} Items
          </Text>
        </View>

        {/* Products */}
        <View style={styles.productList}>
          {products.map((product) => (

            <View key={product.id} style={styles.productCard}>

              <View
                style={[
                  styles.imageBox,
                  { backgroundColor: product.color }
                ]}
              >
                <Text style={styles.emoji}>
                  {product.emoji}
                </Text>
              </View>

              <View style={styles.productInfo}>
                <Text style={styles.name}>
                  {product.name}
                </Text>

                <Text style={styles.price}>
                  PHP {product.price.toFixed(2)}
                </Text>

                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => addToCart(product)}
                  disabled={loading}
                >
                  <Text style={styles.buttonText}>
                    + Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>

            </View>

          ))}
        </View>

        {/* Loading State */}
        {loading && (
          <View style={styles.loadingBox}>
            <Text style={styles.loading}>
              Saving your item...
            </Text>
          </View>
        )}

        <Text style={styles.footer}>
          Thank you for shopping with us! ❤️
        </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 30,
    marginBottom: 30,
  },

  subtitle: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 5,
  },

  description: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 6,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },

  productCount: {
    fontSize: 13,
    color: '#64748B',
  },

  productList: {
    gap: 15,
  },

  productCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  imageBox: {
    width: 105,
    height: 115,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emoji: {
    fontSize: 48,
  },

  productInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },

  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 6,
    marginBottom: 12,
  },

  addButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  loadingBox: {
    backgroundColor: '#DBEAFE',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },

  loading: {
    color: '#1D4ED8',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 30,
    marginBottom: 25,
  },

});
