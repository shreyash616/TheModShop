import React, { useState, useEffect } from 'react'
import {H1, H2} from '../../../common/components/typography'
import homeConstants from '../../../common/constants/homeConstants'
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

import {
  CustomLink,
  Division,
  PageWrapper, Section
} from './styles'

const Home = ({flags}) => {  

  const [showPage, setShowPage] = useState(false)

  useEffect(()=>{
    if(Object.keys(flags).length > 0){
      setShowPage(true)
    }
  }, [flags])

  const getDivision = (header, desc, switchVal) => {
    return (
    <Section switch={switchVal}>
      <Division>
        <H1 xl dark={!switchVal}>{header}</H1>
      </Division>
      <Division>
        <H2 xl dark={!switchVal}>{desc}</H2>
      </Division>
    </Section>
    )
  }

  return (
      showPage
      ?<PageWrapper>        
        {getDivision(homeConstants.HEADING, homeConstants.SUBHEADING, flags.testflag)}
        {getDivision(homeConstants.ABOUT.TITLE, homeConstants.ABOUT.CONTENT, !flags.testflag)}
        {getDivision(homeConstants.EXPERIENCE.TITLE, homeConstants.EXPERIENCE.CONTENT, flags.testflag)}
        {getDivision(homeConstants.DEVICES.TITLE, <React.Fragment>{homeConstants.DEVICES.CONTENT.split(':')[0]}<CustomLink>{homeConstants.DEVICES.CONTENT.split(':')[1]}</CustomLink>{homeConstants.DEVICES.CONTENT.split(':')[2]}<CustomLink>{homeConstants.DEVICES.CONTENT.split(':')[3]}</CustomLink></React.Fragment>, !flags.testflag)}        
      </PageWrapper>
      :<div><h1>Loading...</h1></div>
  )
}

export default withLDConsumer()(Home)