import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { connect } from 'react-redux';
import { fetchFeaturedMoviesData } from '../redux/actions'

const Movie = (props) => {
    useEffect(() => {
        props.fetchFeaturedMovies();
        setTimeout(()=> {
            console.log(props.featuredMovies);
        }, 1000);
    }, [])
    const { colors } = useTheme();
    return (
        <View>
            <Text>Movie</Text>
        </View>
    )
}


const mapStateToProps = state => {
    return {
        featuredMovies: state.featuredMovies
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchFeaturedMovies: () => dispatch(fetchFeaturedMoviesData()),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Movie);
