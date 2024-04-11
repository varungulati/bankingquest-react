import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useWindowDimensions } from 'react-native';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 768) {
      setCollapsed(true); // Collapsed on small screens
    } else {
      setCollapsed(false); // Expanded on big screens
    }
  }, [width]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor: '#f2f2f2' }]}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./logo.png')} // Change to your actual logo file path
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        {(collapsed || width < 768) && (
          <TouchableOpacity style={styles.toggleButton} onPress={toggleCollapse}>
            <FontAwesome name={collapsed ? "bars" : "times"} size={24} color="black" />
          </TouchableOpacity>
        )}
        {!collapsed && (
          <View style={[styles.menuItems, width < 768 ? styles.verticalMenu : styles.horizontalMenu]}>
            <TouchableOpacity style={styles.menuItem}>
              <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, styles.primaryButton]}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, styles.successButton]}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        )}
        {collapsed && width < 768 && !collapsed && (
          <View style={[styles.menuItems, styles.verticalMenu]}>
            <TouchableOpacity style={styles.menuItem}>
              <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, styles.primaryButton]}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, styles.successButton]}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 120,
    height: 60,
  },
  toggleButton: {
    padding: 10,
  },
  menuItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  menuItem: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  horizontalMenu: {
    justifyContent: 'flex-end',
  },
  verticalMenu: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  primaryButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    marginVertical: 5,
  },
  successButton: {
    backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Navbar;
