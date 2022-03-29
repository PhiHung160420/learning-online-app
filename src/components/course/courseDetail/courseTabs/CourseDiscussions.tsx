import { IconButton, IconLabelButton } from 'components/common';
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
import colors from 'utils/colors';
import { renderKeyItem } from 'utils/common';
import data from 'utils/data';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import I18n from 'utils/language/i18n';
import { sizes } from 'utils/sizes';

interface ICommentSection {
  commentItem?: any,
  commentOption?: any,
  replies?: any
};

interface ICommentOption {
  item: any,
  isReply?: boolean
}

const CommentSection = (props: ICommentSection) => {
  const {
    commentItem,
    commentOption,
    replies
  } = props;

  return (
    <View style={styles.commentSection}>
      <Image source={commentItem?.profile} style={styles.profileImage}/>

      <View style={styles.commentContent}>
        <Text style={{...fonts.h3}}>{commentItem?.name}</Text>
        <Text style={{...fonts.body4}}>{commentItem?.comment}</Text>

        {commentOption}

        {replies}
      </View>
    </View>
  )
};

const CommentOption = ({item, isReply = false}: ICommentOption) => {
  return (
    <View style={styles.commentOption}>
      <IconLabelButton
        icon={isReply ? icons.reply : icons.comment}
        label={isReply ? I18n.t('COURSE_DISCUSSIONS_REPLY') : item?.no_of_comments}
        iconStyle={styles.commentIcon}
        labelStyle={styles.iconLabel}
        onPress={() => {}}
      />

      <IconLabelButton
        icon={isReply ? icons.heart_off : icons.heart}
        label={isReply ? I18n.t('COURSE_DISCUSSIONS_LIKE') : item?.no_of_likes}
        containerStyle={styles.likeButton}
        labelStyle={styles.iconLabel}
        onPress={() => {}}
      />

      <Text style={styles.dateLabel}>{item?.posted_on}</Text>
    </View>
  )
};

const Replies = ({item}: any) => {
  return (
    <FlatList 
      data={item?.replies}
      scrollEnabled={false}
      keyExtractor={item => renderKeyItem('Discussions-Replies', item.id)}
      renderItem={({item, index}) => {
        return (
          <CommentSection 
            commentItem={item}
            commentOption={<CommentOption item={item} isReply={true}/>}
          />
        )
      }}
    />
  )
}

const CourseDiscussions = () => {
  const [footerPosition, setFooterPosition] = useState(0);
  const [footerHeight, setFooterHeight] = useState(75);

  useEffect(() => {
     const showSubscription = Keyboard.addListener
     ("keyboardWillShow", (e) => {
       setFooterPosition(e.endCoordinates.height);
     });

     const hideSubscription = Keyboard.addListener
     ("keyboardWillHide", (e) => {
       setFooterPosition(0);
     });

     return () => {
       showSubscription.remove();
       hideSubscription.remove();
     }
  }, []);

  return (
    <View style={styles.container}>
      {/* Discussions */}
      <View style={styles.discussions}>
        <FlatList 
          data={data?.course_details?.discussions}
          keyExtractor={item => renderKeyItem('Discussions', item.id)}
          contentContainerStyle={styles.flatlist}
          renderItem={({item, index}) => {
            return (
              <CommentSection 
                commentItem={item}
                commentOption={<CommentOption item={item}/>}
                replies={<Replies item={item}/>}
              />
            )
          }}
        />
      </View>

      {/* Footer */}
      <View style={[styles.footer, {bottom: footerPosition, height: footerHeight}]}>
          <TextInput 
            style={styles.textInput}
            multiline
            placeholder={I18n.t('COURSE_DISCUSSIONS_PLACEHOLDER')}
            placeholderTextColor={colors.gray80}
            onContentSizeChange={(event) => {
              const height = event?.nativeEvent?.contentSize?.height;

              if (height <= 75) {
                setFooterHeight(75)
              } else if (height > 75 && height <= 120) {
                setFooterHeight(height);
              } else if (height > 120) {
                setFooterHeight(120);
              }
            }}
          />

          <View style={styles.sendButton}>
            <IconButton 
              icon={icons.send}
              iconStyle={styles.sendIcon}
              onPress={() => {}}
            />
          </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  discussions: {
    flex: 1
  },
  flatlist: {
    paddingHorizontal: sizes.padding,
    paddingBottom: sizes.size_70
  },
  commentContent: {
    flex: 1,
    marginTop: sizes.size_5,
    marginLeft: sizes.radius
  },
  commentSection: {
    flexDirection: 'row',
    marginTop: sizes.padding
  },
  profileImage: {
    width: sizes.size_40,
    height: sizes.size_40,
    borderRadius: sizes.size_20
  },
  commentOption: {
    flexDirection: 'row',
    marginTop: sizes.radius,
    paddingVertical: sizes.base,
    borderTopWidth: sizes.size_1,
    borderBottomWidth: sizes.size_1,
    borderColor: colors.gray20
  },
  commentIcon: {
    tintColor: colors.black
  },
  iconLabel: {
    marginLeft: sizes.size_5,
  },
  likeButton: {
    marginLeft: sizes.radius,
  },
  dateLabel: {
    flex: 1,
    textAlign: 'center',
    ...fonts.h4,
    marginLeft: sizes.base
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: sizes.padding,
    paddingVertical: sizes.radius,
    backgroundColor: colors.gray10
  },
  textInput: {
    flex: 1,
    marginRight: sizes.base,
    ...fonts.body3
  },
  sendIcon: {
    height: sizes.size_25,
    width: sizes.size_25,
    tintColor: colors.primary
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CourseDiscussions