import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const EvolutionContainer = styled.div`
  ${cardConfig}
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  grid-area: evolution;
  
  .evolutions__container{
    cursor: pointer;
    .evolution__item{
      height: 100%;
      align-items: center;
      justify-content: flex-end;
      display: flex;
      flex-direction: column;
      
      h4{
        font-size: 1.2em;
      }
      
      p{
        font-size: 1em;
      }
      
      img{
        height: 65%;
      }
    }
  }
`
