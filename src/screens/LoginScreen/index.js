import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderCard from '../../components/HeaderCard';
import RoundIconWithLabel from '../../components/RoundIconWithLabel';
import SubCard from '../../components/SubCard';
import TopHeader from '../../components/TopHeader';
import colors from '../../styles/colors';
import styles from '../../styles/loginScreen';
import {
  arrowIcon,
  cartIcon,
  earthIcon,
  flagIcon,
  languageIcon,
  phoneIcon,
  trackIcon,
} from '../../utils/common';

const signInIcon = <Icon name="user" size={30} color={colors.white} />;
const signUpIcon = <Icon name="user-plus" size={30} color={colors.white} />;

const LoginScreen = ({navigation}) => {
  const onNavigate = () => navigation.navigate('WEB');
  return (
    <SafeAreaView>
      <ScrollView>
        <TopHeader onBackPress={() => navigation.goBack()} />
        <View style={styles.roundIconContainer}>
          <RoundIconWithLabel label="Sign In" icon={signInIcon} />
          <RoundIconWithLabel label="Sign Up" icon={signUpIcon} />
        </View>
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

export default LoginScreen;
