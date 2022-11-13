export const usersFixture = () => {
  return {
    data: [
      {
        id: "616a09a67add2a5bd31e443d",
        first_name: "",
        last_name: "",
        display_name: "",
        email: "tundealabi4780@gmail.com",
        phone: "",
        status: 0,
        time_zone: "",
        created_at: "2021-10-15T23:07:18.140964355Z",
        updated_at: "0001-01-01T00:00:00Z",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb29raWUiOiJNVFkxTnpNMk56QTNOWHhIZDNkQlIwUlplVmw2YXpKWlZFbDZUMGRKTlZwSFdUQlpNbGswVGtkTmVFMUhWWGxOVVQwOWZFRVpFb3NFOTg1akM0Sk5Jb2dOT19OdWc4Q1FUVnM0ZTJiWWhlR0R4RDJKIiwiZW1haWwiOiJ0dW5kZWFsYWJpNDc4MEBnbWFpbC5jb20iLCJpZCI6IjYyYzk2YTIzOGI5ZGY0Y2Y4NGMxMGUyMSIsIm9wdGlvbnMiOnsiUGF0aCI6Ii8iLCJEb21haW4iOiIiLCJNYXhBZ2UiOjc5NTc3NTg5MDIsIlNlY3VyZSI6ZmFsc2UsIkh0dHBPbmx5IjpmYWxzZSwiU2FtZVNpdGUiOjB9LCJzZXNzaW9uX25hbWUiOiJmNjgyMmFmOTRlMjliYTExMmJlMzEwZDNhZjQ1ZDVjNyJ9.NC5F8HVr8jMDMVAsWoappyRfc6sXt1C_dECkpqNii-Q"
      }
    ]
  };
};

export const userFixture = () => usersFixture().data[0];
