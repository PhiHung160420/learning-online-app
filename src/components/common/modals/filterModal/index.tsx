import React from 'react'
import { ScrollView, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle, Image } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import I18n from 'utils/language/i18n';
import { deviceHeight, deviceWidth, sizes } from 'utils/sizes';
import {TextButton, TopicButton, LineDivider, TwoPointSlider} from 'components/common';
import constants from 'utils/constants';
import { renderKeyItem} from 'utils/common';
import icons from 'utils/icons';

interface IProps {
  filterModalSharedValue1?: any,
  filterModalSharedValue2?: any,
  onPressCancelButtonModal?: () => void,
  sltClassType: number,
  onSelectedClassType: (value: number) => void,
  sltClassLevel: number,
  onSelectedClassLevel: (value: number) => void,
  sltCreateWithin: number,
  onSelectedCreateWithIn: (value: number) => void,
};

interface IPropsClassLevel {
  containerStyle?: StyleProp<ViewStyle>,
  classLevel: any,
  isLastItem?: boolean,
  isSelected?: boolean,
  onPress: () => void
};


const ClassLevelOption = (props: IPropsClassLevel) => {
  const {
    containerStyle,
    classLevel,
    isLastItem,
    isSelected = false,
    onPress
  } = props;

  return (
    <>
      <TouchableOpacity style={[styles.classLevelContainer, containerStyle]} onPress={onPress}>
        <Text style={styles.classLevelText}>{classLevel?.label}</Text>
        <Image style={styles.classLevelImage} source={isSelected ? icons.checkbox_on : icons.checkbox_off}/>
      </TouchableOpacity>

      {!isLastItem && (
        <LineDivider lineStyle={{height: 1}}/>
      )}
    </>
  )
}

