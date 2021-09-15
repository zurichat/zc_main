import styled from 'styled-components'
import errImg from './assets/errImg.svg'
import zurichatlogo from './assets/zurichatlogo.svg'
import userAvatar from './assets/user.svg'
import arrowDown from './assets/arrow-down.svg'
import '../../components/verified/master.css'
import { useState } from 'react'

// Input tag
const Input = ({
  type,
  placeholder,
  id,
  border,
  label,
  error,
  width,
  value,
  onChange
}) => {
  const err = { message: 'Error message Here' }
  return (
    <>
      <BaseLabel border={border}>{label}</BaseLabel>
      <BaseInput
        value={value}
        onChange={onChange}
        type={type}
        width={width}
        error
        placeholder={placeholder}
        id={id}
        border={border}
      />
      {error && (
        <ErrorMessage>
          <img
            style={{ width: '1.5%', paddingBottom: '0.1rem' }}
            src={errImg}
            alt="error icon"
          />
          {err.message}
        </ErrorMessage>
      )}
    </>
  )
}

const active = '#00B87C'
const error = '#F40101'
const inActive = '#A1A1A1'

// Buttons

const Button = ({
  variant = 'primary',
  id = '',
  name = '',
  className = '',
  type = '',
  disabled = false,
  onClick,
  children
}) => {
  let Component

  switch (variant) {
    case 'primary':
      Component = PrimaryButton
      break
    case 'secondary':
      Component = SecondaryButton
      break
    case 'tertiary':
      Component = TertiaryButton
      break
    default:
      throw new Error(`Unrecognized Button variant: ${variant}`)
  }

  return (
    <Component
      id={`${id}`}
      className={`${className}`}
      name={`${name}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Component>
  )
}

const FloatingButton = ({
  id = '',
  name = '',
  className = '',
  type = '',
  disabled = false,
  onClick
}) => {
  let Component = FloatingButtonBase

  return (
    <Component
      id={`${id && id}`}
      className={`${className && className}`}
      name={`${name && name}`}
      disabled={disabled}
      onClick={onClick}
    >
      +
    </Component>
  )
}

//   Toggle

const Toggle = ({ selected, toggleSelected }) => {
  return (
    <div
      className={`toggle ${selected ? '' : 'toggle_disabled'}`}
      onClick={toggleSelected}
    >
      <div
        selected={selected}
        className={`toggle_ball ${selected ? '' : 'toggle_ball_disabled'}`}
      ></div>
    </div>
  )
}

const Checkbox = ({ checked, onClick }) => {
  return (
    <div>
      <label className="container">
        <input type="checkbox" onClick={onClick} checked={checked} />
        <span className="checkmark"></span>
      </label>
    </div>
  )
}

const TopNavBar = () => {
  const [search, setSearch] = useState('')

  return (
    <TopNavBarBase>
      <div>
        <img src={zurichatlogo} alt="zuri chat logo" />
        <LogoName>ZURI</LogoName>
      </div>
      <BaseInput
        value={search}
        onChange={e => setSearch(e.target.value)}
        type="text"
        width={7}
        error
        placeholder="Search here"
        border={'#99999933'}
      />
      <div>
        <img src={userAvatar} alt="user profile avatar" />
      </div>
    </TopNavBarBase>
  )
}

const PluginNavBar = () => {
  return (
    <PluginNavBarBase>
      <div>
        <PluginName> # </PluginName>
        <PluginName>Enter your plugin name here</PluginName>
        <PluginName>
          {' '}
          <img src={arrowDown} alt="user profile avatar" />
        </PluginName>
      </div>
      <AllUsers>
        <AllUsersImg src={userAvatar} role="button" alt="user profile avatar" />
        <AllUsersImg src={userAvatar} role="button" alt="user profile avatar" />
        <AllUsersImg src={userAvatar} role="button" alt="user profile avatar" />
        <AllUsersSpan>300</AllUsersSpan>
      </AllUsers>
    </PluginNavBarBase>
  )
}

function Test() {
  const [word, setWord] = useState('')
  const [email, setEmail] = useState('')
  const [selected, setSelected] = useState(false)
  const [checked, setChecked] = useState(false)

  return (
    <div>
      {/* Input tags */}
      <div>
        <Input
          type="text"
          width={11}
          value={word}
          onChange={e => setWord(e.target.value)}
          placeholder="InActive"
          border={active}
          label
        />
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          width={4}
          error
          placeholder="Enter your email here "
          label="Email"
          border={error}
        />
        <Input
          type="password"
          width={3}
          placeholder="Enter your password here"
          border={inActive}
        />
        {/* <p>props for input tag: type, placeholder, id, border, label, error, width</p> */}
      </div>

      {/* Typography */}
      <div>
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
        <p className="h_small">Small heading</p>
        <p className="t_btn_big">button text (Big)</p>
        <p className="t_btn_small">Button text (small)</p>
        <p className="t_regular">regular text</p>
        <p className="t_small">small text</p>
      </div>

      {/* Buttons */}
      <div>
        <h1>Primary Button</h1>
        <Button>Medium Button</Button>
        <Button>Medium Button</Button>
        <br />

        <h1>Secondary Button</h1>
        <Button variant={`secondary`}>Medium Button</Button>
        <Button variant={`secondary`}>Medium Button</Button>
        <br />

        <h1>Tertiary Button</h1>
        <Button variant={'tertiary'}>Medium Button</Button>
        <Button variant={'tertiary'} className={'underline'}>
          Medium Button
        </Button>
        <br />

        <h1>Floating Button</h1>
        <FloatingButton />
        <FloatingButton disabled />
      </div>

      {/* checkbox */}
      <div>
        <Checkbox checked={checked} onClick={() => setChecked(!checked)} />
      </div>

      {/* Toggle */}
      <div>
        <Toggle
          selected={selected}
          toggleSelected={() => {
            setSelected(!selected)
          }}
        />
      </div>
      <br />

      {/* Topbar */}
      <div>
        <TopNavBar />
      </div>

      {/* Plugin Navbar */}
      <PluginNavBar />
    </div>
  )
}

export default Test

// Input tag

const BaseInput = styled.input`
  border: 1px ${inActive} solid;
  padding: 0.25rem 1rem;
  font-weight: 400;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border-radius: 3px;
  background-color: transparent;
  width: ${props => (props.width / 12) * 100}%;
  box-sizing: border-box;

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #bebebe;
    font-size: 0.8rem;
  }
  &:hover {
    border: 1px ${active} solid;
  }
  &:focus {
    border: 1px ${active} solid !important;
  }
  &:focus-visible {
    border: 1px ${active} solid !important;
  }
`
const BaseLabel = styled.label`
    display:block;
    color: ${props => props.border};
    padding: 1rem 0;

  }
`
const ErrorMessage = styled.p`
    color: ${error};
  padding: 0 0.2rem;
  font-size: 0.8rem;
  }
  `

// Buttons

const ButtonBase = styled.button`
  font-size: ${18 / 16}rem;
  margin: 1rem;
  padding: 12px 18px;

  border: 1px solid var(--primary-color);
  border-radius: 2px;
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-weight: 400;
  transition: filter 600ms;
  &:disabled {
    opacity: 50%;
  }
  &:hover {
    box-shadow: 5px 4px 20px 0px #c4c4c44d;
    transition: filter 250ms;
    filter: brightness(110%);
  }
