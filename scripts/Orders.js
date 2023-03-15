import { getOrders, getPaints, getInteriors, getWheels, getTechOptions, getModels } from "./database.js";

const paints = getPaints()
const interiors = getInteriors()
const wheels = getWheels()
const technologies = getTechOptions()
const models = getModels()

const buildOrderListItem = (order) => {
    
    // Remember that the function you pass to find() must return true/false
   //Find Paint Price & Package
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const paintCost = foundPaint.price
    const paintColor = foundPaint.package

    // Find Interior Price & Package
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const interiorCost = foundInterior.price
    const interiorPackage = foundPaint.package

    //Find Wheel Price
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const wheelCost = foundWheel.price
    const wheelPackage = foundWheel.package

    //Find Technology Price & Package
    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.techId
        }
    )
    const techCost = foundTech.price
    const techPackage = foundTech.package

    //Find Model Price
    const foundModel = models.find(
        (model) => {
            return model.id === order.modelId
        }
    )
    const modelCost = foundModel.price
    const modelCar = foundModel.package.toLowerCase()

    //Adding for total cost
    const totalCost = (paintCost + interiorCost + wheelCost + techCost) * modelCost

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return`<li class="orders">
        ${paintColor} ${modelCar} with ${wheelPackage}, ${interiorPackage}, and ${techPackage} for a total cost of ${costString}
    </li>`

}



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
