import { Fragment } from 'react'
import fetcher from '../utils/fetcher'
import Dropdown from './Dropdown'
import SkeletonLoader from './SkeletonLoader'
import { navigateToUrl } from 'single-spa'

export default function Channels() {
  const [isLoading, , list] = fetcher(
    'https://channels.zuri.chat/api/v1/sidebar/?org=1&user=61468abd1a5607b13c00bd4f'
  )
  return (
    <>
      {isLoading ? (
        <Dropdown onAddButtonClick={open} showAddButton={true} title="Channels">
          <SkeletonLoader />
          <SkeletonLoader />
        </Dropdown>
      ) : (
        <Dropdown onAddButtonClick={open} showAddButton={true} title="Channels">
          {list.joined_rooms.slice(0, 6).map((room, index) => {
            return (
              <Fragment key={index}>
                <a href={room.url} onClick={navigateToUrl}>
                  {`# ${room.sidebar_item_name}`}
                </a>
              </Fragment>
            )
          })}
        </Dropdown>
      )}
    </>
  )
}
