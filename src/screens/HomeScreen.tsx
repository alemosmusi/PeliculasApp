import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ListRenderItem,
  LogBox,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

LogBox.ignoreLogs(['ViewPropTypes will be removed']);

const windowWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
        <View style={{marginTop: top + 20}}>
        <View
            style={{
            height: 440,
            }}>
            <Carousel
            data={peliculasEnCine}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
            />
        </View>

        <HorizontalSlider title='En cine' movies={peliculasEnCine}/>
        <HorizontalSlider movies={peliculasEnCine}/>
        <HorizontalSlider title='En cine' movies={peliculasEnCine}/>
        </View>

    </ScrollView>
  );
};

export default HomeScreen;
