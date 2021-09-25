// import { Fragment, useEffect, useState } from 'react'
import fetcher from '../utils/fetcher'
import Dropdown from './Dropdown'
import SkeletonLoader from './SkeletonLoader'
// import { navigateToUrl } from 'single-spa'

export default function Messages({ organization, userid }) {
  const [isLoading, , list] = fetcher(
    `https://dm.zuri.chat/api/v1/sidebar?org=${organization}&user=${userid}`
  )

  // console.log(list, 'Dms')
  return (
    <>
      {isLoading ? (
        <Dropdown onAddButtonClick={open} showAddButton={true} title="Messages">
          <SkeletonLoader />
          <SkeletonLoader />
        </Dropdown>
      ) : (
        <Dropdown onAddButtonClick={open} showAddButton={true} title="Messages">
          {/*Replace with Data when Available */}
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </Dropdown>
      )}
    </>
  )
}
