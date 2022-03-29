import { IconButton } from 'components/common';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Video from 'react-native-video';
import colors from 'utils/colors';
import icons from 'utils/icons';
import images from 'utils/images';
import { deviceHeight, sizes } from 'utils/sizes';

interface IProps {
  thumbnail: any,
  playVideo: boolean,
  setPlayVideo: Function
}

const VideoCard = ({thumbnail, playVideo, setPlayVideo}: IProps) => {
  return (
    <View style={styles.container}>
      {/* Thumbnail */}
      <ImageBackground 
        source={thumbnail ? thumbnail : images.thubnailDefault}
        style={styles.thumbnail}
        resizeMode="cover"
      >
        <IconButton 
          icon={icons.play}
          iconStyle={styles.playIcon}
          containerStyle={styles.playButton}
          onPress={() => setPlayVideo(true)}
        />
      </ImageBackground>

      {playVideo && (
        <Video 
          source={images.video_default_url}
          controls={true}
          style={styles.videoControl}
          fullscreen={true}
          fullscreenOrientation="all"
        />
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: deviceHeight > 800 ? sizes.size_220 : sizes.size_200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray90
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  playIcon: {
    width: sizes.size_25,
    height: sizes.size_25,
    tintColor: colors.white
  },
  playButton: {
    width: sizes.size_55,
    height: sizes.size_55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: sizes.padding,
    borderRadius: sizes.size_30,
    backgroundColor: colors.primary
  },
  videoControl: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colors.black
  }
});

export default VideoCard