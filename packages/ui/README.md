# **Move Components to Zuri Main**

_The components use some universal functions_

1. The first function gets the users information in order to populate the members modal with information. This takes the form of an API that that calls the currentworkspace endpoint to get the details.

```js
const GetUserInfo = async () => {...}
```

2. The second function uses the currentworkspace API to get the identifier that matches the user email. If not it throws an error

```javascript
const GetWorkspaceUser = async () => {...}
```

3. The third function gets the exact number of people that are in the workspace

```javascript
const GetWorkspaceUsers = async () => {...}
```

### **Components and their uses**

There are various reusable components that is used across various plugins. These components are as follows:

| Component       |                                             Description |
| --------------- | ------------------------------------------------------: |
| Channel Details |                 Displays the details of current channel |
| Chat box        |                Displays the comment section and threads |
| Delete channel  |                           Permanently deletes a channel |
| Archive channel |                                      Archives a channel |
| Message board   |                                  container for messages |
| Message Input   |                                  input box for messages |
| Plugin Modal    | houses the settings, apps, integration and about modals |
| Edit Modal      |               Use to edit channel topic and description |
| Leave Modal     |                        Allows user to leave the channel |
| Emoji Reaction  |                                     Adds emojis to chat |

## How to Use the Components

1. Channel Details  
   Displays the details of the current channel

```js
function ChannelDetails ({initialTabIndex=0, channelDetailsConfig, handleCloseChannelDetails }){...}
```

| Props                     |  Type   |
| ------------------------- | :-----: |
| initialTabIndex           | number  |
| changeDetailsConfig       | boolean |
| handleCloseChannelDetails | boolean |

2. Chat Box
   Displays the comment section and threads

```js
const ChatItem = ({ richUiMessageConfig }) => {...}
```

| Props               |  Type   |
| ------------------- | :-----: |
| richUiMessageConfig | boolean |

3. Delete Channel
   Permanently deletes a channel

```js
const DeleteChannel = ({closeEdit}) => {...}
```

| Props     |  Type   |
| --------- | :-----: |
| closeEdit | boolean |

4. Archive Channel
   Archives a channel

```js
const ArchiveChannel = ({closeEdit}) => {...}
```

| Props     |  Type   |
| --------- | :-----: |
| closeEdit | boolean |

5. Message Board
   Displays messages sent between users in real time

```js
function MessageCard({ messageData }) {...}
```

| Props       |    Type     |
| ----------- | :---------: |
| messageData | string, url |

6. Message Input
   Contains the emoji, file share, keyboard and mention functions

```js
const MessageInputBox = ({
  sendMessageHandler,
  addToMessages,
  currentUserData,
  users
}) => {...}
```

| Props              |  Type   |
| ------------------ | :-----: |
| sendMessageHandler | boolean |
| addToMessages      | boolean |
| currentUserData    | object  |
| users              |  array  |
