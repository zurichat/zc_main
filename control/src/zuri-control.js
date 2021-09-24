import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Root from './root.component'
import axios from 'axios'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null
  }
})

export const GetUserInfo = async ( userID, token ) => {
  // let userID = '6146f82c845b436ea04d10e1'
  // let token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb29raWUiOiJNVFl6TWpBME1qa3pNbnhIZDNkQlIwUlplRTVFVFROTlJGVXdXa1JCZVU5RVVtbFplbHBvVDFSSmVVMTZVVEpaWnowOWZEZmM3TGdsUUc1OGhuak1oY1dVcGNOTS1xQXN5UEZtajR3eURYVlBtWkdFIiwiZW1haWwiOiJwaWRAb3h5LmNvbSIsImlkIjoiNjE0MzcwNTRkMDI4NGJjNmE5MjIzNDZiIiwib3B0aW9ucyI6eyJQYXRoIjoiLyIsIkRvbWFpbiI6IiIsIk1heEFnZSI6NjMwNzIwMDAwMCwiU2VjdXJlIjpmYWxzZSwiSHR0cE9ubHkiOmZhbHNlLCJTYW1lU2l0ZSI6MH0sInNlc3Npb25fbmFtZSI6ImY2ODIyYWY5NGUyOWJhMTEyYmUzMTBkM2FmNDVkNWM3In0.jrfU1SdZWYfRDW15LQqucu1CQUn52HyJKk-RlThN7fg'
  // let user = JSON.parse(sessionStorage.getItem('user'))
  // let token = sessionStorage.getItem('token')
  // let sessionId = sessionStorage.getItem('session_id')

  // console.log(user.id)

  try {
    const response = await axios.get(`https://api.zuri.chat/users/${userID}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response.data.data)
    return response.data.data
  } catch (err) {
    console.log(err)
  }
}

// const GetWorkspaceUsers = () => {
//   // let org_id = `61459d8e62688da5302acdb1`;

//   // axios
//   //   .get(`https://api.zuri.chat/organizations/${org_id}/members`)
//   //   .then(res => {
//   //     let user = res.data.data
//   //     console.log(user)
//   //     return user
//   //   })
//   //   .catch(err => console.log(err))

//   let data = {
//     data: [
//       {
//         _id: '61459d8e62688da5302acdb2',
//         bio: '',
//         deleted: false,
//         deleted_at: '0001-01-01T00:00:00Z',
//         display_name: '',
//         email: 'mike@zuri.team',
//         files: null,
//         image_url: '',
//         joined_at: '0001-01-01T00:00:00Z',
//         name: '',
//         org_id: '61459d8e62688da5302acdb1',
//         phone: '',
//         presence: 'true',
//         pronouns: '',
//         role: 'owner',
//         settings: null,
//         socials: null,
//         status: '',
//         time_zone: '',
//         user_name: 'mike'
//       },
//       {
//         _id: '6145b815285e4a18402073cd',
//         bio: '',
//         deleted: false,
//         deleted_at: '0001-01-01T00:53:28+00:53',
//         display_name: '',
//         email: 'damiloladolor@email.com',
//         files: null,
//         first_name: '',
//         image_url: '',
//         joined_at: '2021-09-18T11:57:41.281+02:00',
//         last_name: '',
//         org_id: '61459d8e62688da5302acdb1',
//         phone: '',
//         presence: 'true',
//         pronouns: '',
//         role: 'member',
//         settings: {
//           messages_and_media: {
//             additional_options: null,
//             'bring_emails_into_zuri bson:': '',
//             convert_emoticons_to_emoji: false,
//             custom: false,
//             emoji: '',
//             emoji_as_text: false,
//             frequently_used_emoji: false,
//             inline_media_and_links: null,
//             messages_one_click_reaction: null,
//             names: '',
//             show_jumbomoji: false,
//             theme: ''
//           },
//           notifications: {
//             channel_hurdle_notification: false,
//             email_notifications_for_mentions_and_dm: null,
//             message_preview_in_each_notification: false,
//             mute_all_sounds: false,
//             my_keywords: '',
//             notification_schedule: '',
//             notify_me_about: '',
//             thread_replies_notification: false,
//             use_different_settings_mobile: '',
//             when_iam_not_active_on_desktop: ''
//           },
//           sidebar: {
//             always_show_in_the_sidebar: null,
//             list_private_channels_seperately: false,
//             organize_external_conversations: false,
//             show_conversations: '',
//             show_profile_picture_next_to_dm: false,
//             sidebar_sort: ''
//           },
//           themes: {
//             colors: '',
//             themes: ''
//           }
//         },
//         sidebars: {
//           check_spelling: true
//         },
//         socials: null,
//         status: '',
//         time_zone: '',
//         user_name: 'damiloladolor'
//       },
//       {
//         _id: '6146359c1a5607b13c00bbf4',
//         bio: '',
//         deleted: false,
//         deleted_at: '0001-01-01T00:53:28+00:53',
//         display_name: '',
//         email: 'bright@gmail.com',
//         files: null,
//         first_name: '',
//         global_settings: {
//           allow_only_admin_invite: true,
//           allow_user_add_plugins: true
//         },
//         id: '',
//         image_url:
//           'https://api.zuri.chat/files/profile_image/61459d8e62688da5302acdb1/6146359c1a5607b13c00bbf4/20210923172949_0.jpg',
//         joined_at: '2021-09-18T20:53:16.025+02:00',
//         last_name: '',
//         name: '',
//         org_id: '61459d8e62688da5302acdb1',
//         phone: '',
//         plugin_settings: {
//           chess_plugin: {}
//         },
//         presence: 'false',
//         pronouns: '',
//         role: 'member',
//         settings: {
//           chat_settings: {
//             enter_is_send: false,
//             font_size: '',
//             media_visibility: false,
//             theme: '',
//             wallpaper: ''
//           },
//           messages_and_media: {
//             additional_options: null,
//             bring_emails_into_zuri: '',
//             convert_emoticons_to_emoji: false,
//             custom: false,
//             emoji: '',
//             emoji_as_text: false,
//             frequently_used_emoji: false,
//             inline_media_and_links: null,
//             messages_one_click_reaction: null,
//             names: '',
//             show_jumbomoji: false,
//             theme: ''
//           },
//           notifications: {
//             channel_hurdle_notification: false,
//             email_notifications_for_mentions_and_dm: null,
//             message_preview_in_each_notification: false,
//             mute_all_sounds: false,
//             my_keywords: '',
//             notification_schedule: '',
//             notify_me_about: '',
//             thread_replies_notification: false,
//             use_different_settings_mobile: '',
//             when_iam_not_active_on_desktop: ''
//           },
//           sidebar: {
//             always_show_in_the_sidebar: null,
//             list_private_channels_seperately: false,
//             organize_external_conversations: false,
//             show_conversations: '',
//             show_profile_picture_next_to_dm: false,
//             sidebar_sort: ''
//           },
//           themes: {
//             colors: '',
//             themes: ''
//           }
//         },
//         socials: null,
//         status: '',
//         time_zone: '',
//         user_name: 'bright'
//       },
//       {
//         _id: '6146f66d845b436ea04d10db',
//         bio: '',
//         deleted: false,
//         deleted_at: '0001-01-01T00:53:28+00:53',
//         display_name: '',
//         email: 'testafasta@gmail.com',
//         files: null,
//         first_name: '',
//         image_url: '',
//         joined_at: '2021-09-19T10:35:57.782+02:00',
//         last_name: '',
//         org_id: '61459d8e62688da5302acdb1',
//         phone: '',
//         presence: 'true',
//         pronouns: '',
//         role: 'member',
//         settings: {
//           messages_and_media: {
//             additional_options: null,
//             bringemailsintozuri: '',
//             convert_emoticons_to_emoji: false,
//             custom: false,
//             emoji: '',
//             emoji_as_text: false,
//             frequently_used_emoji: false,
//             inline_media_and_links: null,
//             messages_one_click_reaction: null,
//             names: '',
//             show_jumbomoji: false,
//             theme: ''
//           },
//           notifications: {
//             channel_hurdle_notification: false,
//             email_notifications_for_mentions_and_dm: null,
//             message_preview_in_each_notification: false,
//             mute_all_sounds: false,
//             my_keywords: '',
//             notification_schedule: '',
//             notify_me_about: '',
//             thread_replies_notification: false,
//             use_different_settings_mobile: '',
//             when_iam_not_active_on_desktop: ''
//           },
//           sidebar: {
//             always_show_in_the_sidebar: null,
//             list_private_channels_seperately: false,
//             organize_external_conversations: false,
//             show_conversations: '',
//             show_profile_picture_next_to_dm: false,
//             sidebar_sort: ''
//           },
//           themes: {
//             colors: '',
//             themes: ''
//           }
//         },
//         socials: null,
//         status: '',
//         time_zone: '',
//         user_name: 'testafasta'
//       },
//       {
//         _id: '614701b3845b436ea04d1122',
//         bio: '',
//         deleted: false,
//         deleted_at: '0001-01-01T00:53:28+00:53',
//         display_name: '',
//         email: 'jbadmin@gmail.com',
//         files: null,
//         first_name: '',
//         image_url: '',
//         joined_at: '2021-09-19T11:24:03.168+02:00',
//         last_name: '',
//         org_id: '61459d8e62688da5302acdb1',
//         phone: '',
//         presence: 'true',
//         pronouns: '',
//         role: 'member',
//         settings: {
//           messages_and_media: {
//             additional_options: null,
//             bringemailsintozuri: '',
//             convert_emoticons_to_emoji: false,
//             custom: false,
//             emoji: '',
//             emoji_as_text: false,
//             frequently_used_emoji: false,
//             inline_media_and_links: null,
//             messages_one_click_reaction: null,
//             names: '',
//             show_jumbomoji: false,
//             theme: ''
//           },
//           notifications: {
//             channel_hurdle_notification: false,
//             email_notifications_for_mentions_and_dm: null,
//             message_preview_in_each_notification: false,
//             mute_all_sounds: false,
//             my_keywords: '',
//             notification_schedule: '',
//             notify_me_about: '',
//             thread_replies_notification: false,
//             use_different_settings_mobile: '',
//             when_iam_not_active_on_desktop: ''
//           },
//           sidebar: {
//             always_show_in_the_sidebar: null,
//             list_private_channels_seperately: false,
//             organize_external_conversations: false,
//             show_conversations: '',
//             show_profile_picture_next_to_dm: false,
//             sidebar_sort: ''
//           },
//           themes: {
//             colors: '',
//             themes: ''
//           }
//         },
//         socials: null,
//         status: '',
//         time_zone: '',
//         user_name: 'jbadmin'
//       },
//       {
//         _id: '614701f3845b436ea04d1124',
//         bio: '',
//         deleted: false,
//         deleted_at: '0001-01-01T00:53:28+00:53',
//         display_name: '',
//         email: 'pid@oxy.com',
//         files: null,
//         first_name: '',
//         image_url: '',
//         joined_at: '2021-09-19T11:25:07.013+02:00',
//         last_name: '',
//         org_id: '61459d8e62688da5302acdb1',
//         phone: '',
//         presence: 'true',
//         pronouns: '',
//         role: 'member',
//         settings: {
//           messages_and_media: {
//             additional_options: null,
//             bringemailsintozuri: '',
//             convert_emoticons_to_emoji: false,
//             custom: false,
//             emoji: '',
//             emoji_as_text: false,
//             frequently_used_emoji: false,
//             inline_media_and_links: null,
//             messages_one_click_reaction: null,
//             names: '',
//             show_jumbomoji: false,
//             theme: ''
//           },
//           notifications: {
//             channel_hurdle_notification: false,
//             email_notifications_for_mentions_and_dm: null,
//             message_preview_in_each_notification: false,
//             mute_all_sounds: false,
//             my_keywords: '',
//             notification_schedule: '',
//             notify_me_about: '',
//             thread_replies_notification: false,
//             use_different_settings_mobile: '',
//             when_iam_not_active_on_desktop: ''
//           },
//           sidebar: {
//             always_show_in_the_sidebar: null,
//             list_private_channels_seperately: false,
//             organize_external_conversations: false,
//             show_conversations: '',
//             show_profile_picture_next_to_dm: false,
//             sidebar_sort: ''
//           },
//           themes: {
//             colors: '',
//             themes: ''
//           }
//         },
//         socials: null,
//         status: '',
//         time_zone: '',
//         user_name: 'pid'
//       },
//       {
//         _id: '614729a2f41cb684cc531ac7',
//         bio: '',
//         deleted: false,
//         deleted_at: '0001-01-01T00:53:28+00:53',
//         display_name: ' Pleas2',
//         email: 'blazebrain03@gmail.com',
//         files: null,
//         first_name: '1',
//         id: '',
//         image_url: 'Prince Emelife',
//         joined_at: '2021-09-19T14:14:26.524+02:00',
//         last_name: '',
//         org_id: '61459d8e62688da5302acdb1',
//         phone: 'works',
//         presence: 'true',
//         pronouns: '',
//         role: 'member',
//         settings: {
//           messages_and_media: {
//             additional_options: null,
//             bringemailsintozuri: '',
//             convert_emoticons_to_emoji: false,
//             custom: false,
//             emoji: '',
//             emoji_as_text: false,
//             frequently_used_emoji: false,
//             inline_media_and_links: null,
//             messages_one_click_reaction: null,
//             names: '',
//             show_jumbomoji: false,
//             theme: ''
//           },
//           notifications: {
//             channel_hurdle_notification: false,
//             email_notifications_for_mentions_and_dm: null,
//             message_preview_in_each_notification: false,
//             mute_all_sounds: false,
//             my_keywords: '',
//             notification_schedule: '',
//             notify_me_about: '',
//             thread_replies_notification: false,
//             use_different_settings_mobile: '',
//             when_iam_not_active_on_desktop: ''
//           },
//           sidebar: {
//             always_show_in_the_sidebar: null,
//             list_private_channels_seperately: false,
//             organize_external_conversations: false,
//             show_conversations: '',
//             show_profile_picture_next_to_dm: false,
//             sidebar_sort: ''
//           },
//           themes: {
//             colors: '',
//             themes: ''
//           }
//         },
//         socials: null,
//         status: '',
//         time_zone: '',
//         user_name: 'blazebrain03'
//       }
//     ]
//   }

//   // let it = data
//   // console.log(it)
//   sessionStorage.setItem('WorkspaceUsers', JSON.stringify(data.data))
// }

// GetWorkspaceUsers()

// const call = () => {
//   let it = sessionStorage.getItem('WorkspaceUser')
//   console.log(it)
// }

// call()

export const { bootstrap, mount, unmount } = lifecycles
