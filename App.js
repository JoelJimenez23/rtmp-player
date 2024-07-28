import * as React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
export default function App() {

  const [error,setError] = React.useState();

  handleVideoRef = async (component) => {
    if (component && !this.playbackObject) {
      this.playbackObject = component;
      console.log('PlaybackObject', this.playbackObject,'\n');
      await this.playbackObject.loadAsync({ uri: "https://www.chasquirouter.com/salida/trivu.m3u8" });
      await this.playbackObject.playAsync();
      await this.playbackObject.presentFullscreenPlayer();
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{error}</Text>
      <View>
        <Video
          ref={this.handleVideoRef}
          style={styles.video}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onError={(error) => setError(error)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    width: '100%', 
    aspectRatio: 16 / 9, 
  },
  buttons: {
    marginTop: 20,
  },
});

