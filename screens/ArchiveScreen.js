import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default function ArchiveScreen() {

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
        months.map()
    
        return result;
    }
    sortedVideos.map((i)=> )
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }



const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})