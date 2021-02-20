import * as React from "react";
import { create } from "react-test-renderer";

import EditScreenInfo from "./EditScreenInfo";

describe("<EditScreenInfo />", () => {
  it("rendered", () => {
    const editScreenInfo = create(<EditScreenInfo path="test" />);
    expect(editScreenInfo);
  });
});
