import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1>Daniel Demerin's Top 3 (kind of) Bands!</h1>
      <p>
        As it stands, I'm a big music lover. My tastes vary greatly and it's
        extremely hard to nail down a real list of "favorite bands". Below are
        just the three bands that came to mind after scouring through Spotify.
      </p>
      <ul>
        <li>
          <Link to="/Hiatus">Hiatus Kaiyote</Link>
          <p>
            Hiatus Kaiyote is a future soul quartet formed in Melbourne in 2011.
            The members are Naomi "Nai Palm" Saalfield, Paul Bender, Simon Mavin
            and Perrin Moss. They have been nominated twice for Grammy Awards.
          </p>
        </li>
        <li>
          <Link to="/Snarky">Snarky Puppy</Link>
          <p>
            Snarky Puppy is a Brooklyn, New York-based instrumental ensemble led
            by bassist Michael League. Snarky Puppy combines a variety of jazz
            idioms, rock, world music, and funk and has won three Grammy Awards.
          </p>
        </li>
        <li>
          <Link to="/Umo">Unknown Mortal Orchestra</Link>
          <p>
            Unknown Mortal Orchestra is a Portland, Oregon-based New Zealand
            psychedelic rock band primarily composed of singer, guitarist, and
            songwriter Ruban Nielson, and bassist Jake Portrait. Nielson,
            formerly of The Mint Chicks, started the band in 2010.
          </p>
        </li>
      </ul>
    </>
  )
}

export default HomePage
