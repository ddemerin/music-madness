import React from 'react'

import BandPhoto from '../images/SnarkyPuppy.jpg'
import BandAlbum from '../images/SnarkyPuppy_ALBUM.jpg'

const Snarky = () => {
  return (
    <>
      <h1>Snarky Puppy</h1>
      <img src={BandPhoto} />
      <img src={BandAlbum} />
      <p>
        Immigrance, the new Snarky Puppy studio album, is all about movement.
        "The idea here is that everything is fluid, that everything is always
        moving and that we’re all in a constant state of immigration," explains
        Michael League. "Obviously the album’s title is not without political
        undertones."
      </p>
    </>
  )
}

export default Snarky
