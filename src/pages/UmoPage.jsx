import React from 'react'

import BandPhoto from '../images/UMO-770x470.jpg'
import BandAlbum from '../images/UMO-ALBUM.jpg'

const Umo = () => {
  return (
    <>
      <h1>Unknown Mortal Orchestra</h1>
      <img src={BandPhoto} />
      <img src={BandAlbum} />
      <p>
        Featured snippet from the web IC-01 Hanoi presents a visceral, smoky,
        casual session that cooks together fairly tumultuous moods over the
        course of its concise runtime. You can hear the steam being blown off in
        the roiling opener “Hanoi 1” as Nielson shreds with a newfound sense of
        freedom, no longer hemmed in by his own songs and arrangements.
      </p>
    </>
  )
}

export default Umo
