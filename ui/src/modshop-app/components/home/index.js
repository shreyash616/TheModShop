import React from 'react'
import {H1, H2} from '../../../common/components/typography'
import homeConstants from '../../../common/constants/homeConstants'

import {
  CustomLink,
  Division,
  PageWrapper, Section
} from './styles'

const Home = () => {

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
      <PageWrapper>        
        {getDivision(homeConstants.HEADING, homeConstants.SUBHEADING, false)}
        {getDivision(homeConstants.ABOUT.TITLE, homeConstants.ABOUT.CONTENT, true)}
        {getDivision(homeConstants.EXPERIENCE.TITLE, homeConstants.EXPERIENCE.CONTENT, false)}
        {getDivision(homeConstants.DEVICES.TITLE, <React.Fragment>{homeConstants.DEVICES.CONTENT.split(':')[0]}<CustomLink>{homeConstants.DEVICES.CONTENT.split(':')[1]}</CustomLink>{homeConstants.DEVICES.CONTENT.split(':')[2]}<CustomLink>{homeConstants.DEVICES.CONTENT.split(':')[3]}</CustomLink></React.Fragment>, true)}        
      </PageWrapper>
  )
}

export default Home