`
const PrimaryButton = styled(ButtonBase)`
  background-color: var(--primary-color);
  color: white;
  ${'' /* &:hover {box-shadow: 5px 4px 20px 0px #C0C4C94D;} */}
`
const SecondaryButton = styled(ButtonBase)`
  background-color: transparent;
  color: var(--primary-color);
  }
  &:hover {
      background-color: var(--primary-color);
      color: white;
  }
`
const TertiaryButton = styled(ButtonBase)`
  background-color: transparent;
  border: none;
  color: var(--primary-color);
  &.underline {
    text-decoration: underline;
  }
  &:hover {
    box-shadow: none;
  }
`
const FloatingButtonBase = styled.button`
  font-size: 2rem;
  margin: 1rem;
  padding-inline: 1rem;
  text-align: center;

  border: 1px solid var(--primary-color);
  border-radius: 50%;

  background-color: var(--primary-color);
  color: white;

  transition: ease-in-out 150ms;
  &:disabled {
    opacity: 50%;
  }
  &:enabled:active {
    color: var(--primary-color);
    background-color: var(--white);
  }
`

//   Toggle

// const InputWrapper = styled.label``
//   const Input = styled.input``
// const Slider = styled.span``

// Checkbox

//  TopNavBar

const TopNavBarBase = styled.div`
  background-color: var(--bg-2);
  padding: 1rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
`

const LogoName = styled.span`
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0px;
  padding: 0.5rem;
  text-align: center;
  vertical-align: middle;
`
const PluginNavBarBase = styled.div`
  background-color: var(--primary-color);
  padding: 0.5rem 1rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
`

const PluginName = styled.span`
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--bg-2);
  vertical-align: middle;
  padding: 0 0.3rem;
`

const AllUsers = styled.span`
  background-color: #01d892;
  width: 105px;
  height: 30px;
  border-radius: 4px;
`
const AllUsersImg = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 4px;
  border: 1px #01d892 solid;
`

const AllUsersSpan = styled.span`
  color: var(--bg-2);
  vertical-align: middle;
  padding: 0 0.1rem;
`
export {
  Input,
  Button,
  FloatingButton,
  Toggle,
  Checkbox,
  TopNavBar,
  PluginNavBar
}
