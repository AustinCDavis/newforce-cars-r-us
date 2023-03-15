

const database = {
    paints: [
      {id: 1, package: "Silver", price: 764.48},
      {id: 2, package: "Midnight Blue", price: 825.87},
      {id: 3, package: "Firebrick Red", price: 1175.94},
      {id: 4, package: "Sping Green", price: 934.78}
    ],
    interior: [
      {id: 1, package: "Beige Fabric", price: 467.83},
      {id: 2, package: "Charcoal Fabric", price: 613.67},
      {id: 3, package: "White Leather", price: 1437.55},
      {id: 4, package: "Black Leather", price: 1421.45}
    ],
    technology: [
      {id: 1, package: "Basic Package", description: "(basic sound system)", price: 368.97},
      {id: 2, package: "Navigation Package", description: "(includes integrated navigation controls)", price: 875.90},
      {id: 3, package: "Visibility Package", description: "(includes side and reat cameras)", price: 674.80},
      {id: 4, package: "Ultra Package", description: "(includes navigation and visibility packages)", price: 1543.65}
    ],
    wheels: [
      {id: 1, package: "17-inch Pair Radial", price: 478.94},
      {id: 2, package: "17-inch Pair Radial Black", price: 520.46},
      {id: 3, package: "18-inch Pair Spoke Silver", price: 780.94},
      {id: 4, package: "18-inch Pair Spoke Black", price: 846.75}
    ],
    models: [
      {id: 1, package: "Car", price: 1}, //(multiple of standard price)
      {id: 2, package: "SUV", price: 1.5}, //(multiple of standard price)
      {id: 3, package: "Truck", price: 2.25} //(multiple of standard price)
    ],
    customOrders: [
        {
            id: 1,
            paintId: 2,
            wheelId: 1,
            interiorId: 3,
            techId: 4,
            modelId: 2,
            timestamp: 123456789
        }

    ],
    orderBuilder: [

    ]
}

// get state functions
export const getPaints = () => {
    return database.paints.map(color => ({...color}))
}
export const getInteriors = () => {
    return database.interior.map(seatType => ({...seatType}))
}
export const getTechOptions = () => {
    return database.technology.map(techOption => ({...techOption}))
}
export const getWheels = () => {
    return database.wheels.map(rimType => ({...rimType}))
}
export const getModels = () => {
    return database.models.map(model => ({...model}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

// set state functions
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const setModel = (id) => {
    database.orderBuilder.modelId = id
}

//export/function for creating permanent orders once create order is pressed
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}