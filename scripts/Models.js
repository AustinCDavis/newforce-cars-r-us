import { getModels, setModel } from "./database.js"
const models = getModels()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "model") {
            setModel(parseInt(changeEvent.target.value))
        }
    }
)






export const Models = () => {
    return `<h2>Models</h2>
        <select id="model">
            <option value="0">Select a model</option>
            ${
                
                models.map(
                    (model) => {
                        return `<option value="${model.id}">${model.package}</option>`
                    }
                ).join("")
            }
        </select>
    `
}