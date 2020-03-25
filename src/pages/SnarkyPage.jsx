import React from 'react'

import BandPhoto from '../images/SnarkyPuppy.jpg'
import BandAlbum from '../images/SnarkyPuppy_ALBUM.jpg'

const Snarky = () => {
  return (
    <>
      <div className="band-page-container">
        <h1>Snarky Puppy</h1>
        <img src={BandPhoto} className="page-photos" />
        <img src={BandAlbum} className="page-photos" />
        <p className="blurb">
          Immigrance, the new Snarky Puppy studio album, is all about movement.
          "The idea here is that everything is fluid, that everything is always
          moving and that we’re all in a constant state of immigration,"
          explains Michael League. "Obviously the album’s title is not without
          political undertones."
        </p>
      </div>
    </>
  )
}

export default Snarky
