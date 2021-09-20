import { RedocStandalone } from 'redoc'
import plugin from '../plugin.yaml'

function PluginApi() {
  return (
    <div>
      <RedocStandalone specUrl={plugin} />
    </div>
  )
}

export default PluginApi
