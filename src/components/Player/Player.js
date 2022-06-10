import React from 'react'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import { AllBody } from './styles'

const Player = () => {
    return (
        <>
        <AllBody>
            <Sidebar/>
            <Body/>
        </AllBody>
            <Footer />
        </>
    )
}

export default Player
