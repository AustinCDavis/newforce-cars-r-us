

const database = {
    paintColor: [
      {id: 1, color: "Silver", price: 1},
      {id: 2, color: "Midnight Blue", price: 1},
      {id: 3, color: "Firebrick Red", price: 1},
      {id: 4, color: "Sping Green", price: 1}
    ],
    interior: [
      {id: 1, seatType: "Beige Fabric", price: 1},
      {id: 2, seatType: "Charcoal Fabric", price: 1},
      {id: 3, seatType: "White Leather", price: 1},
      {id: 4, seatType: "Black Leather", price: 1},
    ],
    technology: [
        {id: 1, techOption: "Basic Package (basic sound system)", price: 1},
        {id: 2, techOption: "Navigation Package (includes integrated navigation controls)", price: 1},
        {id: 3, techOption: "Visibility Package (includes side and reat cameras)", price: 1},
        {id: 4, techOption: "Ultra Package (includes navigation and visibility packages)", price: 1},
    ],
    wheels: [
        {id: 1, rimType: "17-inch Pair Radial", price: 1},
        {id: 2, rimType: "17-inch Pair Radial Black", price: 1},
        {id: 3, rimType: "18-inch Pair Spoke Silver", price: 1},
        {id: 4, rimType: "18-inch Pair Spoke Black", price: 1},
    ],
    customOrders: [

    ],
    orderBuilder: [

    ]
}

// get state functions
export const getPaintColors = () => {
    return database.paintColor.map(color => ({...color}))
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