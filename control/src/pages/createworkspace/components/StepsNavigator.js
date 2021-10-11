import styled from "styled-components"
import { useHistory } from "react-router-dom"
import BackArrow from "../assets/BackArrow.svg"

const StepsNavigator = ({ step }) => {
  let history = useHistory()

  const previousStep = () => {
    history.goBack()
  }

  return (
    <Navigator>
      <img onClick={previousStep} src={BackArrow} alt="" />
      <Step>Step {step} of 3</Step>
    </Navigator>
  )
}

const Navigator = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  & > img {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    filter: invert(56%) sepia(0%) saturate(78%) hue-rotate(170deg)
      brightness(90%) contrast(79%);

    &:hover {
      opacity: 0.75;
    }
  }
`

const Step = styled.span`
  font-weight: 600;
  font-size: ${18 / 16}rem;
  font-family: var(--font-family);
  color: #808080;
  @media (max-width: 35rem) {
    font-size: 1rem;
  }
`

export default StepsNavigator
