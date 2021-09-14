import { RedocStandalone } from 'redoc'
import data from '../data.yaml'

function DataApi() {
  return (
    <div>
      <RedocStandalone specUrl={data} />
    </div>
  )
}

export default DataApi
