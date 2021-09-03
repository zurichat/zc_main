import React from 'react'
import * as FaIcons from 'react-icons/fi'
import * as AiIcons from 'react-icons/ai'
import * as VscIcons from 'react-icons/vsc'

export const PreferenceListData = [
  {
    title: 'Notifications',
    icon: <FaIcons.FiBell />,
    cName: 'tab-text',
    path: '#'
  },
  {
    title: 'Sidebar',
    icon: <FaIcons.FiGrid />,
    cName: 'tab-text',
    path: '#'
  },
  {
    title: 'Themes',
    icon: <FaIcons.FiEye />,
    cName: 'tab-text',
    path: '#'
  },
  {
    title: 'Messages & media',
    icon: <FaIcons.FiMessageSquare />,
    cName: 'tab-text',
    path: '#'
  },
  {
    title: 'Languages & region',
    icon: <FaIcons.FiGlobe />,
    cName: 'tab-text',
    path: '#'
  },
  {
    title: 'Accessibility',
    icon: <AiIcons.AiOutlineDesktop />,
    cName: 'tab-text',
    path: '#'
  },
  {
    title: 'Mark as read',
    icon: <FaIcons.FiCheckSquare />,
    cName: 'tab-text',
    path: '#'
  },
  {
    title: 'Audio & video',
    icon: <FaIcons.FiVideo />,
    cName: 'tab-text',
    path: '#'
  },
  {
    title: 'Advanced',
    icon: <VscIcons.VscSettings />,
    cName: 'tab-text',
    path: '#'
  }
]
