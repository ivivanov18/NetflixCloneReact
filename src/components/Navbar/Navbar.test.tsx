import * as React from "react";
import { ShallowWrapper, shallow } from "enzyme";

import Navbar, { NavbarProps } from "./Navbar";
import HttpClient from "../../api/MainApi";

const navbarProps: NavbarProps = {};

describe("Navbar component: renders without errors", () => {
    const component = setup();
    const navbar = findByTestAttribute(component, "navbar-component");
    expect(navbar.length).toBe(1);
});

describe("Navbar component: renders the right sub-components", () => {
    test("renders logo", () => {
        const component = setup();
        const logo = findByTestAttribute(component, "navbar-logo");
        expect(logo.length).toBe(1);
    });
});

function setup(): ShallowWrapper {
    const component = shallow(<Navbar {...navbarProps} />);
    return component;
}

function findByTestAttribute(
    wrapper: ShallowWrapper,
    value: string
): ShallowWrapper {
    return wrapper.find(`[data-test='${value}']`);
}
