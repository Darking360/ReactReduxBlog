import React from 'react'
import _ from 'lodash'
import VideoList from './video_list'
import SearchBar from './search_bar'
import VideoDetail from './video_detail'
import YTSearch from  'youtube-api-search'

const API_KEY = 'AIzaSyDlRTrR5pS3m_-IbH4fv2mGR43FDmOPM10';



class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: undefined
    };

    this.videoSearch("simple plan");

  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){

    const videoSearch = _.debounce(term => { this.videoSearch(term) },300);

    return(
      <div>
        <SearchBar search={ videoSearch }/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} />
      </div>
    );
  }
};

export default Main;
