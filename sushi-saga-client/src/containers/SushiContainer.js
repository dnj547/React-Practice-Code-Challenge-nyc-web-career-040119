import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.slice(0,4).map(oneSushi =>
          <Sushi key={oneSushi.id} sushi={oneSushi} removeSushi={props.removeSushi}/>)}
        <MoreButton getMoreSushi={props.getMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
