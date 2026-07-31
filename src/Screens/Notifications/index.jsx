import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Components/Header';
import colors from '../../Theme/colors';
import { spacing, typography } from '../../Theme/typography';
import { Svgs } from '../../Assets/SVG';

const NOTIFICATIONS = [
  {
    id: '1',
    title: 'Welcome!',
    message: 'Thanks for visiting my portfolio app.',
    time: 'Just now',
  },
  {
    id: '2',
    title: 'New Project Added',
    message: 'Check out my latest React Native project.',
    time: '2h ago',
  },
  {
    id: '3',
    title: 'Skills Updated',
    message: 'New skills have been added to the Skills section.',
    time: '1d ago',
  },
];

const NotificationsScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.iconWrap}>
        <Svgs.notification width={20} height={20} fill={colors.secondary} />
      </View>
      <View style={styles.textWrap}>
        <View style={styles.row}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <Header
        navigation={navigation}
        title="Notifications"
        showNotification={false}
      />
      <FlatList
        data={NOTIFICATIONS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  list: { padding: spacing.xl, gap: spacing.md },
  card: {
    flexDirection: 'row',
    backgroundColor: '#12152E',
    borderRadius: 14,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.md,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.secondary + '22',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrap: { flex: 1 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...typography.bodySmall,
    color: colors.white,
    fontFamily: 'Poppins-SemiBold',
  },
  time: { ...typography.caption, color: colors.textSecondary },
  message: { ...typography.caption, color: colors.textSecondary, marginTop: 4 },
});
