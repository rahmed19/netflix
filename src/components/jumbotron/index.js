import React from 'react'
import { Inner } from './styles/jumbotron'

export function Jumbotron ({direction = 'row'}){
    return (
        <Inner direction={direction}>BismiAllah</Inner>
    )
}

export default Jumbotron