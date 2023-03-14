import { getWheels, setWheel } from "./database.js"
const wheels = getWheels()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            setWheel(parseInt(changeEvent.target.value))
        }
    }
)




export const Wheels = () => {
    return `<h2>Wheels</h2>
        <select id="wheel">
            <option value="0">Select a wheel package</option>
            ${
                wheels.map(
                    (wheel) => {
                        return `<option value="${wheel.id}">${wheel.package}</option>`
                    }
                ).join("")
            }
        </select>
    `
}


// export const Wheels = () => {
//     let html = "<h2>Wheels</h2>"
//     const wheels = getWheels()

//     html += '<select id="wheel">'
//     html += '<option value="0">Select a wheel style</option>'

//     for (const wheel of wheels) {
//         html += `<option value="${wheel.id}">${wheel.package}</option>`
//     }

//     html += "</select>"
//     return html
// }