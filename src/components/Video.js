
const Video=({name})=>{
    return (
      <div>
  
        Hello {name}
  
  
        <p style={paragraphStyling} className='main-paragraph' >We are in the third day of the week
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hcm55lU9knw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </p>
        <p className='blue'>Tomorrow we get to do it again</p>
      </div>
    )
  }
  
  
  const paragraphStyling={
    color:'yellow',
    backgroundColor:'grey',
    minHeight:'40rem',
    margin:'auto'
  }
  
  Video.defaultProps={
    
    name:'Francis'
  }
  export default Video