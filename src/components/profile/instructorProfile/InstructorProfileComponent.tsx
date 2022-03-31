import { HorizontalCoursesCard, IconButton, LineDivider, TextButton } from 'components/common';
import { goback, navigate } from 'navigation/service';
import React from 'react'
import { FlatList, Image, ScrollView, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import colors from 'utils/colors';
import { renderKeyItem } from 'utils/common';
import data from 'utils/data';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import I18n from 'utils/language/i18n';
import screenNames from 'utils/screenName';
import { deviceWidth, fontWeights, sizes } from 'utils/sizes';

interface ISectionProps {
  value: string,
  label: string,
  conntainerStyle?: StyleProp<ViewStyle>,
}

const NumberSection = ({value, label, conntainerStyle}: ISectionProps) => {
  return (
    <View style={[styles.numberSection, conntainerStyle]}>
      <Text style={styles.sectionValue}>{value}</Text>
      <Text style={styles.sectionLabel}>{label}</Text>
    </View>
  )
}

const InstructorProfileComponent = () => {
  const profile = data?.instructor_profile;
  const avatar = profile?.avatar;
  const name = profile?.name;
  const title = profile?.title;
  const about_me = profile?.about_me;
  const followers = profile?.Followers;
  const reviews = profile?.Reviews;
  const total_students = profile?.total_students;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <IconButton 
          icon={icons.left_arrow} 
          iconStyle={styles.arrowIcon} 
          onPress={() => goback()}
        />

        <IconButton 
          icon={icons.info} 
          iconStyle={styles.infoIcon} 
          onPress={() => {}}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.contentCenter}>
          <Image source={avatar} style={styles.avatar}/>

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>{title}</Text>

          <TextButton 
            label={`+ ${I18n.t('INSTRUCTOR_PROFILE_FOLLOW')}`}
            buttonStyle={styles.followButton}
            labelStyle={styles.followButtonLabel}
            onPress={() => {}}
          />
        </View>

        <View style={[styles.flexRow, {marginVertical: sizes.padding}]}>
          <NumberSection 
            label={I18n.t('INSTRUCTOR_PROFILE_FOLLOWERS')}
            value={followers}
            conntainerStyle={styles.num_section_1}
          />

          <NumberSection 
            label={I18n.t('INSTRUCTOR_PROFILE_REVIEWS')}
            value={reviews}
            conntainerStyle={styles.num_section_2}
          />

          <NumberSection 
            label={I18n.t('INSTRUCTOR_PROFILE_TOTAL_STUDENTS')}
            value={total_students}
            conntainerStyle={styles.num_section_3}
          />
        </View>

        <View>
          <Text style={{...fonts.h2}}>{I18n.t('INSTRUCTOR_PROFILE_ABOUT_ME')}</Text>

          <Text style={styles.about_me}>{about_me}</Text>

          <TextButton 
            label={I18n.t('INSTRUCTOR_PROFILE_SHOW_MORE')}
            buttonStyle={styles.showMoreButton}
            labelStyle={styles.showMoreLabel}
            onPress={() => {}}
          />
        </View>

        <LineDivider lineStyle={styles.lineDevider}/>

        <View>
          <View style={styles.flexRow}>
            <Text style={{...fonts.h2}}>{I18n.t('INSTRUCTOR_PROFILE_MY_COURSES')}</Text>
            
            <TextButton 
              label={I18n.t('INSTRUCTOR_PROFILE_SEE_ALL')}
              onPress={() => {}}
            />
          </View>

          <FlatList 
            data={data.courses_list_2}
            listKey="PopularCourses"
            keyExtractor={item => renderKeyItem("PopularCourses", item.id)}
            pagingEnabled={false}
            scrollEnabled={false}
            contentContainerStyle={styles.flatListPopular}
            renderItem={({item, index}) => (
              <HorizontalCoursesCard 
                course={item} 
                containerStyle={styles.horizontalCard}
                index={index}
                onPress={() => navigate(screenNames.COURSE_LISTING_SCREEN, item)}
              />
            )}
            ItemSeparatorComponent={() => (
              <LineDivider />
            )}
          />
        </View>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: sizes.size_150,
    paddingHorizontal: sizes.padding,
    justifyContent: 'space-between'
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: sizes.size_25,
    borderTopRightRadius: sizes.size_25,
    paddingHorizontal: sizes.padding
  },
  arrowIcon: {
    width: sizes.size_30,
    height: sizes.size_30,
    tintColor: colors.white,
  },
  infoIcon: {
    width: sizes.size_30,
    height: sizes.size_30,
    tintColor: colors.white
  },
  contentCenter: {
    marginTop: -sizes.size_30,
    alignItems: 'center'
  },
  avatar: {
    width: sizes.size_80,
    height: sizes.size_80,
    borderRadius: sizes.size_40
  },
  name: {
    ...fonts.h2,
    marginTop: sizes.radius
  },
  title: {
    ...fonts.body3
  },
  followButton: {
    backgroundColor: colors.transparent,
    borderWidth: sizes.size_1,
    borderColor: colors.primary,
    marginTop: sizes.radius
  },
  followButtonLabel: {
    fontSize: sizes.size_18,
    color: colors.primary
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  numberSection: {
    width: (deviceWidth - sizes.padding * 2 - sizes.radius * 2) / 3,
    height: sizes.size_100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.radius
  },
  sectionValue: {
    ...fonts.h2
  },
  sectionLabel: {
    fontSize: sizes.size_14,
    marginTop: sizes.radius,
    fontWeight: fontWeights.fontWeight_600,
    textAlign: 'center'
  },
  num_section_1: {
    backgroundColor: "#f5d9b6"
  },
  num_section_2: {
    backgroundColor: "#fac8c6"
  },
  num_section_3: {
    backgroundColor: "#b5baf4"
  },
  about_me: {
    letterSpacing: sizes.size_1,
    fontSize: sizes.size_16,
    color: colors.gray50,
    fontWeight: fontWeights.fontWeight_600,
    marginTop: sizes.base
  },
  showMoreButton: {
    backgroundColor: colors.transparent,
    width: sizes.size_120,
    marginLeft: -sizes.size_20
  },
  showMoreLabel: {
    ...fonts.h3,
    color: colors.primary,
  },
  lineDevider: {
    color: colors.gray40,
    height: sizes.size_2,
    marginVertical: sizes.radius
  },
  flatListPopular: {
    marginTop: sizes.radius,
  },
  horizontalCard: {
    marginVertical: sizes.padding
  }
});

export default InstructorProfileComponent