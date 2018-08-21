import React, { Component }	from 'react'
import PlaylistItem 		from './playlist_item'
import                           './playlist.css'

import M                    from 'materialize-css/dist/js/materialize.min.js'
import                           'materialize-css/dist/css/materialize.min.css'


class Playlist extends Component 
{
    
    componentDidMount ()
	{
		M.AutoInit()
	}

    render() 
    {
        const videoArray = this.props.videos.map((video) => 
        {
            return (			
                <li>  		
                    <PlaylistItem
                        onSelected={this.props.onSelected} 
                        key={video.etag} 
                        video={video} 
                    />      
                </li>			
            )
        })

        return (
            <div>
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                        <i className="material-icons">play_arrow</i>
                    </a>
                    <ul className='lista'>
                        <li>
                            <a className='btn-floating red'>
                                <i className="material-icons">play_arrow</i>
                            </a>
                        </li>
                        {videoArray}
                    </ul>
                </div>    
            </div>
        )
    }
}

export default Playlist