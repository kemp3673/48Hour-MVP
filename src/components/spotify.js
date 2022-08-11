import SpotifyPlayer from 'react-spotify-player';


function Spotify () {
  // size may also be a plain string using the presets 'large' or 'compact'
  const size = {
    width: '300px',
    height: 800
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'


  return (
    <div style={{position: "absolute", right: "5px", bottom: "4px"}}>
    <SpotifyPlayer
      uri="spotify:album:6SyfRVMVetoCiUXBEzCJ0J"
      size={size}
      view={view}
      theme={theme}


    />
    </div>
  )
}

export default Spotify;