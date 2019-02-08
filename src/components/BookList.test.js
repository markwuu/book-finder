import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";

import BookList from "./BookList";

describe("BookList", () => {
  test("rendering BookList component", () => {
    const wrapper = shallow(<BookList bookinfo={[]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
