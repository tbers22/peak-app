import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PeakAPI } from '../api';
import Video from 'react-native-video';
export default class ArchiveScreen extends React.Component {

    async componentDidMount() {
        await PeakAPI.login('admin@peakski.com', 'password');
        console.warn(await PeakAPI.userGet());
    }

    render() {
        const videos = API.clipsGet()
        const sortedVideos = videos.sort((a,b) => a.timeStamp < b.timeStamp)
        var groupData = (videos) => {
            let result = []
            for (var v in videos) {
                // get date from data
                var year = v.timeStamp.split('-')[0]; //by year
                if (!result[year]) {
                    result[year] = [v]
                } else {
                    // if key already existed, extend into group
                    result[year].push(v)
                }
            }
            let months = []
            for (year in result) {
                for(v in year){
                    var month = v.timeStamp.split('-')[2]; //by month
                    if (!months[month]) {
                        months[month] = [v]
                    } else {
                        // if key already existed, extend into group
                        months[month].push(v)
                    }
                }
            }
            for (month in months){
                return( <View>
                    <Text>{month[0].timeStamp.split('-')[2]}</Text>
                 {month.map(
                <Video source={{uri: v.url}}   // Can be a URL or a local file.
                ref={(ref) => {
                  this.player = ref
                }}                                      // Store reference
                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                onError={this.videoError}               // Callback when video cannot be loaded
                style={styles.backgroundVideo} />)
            }
            </View>
        );
    }
    
  }}}



  const styles = StyleSheet.create({
    center: {
      alignItems: 'center'
    }
  })