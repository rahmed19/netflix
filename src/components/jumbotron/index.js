import React from 'react'
import { Inner } from './styles/jumbotron'

export function Jumbotron ({direction = 'row'}){
    return (
        <Inner direction={direction}>Hello</Inner>
    )
}

export default Jumbotron