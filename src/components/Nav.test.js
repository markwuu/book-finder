import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";

import Nav from "./Nav";

describe("Nav", () => {
  test("rendering Nav component", () => {
    const wrapper = shallow(<Nav />);

    expect(wrapper).toMatchSnapshot();
  });
});
