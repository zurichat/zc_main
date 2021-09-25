import { Fragment, useEffect, useState } from 'react'
import fetcher from '../utils/fetcher'
import Dropdown from './Dropdown'
import SkeletonLoader from './SkeletonLoader'
import { navigateToUrl } from 'single-spa'

export default function Channels({ organization, userid }) {
  const [isLoading, , list] = fetcher(
    `https://channels.zuri.chat/api/v1/sidebar/?org=${organization}&user=${userid}`
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
          {list.public_rooms.map((room, index) => {
            return (
              <Fragment key={index}>
                <a href={room.url} onClick={navigateToUrl}>
                  {`# ${room.sidebar_item_name}`}
                </a>
              </Fragment>
            )
          })}
          {list.joined_rooms.map((room, index) => {
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
