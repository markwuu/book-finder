import React from "react";
import { shallow } from "enzyme";

import Nav from "./Nav";

describe("Nav", () => {
  test("rendering simple component", () => {
    const wrapper = shallow(<Nav />);

    expect(wrapper).toMatchSnapshot();
  });
});
