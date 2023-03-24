import react from "react";
import { shallow } from "enzyme";
import NewListing from "./NewListing.js";

describe("component to display product listing", () => {
  const component = shallow(<NewListing />);
  it("should contain header that says title", () => {
    expect(component.contains(<h1>title</h1>)).toBe(true);
  });
  it("should contain header that says price", ()=> {
    expect(component.contains(<h2>price</h2>)).toBe(true); 
  })
  it("should contain paragraph that says description",()=>{
    expect(component.contains(<p className="desc">description</p>)).toBe(true); 
  })
  it("should contain paragraph saying date posted",()=>{
    expect(component.contains(<p>date posted</p>)).toBe(true)
  })
  it("should contain an image",()=>{
    expect(component.contains(<img></img>)).toBe(true)
  })
});


