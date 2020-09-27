import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Banner, { BannerProps } from "../Banner/Banner";

const bannerProps: BannerProps = { fetchUrl: "", httpClient: null };

describe("Banner component: renders without errors", () => {
    const component = setup();
    const banner = findByTestAttribute(component, "banner-component");
    expect(banner.length).toBe(1);
});

describe("Banner component: renders the right sub-components", () => {
    test("renders banner contents", () => {
        const component = setup();
        const banner = findByTestAttribute(component, "banner-contents");
        expect(banner.length).toBe(1);
    });

    test("renders title", () => {
        const component = setup();
        const banner = findByTestAttribute(component, "banner-title");
        expect(banner.length).toBe(1);
    });

    test("renders banner actions", () => {
        const component = setup();
        const banner = findByTestAttribute(component, "banner-actions");
        expect(banner.length).toBe(1);

        const playButton = findByTestAttribute(component, "button-play");

        expect(playButton.length).toBe(1);

        const moreInformationButton = findByTestAttribute(
            component,
            "button-more-information"
        );

        expect(moreInformationButton.length).toBe(1);
    });

    test("renders banner description", () => {
        const component = setup();
        const bannerDescription = findByTestAttribute(
            component,
            "banner-description"
        );
        expect(bannerDescription.length).toBe(1);
    });
});

/**
 * Function that finds the element to the corresponding data-test value attribute
 * @function findByTestAttribute
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export function findByTestAttribute(
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
export function setup(): ShallowWrapper {
    return shallow(<Banner {...bannerProps} />);
}
