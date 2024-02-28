import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from '../images/recycling-water.png'
import fimage2 from '../images/water-tap.png'
import fimage3 from '../images/drop.png'
function Feature() {
  return (
    <div id='features'>
<h1>features</h1>
<div className='a-container'>
    <Featurebox image={fimage1} title="cvevdf"/>
    <Featurebox image={fimage3} title="dcdd"/>
    <Featurebox image={fimage2} title="dcdd"/>
    <Featurebox image={fimage2} title="dcdd"/>
    <Featurebox image={fimage2} title="dcdd"/>
</div>

    </div>
  )
}

export default Feature