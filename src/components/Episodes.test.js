import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

test("renders Episodes w/o erros", () => {
    render(<Episodes episodes={[]}/>);
})

test("Renders Episodes w/o props, and then w/ props", () => {
    const dummyData = { 
        id: '111',
        image: { medium: 'medium_image'},
        name: 'name',
        season: 3,
        number: 2,
        summary: '<p>Summary</p>',
        runtime: 20
    }
    const { queryAllByText, rerender } = render(<Episodes episodes={[]}/>);
    expect(queryAllByText(/season/i)).toHaveLength(0);
    rerender(<Episodes episodes={[dummyData]}/>);
    expect(queryAllByText(/name/i)).toHaveLength(1);
})
