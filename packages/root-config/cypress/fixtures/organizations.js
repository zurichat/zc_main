export const organizationsFixture = {
  data: [
    {
      id: "72b3f2940d3b7e8ae1a1636e",
      imgs: [],
      isOwner: true,
      logo_url: "",
      member_id: "61a3f2940d3b7e8ae1a16260",
      name: "Test one",
      no_of_members: 1,
      workspace_url: "zurichat-djp2619.zurichat.com"
    },
    {
      id: "72b3f44b4f88198ec49dd722",
      imgs: [],
      isOwner: true,
      logo_url: "",
      member_id: "61a3f44b4f88198ec49dd612",
      name: "Test two",
      no_of_members: 1,
      workspace_url: "zurichat-srj8319.zurichat.com"
    },
    {
      id: "72b3f8154f88198ec49dd729",
      imgs: [],
      isOwner: true,
      logo_url: "",
      member_id: "61a3f8154f88198ec49dd619",
      name: "Test three",
      no_of_members: 1,
      workspace_url: "zurichat-ovv1269.zurichat.com"
    },
    {
      id: "72b3f9c14f88198ec49dd72f",
      imgs: [],
      isOwner: true,
      logo_url: "",
      member_id: "61a3f9c14f88198ec49dd620",
      name: "Test four",
      no_of_members: 1,
      workspace_url: "zurichat-ahw5564.zurichat.com"
    }
  ]
};

export const organizationFixture = () => {
  return {
    data: {
      _id: organizationsFixture.data[0].id,
      name: organizationsFixture.data[0].name
    }
  };
};
