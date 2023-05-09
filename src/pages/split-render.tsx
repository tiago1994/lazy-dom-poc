import { useEffect, useState } from "react";
import { DynamicWidget } from "../components/dynamic-widget";

export function SplitRender() {
  const numberOfWidgets = 2000;
  const listOfWidgets = Array.from(Array(numberOfWidgets).keys()).map((i) =>
    DynamicWidget({ count: i })
  );
  const listOf20PercentWidgets = listOfWidgets.filter(
    (_, key) => key <= numberOfWidgets * 0.2
  );
  const listOf80PercentWidgets = listOfWidgets.filter(
    (_, key) => key > numberOfWidgets * 0.2
  );

  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShouldShow(true), 5000);
  }, []);

  return (
    <div>
      <h2>Full Render</h2>
      <div className="wrapper">
        {listOf20PercentWidgets}
        {shouldShow && listOf80PercentWidgets}
      </div>
    </div>
  );
}
