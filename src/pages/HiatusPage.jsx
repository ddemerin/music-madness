import React from 'react'

import BandPhoto from '../images/Hiatus_Kaiyote.jpg'
import BandAlbum from '../images/HiatusKiyote_ALBUM.webp'

const Hiatus = () => {
  return (
    <>
      <h1>Hiatus Kaiyote</h1>
      <img src={BandPhoto} />
      <img src={BandAlbum} />
      <p>
        This Australian sextet’s second album is a whirlwind of nu-funk,
        neo-soul, and electronic. The band exhibits the chops of a jazz fusion
        ensemble, augmenting tracks with small yet delightful details, from the
        classic hip-hop piano break that closes “Swamp Thing” to the stop-start
        beats of “Breathing Underwater” that sound like gulps of air.
        Throughout, lead singer and rhythm guitarist Nai Palm’s elastic vocals
        explore the nuances of yearning and desire, as she yelps, coos, riffs,
        and lures us in.
      </p>
    </>
  )
}

export default Hiatus
