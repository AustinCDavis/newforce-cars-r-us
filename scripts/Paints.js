import { getPaints } from "./database.js"



document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
)






export const Paints = () => {
    return `<h2>Paints</h2>`
}