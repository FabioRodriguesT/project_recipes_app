import * as React from "react";

declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

// declare module "*.svg" {
//   const content: React;
//   export default content;
// }
