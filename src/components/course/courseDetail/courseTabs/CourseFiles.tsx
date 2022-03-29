import { IconButton, TextButton } from 'components/common';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import colors from 'utils/colors';
import { renderKeyItem } from 'utils/common';
import data from 'utils/data';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import I18n from 'utils/language/i18n';
import { sizes } from 'utils/sizes';

const list_students = data?.course_details?.students;
const files = data?.course_details?.files;

const CourseFiles = () => {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    if (list_students.length > 3) {
      const new_list_students = list_students.slice(0, 3);
      setStudents(new_list_students);
    } else {
      setStudents(list_students);
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Students */}
      <View>
        <Text style={styles.title}>{I18n.t('COURSE_FILES_STUDENTS')}</Text> 

        <View style={styles.listComponent}>
          {students.map((item, index) => (
            <View 
              key={renderKeyItem('Students', index)} 
              style={{marginLeft: index > 0 ? sizes.radius : 0}}
            >
              <Image source={item?.thumbnail} style={styles.image}/>
            </View>
          ))}

           {list_students.length > 3 && (
             <TextButton 
              label={I18n.t('COURSE_CHAPTER_SEE_ALL')}
              labelStyle={styles.labelButton}
              buttonStyle={styles.buttonStyle}
              onPress={() => {}}
            />
           )}
        </View>
      </View>

      {/* Files */}
      <View style={styles.marginTop}>
        <Text style={styles.title}>{I18n.t('COURSE_FILES')}</Text>

        {files.map((item, index) => (
          <View
            key={renderKeyItem('Files', index)}
            style={styles.filesComponent}
          >
            <Image source={item?.thumbnail} style={styles.image}/>

            <View style={styles.fileContent}>
              <Text style={styles.fileName}>{item?.name}</Text>
              <Text style={styles.fileAuthor}>{item?.author}</Text>
              <Text style={styles.fileUploadDate}>{item?.upload_date}</Text>
            </View>

            <IconButton 
              icon={icons.menu}
              iconStyle={styles.menuIcon}
              containerStyle={styles.menuButton}
              onPress={() => {}}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: sizes.padding,
  },
  title: {
    ...fonts.h2,
    fontSize: sizes.size_25,
  },
  listComponent: {
    flexDirection: 'row',
    marginTop: sizes.radius,
    alignItems: 'center'
  },
  image: {
    width: sizes.size_80,
    height: sizes.size_80
  },
  buttonStyle: {
    marginLeft: sizes.base,
    backgroundColor: colors.transparent
  },
  labelButton: {
    color: colors.primary,
    ...fonts.h3
  },
  marginTop: {
    marginTop: sizes.padding
  },
  filesComponent: {
    flexDirection: 'row',
    marginTop: sizes.radius
  },
  fileContent: {
    flex: 1,
    marginLeft: sizes.radius
  },
  fileName: {
    ...fonts.h2
  },
  fileAuthor: {
    color: colors.gray30,
    ...fonts.body3
  },
  fileUploadDate: {
    ...fonts.body4
  },
  menuIcon: {
    width: sizes.size_25,
    height: sizes.size_25,
    tintColor: colors.black
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default CourseFiles