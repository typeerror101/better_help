import React from 'react'
import './../styles/Music.css'

const Music = () => {
  return (
    <div className='whole'>
      <br/>
      <hr/>
      <hr/>
      <hr/>
    <div className="home">
      <div className="title">
        <h1>Feel Good Music !</h1>
      </div>

      <div className='quote'>“ Music can have a profound effect on mood, including confidence level or how relaxed you are.” — <span className="black">
        Corrina Thurston  </span><i className="fas fa-quote-right"></i>
        </div> 
        {/* <div className="write">
        </div> */}
        <br/>
        <div  id="outer-grid">
          <div className='rounded-3xl'>
            <iframe className='one' src="https://open.spotify.com/embed/playlist/1gFCtMRoic3opiCaCyvhJl?utm_source=oembed" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div>
          <div className='rounded-3xl'>
            <iframe className='two' src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=oembed" width="100% "  height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div>
          <div className='rounded-3xl'>
            <iframe className='four' src="https://open.spotify.com/embed/playlist/6c1dnhXrzdsTyZaQsVTy4K?utm_source=oembed" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div >
          <div className='rounded-3xl' id="inner-grid">
            <div className='rounded-3xl'>
              <iframe className='three' src="https://open.spotify.com/embed/track/6zTbtySCRStJOv5xA4XvRE?utm_source=oembed  " width="100%" height="100%"></iframe>
            </div>
            <div className='rounded-3xl'>
              <iframe className='three' src="https://open.spotify.com/embed/track/6cr9XbO2yAJgTNa6XNRINF?utm_source=oembed" width="100%" height="100%"></iframe>
            </div>
            <div className='rounded-3xl'>
              <iframe className='three' src="https://open.spotify.com/embed/track/4ojVtI82vjDG9gBEE29YBb?utm_source=oembed" width="100%" height="100%"></iframe>
            </div>
            <div className='rounded-3xl'>
              <iframe className='three' src="https://open.spotify.com/embed/track/4oNCXU6RZG6qpVDAfZUoEh?utm_source=oembed" width="100%" height="100%"></iframe>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
    </div>
      <section className="home" id="home">

          <div class="title">
            <h3 >Feel Well Videos/Podcast</h3>
        </div>
        <br/>
            <h2 className="para">Be present. Not perfect!!</h2>
            <p className="para">Being present, in the moment, is the most joyous and fulfilling way of being truly alive. Most of us
                spend our time dwelling in the past or concerned about the future So we have created this compilation of
                videos to help you enjoy your every moment !!</p>
        <br/>

      <section class="quote2">
        <div class="write">
            <h1>“Love yourself—accept yourself—forgive yourself—and be good to yourself, because without you the rest of
                us are without a source of many wonderful things.” —<span class="p-colour">Dr. Leo Buscaglia</span>
            </h1>
        </div>
      </section>
      <br/>
      <div  id="outer-grid">
          <div className='rounded-3xl'>
            <iframe className='one' src="https://www.youtube.com/embed/4YVOD6XId04?rel=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div>
          <div className='rounded-3xl'>
            <iframe className='two' src="https://www.youtube.com/embed/e9dZQelULDk?rel=0" width="100% "  height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div>
          <div className='rounded-3xl'>
            <iframe className='four' src="https://www.youtube.com/embed/-GXfLY4-d8w?rel=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div >
          <div className='rounded-3xl' id="inner-grid">
            <div className='rounded-3xl'>
              <iframe className='three' src="https://open.spotify.com/embed/episode/5n5cyzrdvxJ2oRPdqjwn6k?utm_source=oembed" width="100%" height="100%"></iframe>
            </div>
            <div className='rounded-3xl'>
              <iframe className='three' src="https://open.spotify.com/embed/episode/4UQrRVbaf5RYbuKtf3OE5h?utm_source=oembed" width="100%" height="100%"></iframe>
            </div>
            <div className='rounded-3xl'>
              <iframe className='three' src="https://open.spotify.com/embed/episode/0ZnR6SPhu6CkiaZyabVBn4?utm_source=oembed" width="100%" height="100%"></iframe>
            </div>
            <div className='rounded-3xl'>
              <iframe className='three' src="https://open.spotify.com/embed/episode/0QOAaBbVKprBvtBAprGcZ8?utm_source=oembed" width="100%" height="100%"></iframe>
            </div>
          </div>
        </div> 
        <br/>
        <br/>
        <br/>
        <br/>
      </section>
    </div>
  )
}

export default Music