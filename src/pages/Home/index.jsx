import { HomeContainer } from './style'
import React from 'react'
import SearchInput from 'components/SearchInput'
import MainCard from 'components/MainCard'
import Evolution from 'components/Evolution'
import PokemonType from 'components/PokemonType'
import StatsInfo from 'components/StatsInfo'
import Footer from 'components/Footer'
import PokemonGroup from 'components/PokemonGroup'
import Title from 'components/Title'
import { PokemonProvider } from 'context/pokemon'

function Home () {
  return (
    <PokemonProvider>
      <HomeContainer>
        <SearchInput />
        <MainCard />
        <PokemonGroup />
        <Title
          HtmlSize='h3'
          className='title__evolution'
          text='Evolutions'
          style={{ gridArea: 'title__evolution' }}
        />
        <Evolution />
        <Title
          HtmlSize='h3'
          className='title__type'
          text='Type and information'
          style={{ gridArea: 'title__type' }}
        />
        <PokemonType />
        <StatsInfo />
        <Footer />
      </HomeContainer>
    </PokemonProvider>
  )
}

export default Home
