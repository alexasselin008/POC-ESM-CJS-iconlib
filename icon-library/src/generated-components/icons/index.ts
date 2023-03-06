import { createIcon } from "@sharegate/orbit-ui";

import { ReactComponent as AddMajorIconSource } from "./AddMajorIcon.js"
import { ReactComponent as AlertMajorIconSource } from "./AlertMajorIcon.js"
import { ReactComponent as ArrowMajorIconSource } from "./ArrowMajorIcon.js"
import { ReactComponent as ArrowMinorIconSource } from "./ArrowMinorIcon.js"

const AddMajorIcon = createIcon(AddMajorIconSource);
// export const AlertMajorIcon = createIcon(AlertMajorIconSource);
// export const ArrowMajorIcon = createIcon(ArrowMajorIconSource);
// export const ArrowMinorIcon = createIcon(ArrowMinorIconSource);

export {
  AddMajorIcon,
  AddMajorIconSource,
  AlertMajorIconSource,
  ArrowMajorIconSource,
  ArrowMinorIconSource
}