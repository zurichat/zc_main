import { Overlay, Content } from './sidebar.component'
import { useTranslation } from 'react-i18next'

const Invite = () => {
  const { t } = useTranslation()
  return (
    <Overlay>
      <Content>
        <h2>{t('invited')}</h2>
      </Content>
    </Overlay>
  )
}
export default Invite
