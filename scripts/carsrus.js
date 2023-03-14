import { Paints } from "./Paints.js"
import { Interiors } from "./Interior.js"
import { Technologies } from "./Technology.js"
import { Wheels } from "./Wheels.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => { 

    const itemClicked = event.target

    if (itemClicked.id.startsWith("orderButton")) {

            addCustomOrder()
    }
 }
)

export const CarsRUs = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <main id="col">
            <section class="choices__paints options">
                ${Paints()}
                </section>
            <section class="choices__interior options">
                ${Interiors()}
                </section>
            </main>
            <main id="col">
            <section class="choices__wheels options">
                ${Wheels()}
            </section>
            <section class="choices__technology options">
                ${Technologies()}
            </section>
            </main>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}

