import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Components/Header';
import colors from '../../Theme/colors';
import { spacing, typography } from '../../Theme/typography';
import { Svgs } from '../../Assets/SVG';

const SettingsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const SETTINGS = [
    {
      id: 'notifications',
      label: 'Push Notifications',
      icon: Svgs.notification,
      toggle: true,
      value: notifications,
      onToggle: setNotifications,
    },
    {
      id: 'darkMode',
      label: 'Dark Mode',
      icon: Svgs.palette,
      toggle: true,
      value: darkMode,
      onToggle: setDarkMode,
    },
    {
      id: 'about',
      label: 'About App',
      icon: Svgs.about,
      toggle: false,
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <Header
        navigation={navigation}
        title="Settings"
        showNotification={false}
      />
      <View style={styles.container}>
        {SETTINGS.map(item => {
          const Icon = item.icon;
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.row}
              activeOpacity={item.toggle ? 1 : 0.7}
            >
              <View style={styles.iconWrap}>
                <Icon width={20} height={20} fill={colors.secondary} />
              </View>
              <Text style={styles.label}>{item.label}</Text>
              {item.toggle ? (
                <Switch
                  value={item.value}
                  onValueChange={item.onToggle}
                  trackColor={{
                    false: colors.border,
                    true: colors.secondary + '88',
                  }}
                  thumbColor={
                    item.value ? colors.secondary : colors.textSecondary
                  }
                />
              ) : (
                <Svgs.right
                  width={16}
                  height={16}
                  stroke={colors.textSecondary}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { padding: spacing.xl, gap: spacing.sm },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#12152E',
    borderRadius: 14,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.md,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.secondary + '22',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: { ...typography.body, color: colors.white, flex: 1 },
});
