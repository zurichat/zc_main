import Header from './pluginHeader.component'
import '../../settings/config'
import { useTranslation } from 'react-i18next'

export default function Root(props) {
  
  return (
    <div>
      
        <Header headerConfig={props.headerConfig} />
      
    </div>
  )
}
