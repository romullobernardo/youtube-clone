import React from 'react'

const PlaylistItem = ({video, onSelected}) => // video = props.video
{
	const image 	  = video.snippet.thumbnails.default.url
	const title 	  = video.snippet.title
	const description = video.snippet.description


	return (		
		<div className="card horizontal z-depth-5" onClick={() => onSelected(video)}>
	     		
			<div className="card-image">
				<img src={image} />
			</div>
			<div className="card-stacked">
				<div className="card-content">
				<p>{title}</p>
				</div>
			</div>

	    </div>
	)
}

export default PlaylistItem