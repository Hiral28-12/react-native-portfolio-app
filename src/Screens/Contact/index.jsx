import React, { useState } from 'react';
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  Linking,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import ContactCard from './Components/ContactCard';
import Header from '../../Components/Header';
import GradientButton from '../../Components/GradientButton';
import { GradientText } from '../../Utils/hooks';
import { Svgs } from '../../Assets/SVG';
import contactData from '../../Constants/contactData';
import styles from './style';

const ContactScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCardPress = item => {
    if (item.actionType === 'email')
      Linking.openURL(`mailto:${item.actionValue}`);
    else if (item.actionType === 'phone')
      Linking.openURL(`tel:${item.actionValue}`);
    else if (item.actionType === 'url') Linking.openURL(item.actionValue);
  };

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) {
      Alert.alert('Please fill all required fields.');
      return;
    }
    Linking.openURL(
      `mailto:hiralprajapati289@gmail.com?subject=${encodeURIComponent(
        form.subject,
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
      )}`,
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('../../Assets/Images/skill_bg.png')}
        style={styles.bg}
        resizeMode="contain"
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Header
              navigation={navigation}
              title="Contact Me"
              showNotification={true}
            />

            {/* Hero */}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Let's Work</Text>
              <GradientText style={styles.titleGradient} text="Together!" />
              <View style={styles.divider} />
              <Text style={styles.subTitle}>
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </Text>
              <GradientText
                style={styles.subTitleGradient}
                text="Feel free to reach out!"
              />
            </View>

            {/* Contact Cards */}
            <View style={styles.sectionContainer}>
              {contactData.map(item => (
                <ContactCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  value={item.value}
                  iconColor={item.iconColor}
                  borderColor={item.borderColor}
                  onPress={() => handleCardPress(item)}
                />
              ))}
            </View>

            {/* Message Form */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Send Me a Message</Text>
              <View style={styles.divider} />

              <View style={styles.row}>
                <TextInput
                  style={[styles.input, styles.halfInput]}
                  placeholder="Your Name"
                  placeholderTextColor="#555"
                  value={form.name}
                  onChangeText={v => setForm(p => ({ ...p, name: v }))}
                />
                <TextInput
                  style={[styles.input, styles.halfInput]}
                  placeholder="Your Email"
                  placeholderTextColor="#555"
                  keyboardType="email-address"
                  value={form.email}
                  onChangeText={v => setForm(p => ({ ...p, email: v }))}
                />
              </View>

              <TextInput
                style={styles.input}
                placeholder="Subject"
                placeholderTextColor="#555"
                value={form.subject}
                onChangeText={v => setForm(p => ({ ...p, subject: v }))}
              />

              <TextInput
                style={[styles.input, styles.messageInput]}
                placeholder="Your Message"
                placeholderTextColor="#555"
                multiline
                textAlignVertical="top"
                value={form.message}
                onChangeText={v => setForm(p => ({ ...p, message: v }))}
              />

              <GradientButton
                title="Send Message"
                onPress={handleSend}
                icon={Svgs.mail}
                style={styles.sendBtn}
                height={54}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ContactScreen;
