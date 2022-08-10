import SpotifyPlayer from 'react-spotify-player';


function Spotify () {
  // size may also be a plain string using the presets 'large' or 'compact'
  const size = {
    width: '400px',
    height: 200
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'


  return (
    <div style={{position: "absolute", right: "0px", bottom: "0px"}}>
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