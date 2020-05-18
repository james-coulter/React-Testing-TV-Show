import React from "react";
import { render, waitFor } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

import App from "./App";

jest.mock("./api/fetchShow");

test("App fetches show data and renders it", async () => {
  const dummyData = {
      image: { original: "original"},
      name: "name",
      summary: "<p>summary</p>",
      _embedded: {
        episodes: [{
            id: "123",
            image: { medium: "medium_image" },
            name: "name",
            season: 1,
            number: 1,
            summary: "<p>Summary</p>",
            runtime: 60
        }]
      }
  };
  mockFetchShow.mockResolvedValueOnce(dummyData);
  const { queryAllByText } = render(<App />);
  expect(queryAllByText(/fetching data.../i)).toHaveLength(1);
  await waitFor(() => {
    expect(queryAllByText(/summary/i)).toHaveLength(1);
    });

});