import styled from 'styled-components'
export const ListWrapper = styled.li`
  list-style: none;
  padding: 0.5rem 0;
  border-top: 1px solid #dee1ec;

  &:hover {
    background-color: #fafafa;
    transition: background-color 250ms ease-out;
    button {
      display: block;
    }
  }
  position: relative;
  cursor: pointer;
`
export const Title = styled.p`
  font-weight: bold;
`
export const BottomItems = styled.div`
  display: flex;
  gap: 4px;
  padding-left: 6px;
`
export const Span = styled.span`
  font-size: 0.8rem;
`
export const Hash = styled(Span)`
  padding: 0.5rem;
`

export const Joined = styled(Span)`
  color: #007a5a;
`
export const Text = styled(Joined)`
  font-weight: bold;
`
export const Bull = styled(Span)`
  padding: 0 0 0.5rem;
`
export const Button = styled.button`
  padding: 0.5rem 1.2rem;
  position: absolute;
  right: 10px;
  top: 25%;
  font-size: 13px;
  border-radius: 5px;

  font-weight: bold;
  border: none;
  display: none;
  color: #1d1c1d;
  &.leave {
    background-color: #007a5a;
    color: white;
  }
`
