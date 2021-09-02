import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { GoogleLogin } from 'react-google-login'

test('renders google login component', () => {
  const component = render(
    <GoogleLogin
      clientId="78755437309-27q9m2toval9c439d2r7q5gj28h0pqcc.apps.googleusercontent.com"
      buttonText="Login with google"
    />
  )
  expect(component).toBeDefined()
  expect(component.container).toHaveTextContent('Login with google')
})
