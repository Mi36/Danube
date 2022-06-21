import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DanubeText, {TextVariants} from '../../components/DanubeText';
import HeaderCard from '../../components/HeaderCard';
import RoundIconWithLabel from '../../components/RoundIconWithLabel';
import SubCard from '../../components/SubCard';
import TopHeader from '../../components/TopHeader';
import colors from '../../styles/colors';
import styles from '../../styles/myAccountScreen';
import {
  actionData,
  arrowIcon,
  cartIcon,
  earthIcon,
  flagIcon,
  heartIcon,
  languageIcon,
  phoneIcon,
  trackIcon,
  userIcon,
} from '../../utils/common';
const searchIcon = <Icon name="search" size={20} color={colors.black} />;
const headsetIcon = (
  <MaterialIcons name="headset-mic" size={20} color={colors.black} />
);

const MyAccountScreen = ({navigation}) => {
  const onNavigate = () => navigation.navigate('WEB');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopHeader
          onBackPress={() => navigation.goBack()}
          firstRightIcon={searchIcon}
          secondRightIcon={headsetIcon}
          secondRightIconLabel="Callback"
          firstRightIconLabel="Search"
        />
        <View style={styles.header}>
          <DanubeText bold variant={TextVariants.XS}>
            Hello ! Shameem Ibrahim
          </DanubeText>
          <DanubeText variant={TextVariants.XS} color={colors.grey_2}>
            shameem.kt@gmail.com
          </DanubeText>
        </View>
        <ScrollView horizontal style={styles.flexDirection}>
          {actionData.map(item => {
            return (
              <RoundIconWithLabel
                label={item.label}
                key={item.id}
                icon={item.icon}
              />
            );
          })}
        </ScrollView>
        <HeaderCard label="MY ACCOUNT" />
        <SubCard
          leftLabel={'Profile'}
          leftIcon={userIcon}
          rightIcon={arrowIcon}
          onPress={onNavigate}
        />
        <SubCard
          leftLabel={'Wishlist'}
          leftIcon={heartIcon}
          rightIcon={arrowIcon}
          onPress={onNavigate}
        />
        <HeaderCard label="SETTINGS" />
        <SubCard
          flagIcon={flagIcon}
          leftLabel={'Country'}
          leftIcon={earthIcon}
          rightIcon={arrowIcon}
          onPress={onNavigate}
        />
        <SubCard
          leftLabel={'Language'}
          leftIcon={languageIcon}
          rightIcon={arrowIcon}
          rightLabel={'العربية'}
          onPress={onNavigate}
        />
        <SubCard
          leftLabel={'Order Track'}
          leftIcon={trackIcon}
          onPress={onNavigate}
        />
        <SubCard
          leftLabel={'Buy in Bulk'}
          leftIcon={cartIcon}
          onPress={onNavigate}
        />
        <HeaderCard label="REACH TO US" />
        <SubCard
          leftLabel={'Contact Us'}
          leftIcon={phoneIcon}
          onPress={onNavigate}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyAccountScreen;
