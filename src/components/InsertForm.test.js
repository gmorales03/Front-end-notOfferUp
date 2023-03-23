import React from "react";
import { shallow } from "enzyme";

import InsertForm from "./InsertForm";

// We will describe a block of tests
describe("Form component to insert product", () => {
  const component = shallow(<InsertForm />);

  it('should have a header that says "Add Product"', () => {
    expect(component.contains(<h1>Add Product</h1>)).toBe(true);
  });

  it('should contain an input field that has a "Product" placeholder', () => {
    expect(component.contains(<input id="title" placeholder="Product" />)).toBe(
      true
    );
  });

  it('should have a input with placeholder "Description"', () => {
    expect(
      component.contains(<input id="desc" placeholder="Description" />)
    ).toBe(true);
  });

  it('should have a third input with a "Price" placeholder', () => {
    expect(component.contains(<input id="price" placeholder="Price" />)).toBe(
      true
    );
  });

  it("should have a p tag with the date posted", () => {
    expect(component.contains(<p id="date">Date Posted:</p>)).toBe(true);
  });

  it("should have a submit button", () => {
    expect(component.contains(<button id="submit">Submit</button>)).toBe(true);
  });
});
