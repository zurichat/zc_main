import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import Logo from '../../component-assets/logo.svg'

const index = () => {
  return (
    <Errror404>
      <div className="LogoDiv">
          <Helmet>
          <title>Error 404 !</title>
         </Helmet>
        <Link to="/">
          <img src={Logo} alt="Zuri Logo" />
        </Link>
      </div>

      <div>
        <h1>404</h1>
        <p>
          Oops something is missing!! Go to <Link to="/">zuri.chat</Link>
        </p>
      </div>
    </Errror404>
  )
}

export default index

const Errror404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  & * {
    font-size: 18px;
  }

  div {
    margin: 2rem;
    &:not([class^='LogoDiv']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        font: inherit;
        border: none;
        transition: all 0.1s ease-in-out;
        ${'' /* padding-inline: 0.5rem; */}

        &:hover {
          color: white;
          background-color: var(--primary-color);
        }
      }
    }
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`
