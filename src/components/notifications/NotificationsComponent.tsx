import { LineDivider, NotiCard } from 'components/common';
import { goback } from 'navigation/service';
import React from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from 'utils/colors';
import { renderKeyItem } from 'utils/common';
import data from 'utils/data';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import images from 'utils/images';
import I18n from 'utils/language/i18n';
import { sizes } from 'utils/sizes';

const NotiSection = ({noti}: any) => {
  const title = noti?.title || '';
  const notiData = noti?.data || [];

  return (
    <View style={styles.notiContainer}>
      <Text style={styles.notiTitile}>{title}</Text>

      <FlatList 
        data={notiData}
        keyExtractor={item => renderKeyItem('NotificationItem', item.id)}
        scrollEnabled={false}
        renderItem={({item, index}) => {
          return (
            <NotiCard 
              key={index}
              data={item}
            />
          )
        }}
        ItemSeparatorComponent={() => (
          <LineDivider lineStyle={styles.lineDevider}/>
        )}
      />
    </View>
  )
}

const NotificationsComponent = () => {
  const insets = useSafeAreaInsets();

  const renderHeaderComponent = () => {
    return (
      <ImageBackground 
        source={images.bg}
        imageStyle={styles.bgImage}
      >
        <View style={[styles.header, {marginTop: insets.top}]}>
          <TouchableOpacity style={styles.backButton} onPress={() => goback()}>
            <Image source={icons.back} style={styles.backIcon} resizeMode="contain"/>
          </TouchableOpacity>

          <Text style={styles.title}>{I18n.t('NOTIFICATIONS_TITLE')}</Text>
        </View>
      </ImageBackground>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={data?.notificationByDays}
        contentContainerStyle={styles.flatlist}
        ListHeaderComponent={renderHeaderComponent()}
        keyExtractor={item => renderKeyItem('Notification', item.id)}
        renderItem={({item, index}) => {
          return (
            <NotiSection key={index} noti={item}/>
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },
  header: {
    paddingHorizontal: sizes.padding
  },
  backButton: {
    width: sizes.size_45,
    height: sizes.size_45,
    borderRadius: sizes.size_25,
    backgroundColor: colors.gray20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    ...fonts.h2,
    marginTop: sizes.padding
  },
  background: {
    height: sizes.size_250,
  },
  bgImage: {
    width: '100%',
    height: sizes.size_250,
  },
  backIcon: {
    width: sizes.size_30,
    height: sizes.size_30,
  },
  notiContainer: {
    paddingHorizontal: sizes.padding,
    marginTop: sizes.size_30
  },
  notiTitile: {
    ...fonts.h3,
    color: colors.gray50
  },
  lineDevider: {
    marginVertical: sizes.radius
  },
  flatlist: {
    paddingBottom: sizes.size_50
  }
});

export default NotificationsComponent