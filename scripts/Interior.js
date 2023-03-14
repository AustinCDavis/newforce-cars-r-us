import { getInteriors, setInterior } from "./database.js"
const interiors = getInteriors()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)




export const Interiors = () => {
    return `<h2>Interiors</h2>
        <select id="interior">
            <option value="0">Select an interior package</option>
            ${
                interiors.map(
                    (interior) => {
                        return `<option value="${interior.id}">${interior.package}</option>`
                    }
                ).join("")
            }
        </select>
    `
}


// export const Interiors = () => {
//     let html = "<h2>Interiors</h2>"

//     html += '<select id="Interior">'
//     html += '<option value="0">Select an interior material</option>'

//     const arrayOfOptions = interiors.map( (interior) => {
//             return `<option value="${interior.id}">${interior.package}</option>`
//         }
//     )

//     html += arrayOfOptions.join("")
//     html += "</select>"
//     return html
// }