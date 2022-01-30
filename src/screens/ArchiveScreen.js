import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { PeakAPI } from '../api';
import { Video } from 'expo-av';
import moment from 'moment'
import theme from '../config/theme';
import Card from '../components/Card';
export default class ArchiveScreen extends React.Component {
    video;
    state = {};

    constructor(props) {
        super(props);
        this.state = {
            clips: [],
        };
        this.video = React.createRef(null);
    }

    async componentDidMount() {
        await PeakAPI.login('admin@peakski.com', 'password');
        const clips = await PeakAPI.clipsGet('2022-01-20', '2022-02-01');
        this.setState({ clips: clips.sort((a,b) => moment(a.timestamp) < moment(b.timestamp))});
    }

    render() {
        return (
          <ScrollView contentContainerStyle={styles.container}>
            {this.state.clips && this.state.clips.map(clip => (
              <Card>
                <Text style={styles.dateText}>
                  {moment(clip.timestamp).format('MMM DD h:mm A')}
                </Text>
                <Video source={{uri: clip.link}}
                  shouldPlay
                  useNativeControls
                  ref={this.video}
                  resizeMode="cover"
                  style={styles.video}
                />
              </Card>
            ))}
          </ScrollView>
        );
    //     const videos = PeakAPI.clipsGet()
    //     const sortedVideos = videos.sort((a,b) => a.timeStamp < b.timeStamp)
    //     var groupData = (videos) => {
    //         let result = []
    //         for (var v in videos) {
    //             // get date from data
    //             var year = v.timeStamp.split('-')[0]; //by year
    //             if (!result[year]) {
    //                 result[year] = [v]
    //             } else {
    //                 // if key already existed, extend into group
    //                 result[year].push(v)
    //             }
    //         }
    //         let months = []
    //         for (year in result) {
    //             for(v in year){
    //                 var month = v.timeStamp.split('-')[2]; //by month
    //                 if (!months[month]) {
    //                     months[month] = [v]
    //                 } else {
    //                     // if key already existed, extend into group
    //                     months[month].push(v)
    //                 }
    //             }
    //         }
    //         for (month in months){
    //             return( <View>
    //                 <Text>{month[0].timeStamp.split('-')[2]}</Text>
    //              {month.map(
    //             <Video source={{uri: v.url}}   // Can be a URL or a local file.
    //             ref={(ref) => {
    //               this.player = ref
    //             }}                                      // Store reference
    //             onBuffer={this.onBuffer}                // Callback when remote video is buffering
    //             onError={this.videoError}               // Callback when video cannot be loaded
    //             style={styles.backgroundVideo} />)
    //         }
    //         </View>
    //     );
    // }
    //}
    }
    
  }



  const styles = StyleSheet.create({
    center: {
      alignItems: 'center'
    },
    dateText: {
      fontFamily: theme.typography.fontFamily.semibold,
      fontSize: theme.typography.fontSize.medium,
      marginBottom: theme.spacing.unit,
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.lightGray,
    },
    video: {
      alignSelf: 'stretch',
      height: 180,
    }
  })