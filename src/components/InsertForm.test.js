import React from "react";
import { shallow } from "enzyme";

import InsertForm from "./InsertForm";

// We will describe a block of tests
describe("Form component to insert product", () => {
  // we will write one individual test
  it('should have a header that says "Add Product"', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<InsertForm />);
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains(<h1>Add Product</h1>)).toBe(true);
  });
});
