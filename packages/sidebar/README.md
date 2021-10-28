#Sidebar Documentation
Documentation of the protocols for sidebar

#####Adding plugin to the Sidebar
Example url: 
> https://example.zuri.chat/sidebar

######Sample Response
```
{
   "name": "Plugin",
   "description": "Plugin info",
   "group_name": "my plugin",
   "category": "productivity",
   "show_group": false,
   "button_url": "/plugin",
   "public_rooms": [],
   "joined_rooms": []
}
```


#####Plugin categories
```
"games"
"utility"
"tools"
"entertainment"
"sales"
"productivity"
``` 
#####Rules for grouping plugins
1. If your plugin is a single room that should show up on the top level, don't include the `category` key in your data.
2. If your plugin is a single room that should show up under a `category`, set the `category` to any of the category options above, then set `show_group` to `false`.
If your plugin need it's own group, set the `category` to any the category options above, then set `show_group` to `true` , then make sure you set a `group_name`

> NB: If plugin is a single room don't add `category` to sidebar payload

######Sample Response
```
{
   "name": "Plugin",
   "description": "Plugin info",
   "group_name": "my plugin",
   "category": "productivity",
   "show_group": false,
   "button_url": "/plugin",
   "public_rooms": [],
   "joined_rooms": []
}
```

####Update Sidebar Realtime

`Subscribe to channel for sidebar update`
> currentworkspace_memberid_sidebar


####Update Room Realtime

Payload:
```
{
    event: "sidebar_update",
    plugin_id: "domain", //domain.zuri.chat,
    data: {
      "name": "Plugin",
      "description": "Plugin info",
      "group_name": "my plugin",
      "category": "productivity",
      "show_group": false,
      "button_url": "/plugin", //If any
      "public_rooms": [],
      "joined_rooms": [] //add previous room together with new room
    }
  }
```

####Send Notification
Payload:
```
{
    event: "sidebar_update",
    plugin_id: "domain", //domain.zuri.chat,
    data: {
      "name": "Plugin",
      "description": "Plugin info",
      "group_name": "my plugin",
      "category": "productivity",
      "show_group": false,
      "button_url": "/plugin", //If any
      "public_rooms": [],
      "joined_rooms": [
            {
                room_name: "Room name",
                room_url: "/room-url"
                room_image: "https://image.com"
                unread: 10
            }
       ] 
    }
}
