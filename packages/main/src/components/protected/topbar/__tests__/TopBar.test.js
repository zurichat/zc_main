import { fireEvent, render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import organizationMembersMockResponse from "../mocks/org-members.data";
import userOrganizations from "../mocks/user-orgs.data";
import TopBarRootComponent from "../src/root.component";
import { authAxios } from "../src/utils/api";

const mock = new MockAdapter(authAxios, { onNoMatch: "throwException" });

describe("Application Topbar", () => {
  beforeAll(() => {
    mock.reset();
  });

  beforeEach(() => {
    Object.defineProperty(window, "sessionStorage", {
      value: {
        getItem: jest.fn(() =>
          JSON.stringify({
            token:
              "eyJhbGciOiCJ9.eyJjb29raWUiOiJNVFkwTWwIn0.aTVZJ86Br3QLz-pgJA7yg-UE",
            email: "tester@gmail.com"
          })
        ),
        setItem: jest.fn(() => null)
      },
      writable: true
    });
    mock
      .onGet("/users/tester@gmail.com/organizations")
      .reply(200, userOrganizations)
      .onGet("/organizations/719ba4671a5f54782939d385/members")
      .reply(200, organizationMembersMockResponse);
  });

  it("should have the zuri chat application logo", async () => {
    render(<TopBarRootComponent />);
    const applicationImage = await screen.findByRole("img", {
      name: /zuri chat logo/i
    });
    expect(applicationImage).toBeInTheDocument();
  });

  it("should display a search input box", async () => {
    render(<TopBarRootComponent />);
    const searchInput = await screen.findByTestId("topbar_search_input_testid");
    expect(searchInput).toBeInTheDocument();
  });
  it("should have a search box that can be typed in", async () => {
    render(<TopBarRootComponent />);
    const searchText = "hello world";
    const searchInput = await screen.findByTestId("topbar_search_input_testid");
    fireEvent.change(searchInput, { target: { value: searchText } });
    expect(searchInput.value).toBe(searchText);
  });
});

//  const topBarConfig = {
//    name: "Music Plugin",
//    icon: "",
//    userCount: 4,
//    thumbnailUrl: [],
//    hasThumbnail: true,
//    roomInfo: {
//      membersList: []
//    }
//  };
