import React from 'react'

const VideoPlayer = ({video}) =>
{
	if(!video)
	{
		return <div>Loading...</div>
	}

	const title		  = video.snippet.title
	const description = video.snippet.description

	const videoId     = video.id.videoId
	const videoUrl    = `https://www.youtube.com/embed/${videoId}`

	return (
		<section className="row section-player" style={{marginTop:'2%'}}>
			<div className='col s12 m12'>
				<div className='container'>

				<div className="card z-depth-5">			

					<div className="video-container">
		        		<iframe src={videoUrl} frameBorder="0" allowFullScreen></iframe>
		      		</div>

		      		<div className='details'>
						<div>{title}</div>
						<div>{description}</div>
					</div>

				</div>	

				</div>
			</div>
		</section>
	)
}

export default VideoPlayer