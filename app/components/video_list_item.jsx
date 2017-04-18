import React from 'react'

class VideoListItem extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <li className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={this.props.video.snippet.thumbnails.medium.url}/>
          </div>
          <div className="media-body">
            <div className="media-heading" onClick={() => this.props.onVideoSelect(this.props.video) }>
              {this.props.video.snippet.title}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
