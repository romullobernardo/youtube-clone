import React, { Component } from 'react'
import YTSearch             from 'youtube-api-search'

import Search               from './components/search'
import Playlist             from './components/playlist'
import VideoPlayer          from './components/video_player'


const API_KEY = 'YOUR_YOUTUBE_API_KEY_HERE'


class App extends Component 
{
  constructor(props)
  {
    super(props)    

    this.state = 
    { 
      videos: [],
      selectedVideo: null 
    }

    this.videoSearch('jyocho')
  }


  videoSearch(term)
  {
    YTSearch( { key: API_KEY, term: term }, (videos) => 
    {
      this.setState(
        { 
          videos: videos,
          selectedVideo: videos[0] 
        }
      )  
    })    
  }


  render() 
  {
    return (
      <div className="App">
        <Search onSearchChange={ term => this.videoSearch(term)} /> 
        <VideoPlayer video={this.state.selectedVideo}/>   
        <Playlist 
            onSelected={ selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos} 
        />         
      </div>
    )
  }
}

export default App
