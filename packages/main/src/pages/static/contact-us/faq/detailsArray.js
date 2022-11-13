const Topics = [
  {
    topic: "Adding or removing users",
    faqs: [
      {
        title: "I’ve hit an invite limit. What should I do?",
        details:
          'You’ll hit a limit if you send many invites but few are accepted. Revoking pending invitations won’t allow you to send more, but you can <a href="#">share an invite link</a> with anyone you’d like to join your workspace.'
      },
      {
        title: "How do I create an invite link?",
        details:
          'Workspace Owners, Workspace Admins, and members with permission to send invitations can create an <a href="#">invite link</a> in ZuriChat’s desktop app. Click your workspace name to open the menu, then select the invite option.'
      },
      {
        title: "Why don’t I see the option to invite people to my workspace?",
        details:
          'If you don’t see the option to send invites, that means only Workspace Owners and Admins can send them. If this is the case, you can <a href="#">send an invite request</a> for them to review. When an invite request is approved or denied, you’ll get a message from ZuriChatbot.'
      },
      {
        title:
          "The person I’ve invited didn’t get an invitation email. What can I do?",
        details:
          "Workspace Owners and Workspace Admins can resend pending invitations. If you’re not an Owner or Admin, ask one to resend the invite on your behalf."
      },
      {
        title: "How do I remove someone from my workspace?",
        details:
          "Workspace Owners and Workspace Admins can deactivate members’ accounts from ZuriChat in either the desktop app or a browser. Members won’t be notified when their accounts are deactivated, but they’ll be signed out of your workspace on all devices and unable to sign back in. Their messages and files won’t be deleted from your workspace."
      }
    ],
    articles: [
      { title: "Related article 1" },
      { title: "Related article 2" },
      { title: "Related article 3" },
      { title: "Related article 4" }
    ]
  },
  // {
  //   topic: "Billing and plans",
  //   faqs: [
  //     {
  //       title: "What kind of plans are available?",
  //       details:
  //         'We offer a free version of ZuriChat and three paid plans to choose from: Pro, Business+, and Enterprise Grid. To explore plans and find the right one for you, <a href="https://zuri.chat/">ZuriChat.com/pricing</a>visit.'
  //     },
  //     {
  //       title: "Can I try ZuriChat for free?",
  //       details:
  //         "Sure! You can use the free version of ZuriChat for as long as you’d like, but Workspace Owners and Admins can request to try the Pro or Business+ plan for free. Create a workspace if you don’t have one, then use the form below to send us a note. Make sure to include your workspace name and URL, and the plan you’d like to trial."
  //     },
  //     {
  //       title: "How does billing work?",
  //       details:
  //         'We offer a Fair Billing Policy — this means you only pay for the members of your workspace that are using ZuriChat. Read more about our <a href="https://zuri.chat/">Fair Billing policy</a>, and check out <a href="https://zuri.chat/">our guide to billing</a> for more information.'
  //     }
  //   ],
  //   articles: [
  //     { title: "Related article 1" },
  //     { title: "Related article 2" },
  //     { title: "Related article 3" },
  //     { title: "Related article 4" }
  //   ]
  // },
  {
    topic: "Connection trouble",
    faqs: [
      {
        title: "ZuriChat isn’t loading. How do I troubleshoot?",
        details:
          'If you’re having trouble connecting to ZuriChat on the desktop app or in a browser, <a href="#">review our troubleshooting guide</a> for help.'
      },
      {
        title:
          "What should I do if I’m having trouble making calls in ZuriChat?",
        details:
          'To troubleshoot common issues with call connections, audio, video, and screen sharing, <a href="#">check out our guide</a>.'
      },
      {
        title: "Is ZuriChat down?",
        details:
          'Visit <a href="#">ZuriChat Status</a> to see if ZuriChat is up and running and to see the status of our services.'
      }
    ],
    articles: [
      { title: "Related article 1" },
      { title: "Related article 2" },
      { title: "Related article 3" },
      { title: "Related article 4" }
    ]
  },
  {
    topic: "Notifications",
    faqs: [
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      }
    ],
    articles: [
      { title: "Configure your Zuri notifications" },
      { title: "Configure your Zuri notifications" },
      { title: "Configure your Zuri notifications" }
    ]
  },
  {
    topic: "Manage channels",
    faqs: [
      {
        title: "What’s the difference between a channel and a workspace?",
        details:
          "A ZuriChat workspace is a single place for your team and your work. Conversations in ZuriChat happen in dedicated spaces called channels. You must be a member of a workspace to join one of its channels."
      },
      {
        title: "How do I set delete a channel?",
        details:
          "Workspace Owners and Admins can delete any channel they’ve joined, except for the #general channel. If you’re not an Workspace Owner or Admin, contact one for help."
      },
      {
        title: "How do i create a channel?",
        details:
          'From ZuriChat on your desktop, click the <span class="plus fs-3">+</span>  plus icon next to Channels in your left sidebar. Learn more about creating channels.\n <span class="fw-bold">Note:</span> Workspace Owners can limit who can create channels. If you don’t have permission to create one, ask a Workspace Owner or Admin to do it for you.'
      },
      {
        title: "How do i join a channel?",
        details:
          "You can view and join public channels from the channel browser in your sidebar. Keep in mind that some channels are private and won’t be visible. To join a private channel, you’ll need to be invited by one of the channel’s members."
      },
      {
        title: "Why can’t I remove someone from a channel I created?",
        details:
          "Depending on the permissions set by your Workspace Owners and Admins, you may not be able to remove people from channels. Contact a Workspace Owner or Admin for help."
      }
    ],
    articles: [
      { title: "Related article 1" },
      { title: "Related article 2" },
      { title: "Related article 3" },
      { title: "Related article 4" }
    ]
  },
  {
    topic: "Signing in",
    faqs: [
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      }
    ],
    articles: [
      { title: "Configure your Zuri notifications" },
      { title: "Configure your Zuri notifications" },
      { title: "Configure your Zuri notifications" }
    ]
  },
  {
    topic: "New design feedback",
    faqs: [
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications to adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive notifications on your mobile device when you’re inactive on your desktop. "
      }
    ],
    articles: [
      { title: "Configure your Zuri notifications" },
      { title: "Configure your Zuri notifications" },
      { title: "Configure your Zuri notifications" }
    ]
  },
  {
    topic: "Trial of paid plan",
    faqs: [
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications  to   adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive    notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications  to   adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive    notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications  to   adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive    notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications  to   adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive    notifications on your mobile device when you’re inactive on your desktop. "
      },
      {
        title: "How do notifications work?",
        details:
          "Notifications in Slack keep you informed about work you care about. You can configure your notifications  to   adjust which messages you’ll be notified of. To keep up with activity while you’re on the move, you’ll receive    notifications on your mobile device when you’re inactive on your desktop. "
      }
    ],
    articles: [
      { title: "Configure your Zuri notifications" },
      { title: "Configure your Zuri notifications" },
      { title: "Configure your Zuri notifications" }
    ]
  }
];

export default Topics;