const FilterModal = (props: IProps) => {
  const {
    filterModalSharedValue1,
    filterModalSharedValue2,
    onPressCancelButtonModal,
    sltClassType,
    sltClassLevel,
    sltCreateWithin,
    onSelectedClassType,
    onSelectedClassLevel,
    onSelectedCreateWithIn
  } = props;

  const inputRange = [deviceHeight, 0];

  const filterModalContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(filterModalSharedValue1.value, inputRange, [0, 1]),
      transform: [
        {
          translateY: filterModalSharedValue1.value
        }
      ]
    }
  });

  const filterModalBgAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(filterModalSharedValue2.value, inputRange, [0, 1])
    }
  });

  const filterModalContentAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(filterModalSharedValue2.value, inputRange, [0, 1]),
      transform: [
        {
          translateY: filterModalSharedValue2.value
        }
      ]
    }
  });

  return (
    <Animated.View style={[styles.container, filterModalContainerAnimatedStyle]}>
      <Animated.View style={[styles.background, filterModalBgAnimatedStyle]}>
        <Animated.View style={[styles.content, filterModalContentAnimatedStyle]}>
          {/* Header */}
          <View style={styles.header}>
            <View style={{width: sizes.size_60}}/>

            <Text style={styles.headerText}>{I18n.t('FILTER_MODAL_HEADER')}</Text>

            <TextButton 
              label={I18n.t('FILTER_MODAL_CANCEL')}
              buttonStyle={styles.textButton}
              labelStyle={styles.textButtonLabel}
              onPress={onPressCancelButtonModal !== undefined ? onPressCancelButtonModal : () => {}}
            />
          </View>

          {/* Content  */}
          <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            showsVerticalScrollIndicator={false}
          >
            {/* Class Type */}
            <View style={styles.classTypeContainer}>
              <Text style={styles.classLabel}>{I18n.t('FILTER_MODAL_CLASS_TYPE')}</Text>
              <View style={styles.classType}>
                {constants.class_types.map((item, index) => {
                  return (
                    <TopicButton 
                      key={renderKeyItem('ClassType', index)}
                      image={item?.icon}
                      topic={item?.label}
                      isSelected={sltClassType === item?.id}
                      containerStyle={{
                        marginLeft: index === 0 ? 0 : sizes.base
                      }}
                      onPress={() => onSelectedClassType(item?.id)}
                    />
                  )
                })}
              </View>
            </View>

            {/* Class Level */}
            <View style={styles.classLevel}>
              <Text style={styles.classLabel}>{I18n.t('FILTER_MODAL_CLASS_LEVEL')}</Text>
              <View>
                {constants.class_levels.map((item, index) => {
                  return (
                    <ClassLevelOption 
                      key={renderKeyItem('ClassType', index)}
                      classLevel={item}
                      isLastItem={index === constants.class_levels.length - 1}
                      isSelected={sltClassLevel === item?.id}
                      onPress={() => onSelectedClassLevel(item?.id)}
                    />
                  )
                })}
              </View>
            </View>

            {/* Create Within */}
            <View style={styles.createWithin}>
                <Text style={styles.classLabel}>{I18n.t('FILTER_MODAL_CREATED_WITHIN')}</Text>
                <View style={styles.createdWithinContainer}>
                  {constants.created_within.map((item, index) => {
                    return (
                      <TextButton 
                        key={renderKeyItem('CreatedWithin', index)}
                        label={item?.label}
                        buttonStyle={[
                          styles.createdButton,
                          {
                            backgroundColor: sltCreateWithin === item?.id ? colors.primary3 : colors.transparent,
                            marginLeft: index % 3 === 0 ? 0 : sizes.radius
                          }
                        ]}
                        labelStyle={[styles.createdButtonLabel, { color: sltCreateWithin === item?.id ? colors.white : colors.black}]}
                        onPress={() => onSelectedCreateWithIn(item?.id)}
                      />
                    )
                  })}
                </View>
            </View>

            {/* Class Length */}
            <View style={styles.classLength}>
              <Text style={styles.classLabel}>{I18n.t('FILTER_MODAL_CLASS_LENGTH')}</Text>
              <View style={styles.slider}>
                <TwoPointSlider 
                  values={[20, 50]}
                  min={15}
                  max={60}
                  postfix="min"
                  onValuesChange={(values) => console.log(values)}
                />
              </View>
            </View>
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
              <TextButton 
                label={I18n.t('FILTER_MODAL_RESET')}
                buttonStyle={styles.resetButton}
                labelStyle={styles.resetButtonLabel}
                onPress={() => {}}
              />

              <TextButton 
                label={I18n.t('FILTER_MODAL_APPLY')}
                buttonStyle={styles.applyButton}
                labelStyle={styles.applyButtonLabel}
                onPress={() => {}}
              />
          </View>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: deviceHeight,
    width: deviceWidth,
  },
  background: {
    flex: 1,
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: colors.transparentBlack7
  },
  content: {
    position: 'absolute',
    bottom: 0,
    height: deviceHeight * 0.9,
    width: deviceWidth,
    borderTopLeftRadius: sizes.size_30,
    borderTopRightRadius: sizes.size_30,
    backgroundColor: colors.white
  },
  header: {
    marginTop: sizes.padding,
    flexDirection: 'row',
    paddingHorizontal: sizes.padding
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    ...fonts.h1
  },
  textButton: {
    backgroundColor: 'none',
    marginRight: -sizes.padding
  },
  textButtonLabel: {
    color: colors.black,
    ...fonts.body3
  },
  scrollViewContainer: {
    paddingHorizontal: sizes.padding,
    paddingBottom: sizes.size_50
  },
  classTypeContainer: {
    marginTop: sizes.padding
  },
  classType: {
    flexDirection: 'row',
    marginTop: sizes.radius
  },
  classLabel: { 
    ...fonts.h3
  },
  classLevel: {
    marginTop: sizes.padding
  },
  classLevelContainer: {
    flexDirection: 'row',
    height: sizes.size_60,
    alignItems: 'center',
  },
  classLevelText: {
    flex: 1,
    ...fonts.body3
  },
  classLevelImage: {
    width: sizes.size_25,
    height: sizes.size_25
  },
  createWithin: {
    marginTop: sizes.radius
  },
  createdWithinContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  createdButton: {
    height: sizes.size_30,
    paddingHorizontal: sizes.radius,
    marginTop: sizes.radius,
    borderWidth: 1,
    borderRadius: sizes.radius,
    borderColor: colors.gray20,
  },
  createdButtonLabel: {
    ...fonts.body3
  },
  classLength: {
    marginTop: sizes.padding
  },
  slider: {
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row',
    height: sizes.size_50,
    marginBottom: sizes.size_30,
    paddingHorizontal: sizes.padding
  },
  resetButton: {
    flex: 1,
    borderRadius: sizes.radius,
    borderWidth: sizes.size_1,
    borderColor: colors.primary3,
    backgroundColor: colors.transparent
  },
  resetButtonLabel: {
    color: colors.black,
    ...fonts.h3
  },
  applyButton: {
    flex: 1,
    marginLeft: sizes.radius,
    borderRadius: sizes.radius,
    borderWidth: sizes.size_2,
    borderColor: colors.primary,
    backgroundColor: colors.primary
  },
  applyButtonLabel: {
    color: colors.white,
    ...fonts.h3
  }
});

export default FilterModal