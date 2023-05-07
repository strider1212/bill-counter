import { BillCounter } from "./utils/BillCounter.js";
import { RenderAsDollarStrings } from "./utils/RenderAsDollarStrings.js";

const bills = BillCounter(257)

const stringBills = RenderAsDollarStrings(bills)

console.log(stringBills)