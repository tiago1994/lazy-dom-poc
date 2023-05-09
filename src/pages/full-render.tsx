import { DynamicWidget } from "../components/dynamic-widget";

export function FullRender() {
  const numberOfWidgets = 2000;
  const listOfWidgets = Array.from(Array(numberOfWidgets).keys()).map((i) =>
    DynamicWidget({ count: i })
  );

  return (
    <div>
      <h2>Full Render</h2>
      <div className="wrapper">{listOfWidgets}</div>
    </div>
  );
}
