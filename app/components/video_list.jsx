import React from 'react'

import VideoListItem from './video_list_item'

class VideoList extends React.Component {
  constructor(props){
    super(props);
    this.renderVideoList = this.renderVideoList.bind(this);
  }
  renderVideoList(){

  }
  render(){
    let { videos } = this.props;
    var renderTodos = () => {
      return videos.map( (video) => {
        return(<VideoListItem key={video.etag} video={video} onVideoSelect={this.props.onVideoSelect}/>);
      });
    };
    return(
      <div className="col-sm-12">
        <ul className="col-sm-4 list-group">
          {renderTodos()}
        </ul>
      </div>
    );
  }
}

export default VideoList;
