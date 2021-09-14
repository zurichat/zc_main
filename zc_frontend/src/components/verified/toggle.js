import styled from 'styled-component';

const Toggle = () => {
    return(
        <InputWrapper>
        <Input type = "checkbox" />
        <Slider />
        </InputWrapper >
    )
}

const InputWrapper = styled.label`
`
const Input = styled.input``
const Slider = styled.span``

export default Toggle;