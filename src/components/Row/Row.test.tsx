import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Row, { RowProps } from "./Row";

const rowProps: RowProps = {
    title: "Netflix Originals",
    fetchUrl: "",
    httpClient: undefined,
};

test("renders the component without errors", () => {
    const wrapper = setup();
    const component = findByTestAttribute(wrapper, "row-component");
    expect(component.length).toBe(1);
});

test("renders a title", () => {
    const wrapper = setup();
    const component = findByTestAttribute(wrapper, "row-title");
    expect(component.length).toBe(1);
});

test("renders row posters", () => {
    const wrapper = setup();
    const component = findByTestAttribute(wrapper, "row-posters");
    expect(component.length).toBe(1);
});

/**
 * Function that finds the element to the corresponding data-test value attribute
 * @function findByTestAttribute
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
function findByTestAttribute(
    wrapper: ShallowWrapper,
    val: string
): ShallowWrapper {
    return wrapper.find(`[data-test='${val}']`);
}

/**
 * Factory function that creates a ShallowWrapper around a component
 * @function setup
 * @returns {ShallowWrapper}
 */
function setup(): ShallowWrapper {
    return shallow(<Row {...rowProps} />);
}
