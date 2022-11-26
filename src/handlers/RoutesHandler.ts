import { Express } from "express";

const Ascii = require(`ascii-table`)
const routes = require(`./FileHandler`)('./src/routes', true)

/**
 * Register all routes with dynamic categories.
 * @param app: Express app
 */
function handle(app: Express): void {
    const table = new Ascii(`Routes`)

    routes.forEach((route: string) => {
        const path: string[] = route.split('/') // File path array (to get category and name)
        const fileName: string = path[path.length - 1]
        const name: string = fileName.substring(0, fileName.length - 3)
        const category: string = path[path.length - 2]
        const skip: boolean = category.startsWith('.')

        if (!skip) {
            try {
                require(`../routes/${route}`)(app)
                table.addRow(name, category, '🔹 LOADED')
            } catch (e) {
                table.addRow(name, category, '🔸 FAILED', 'An error occured!')
            }
        }
    })

    if (routes.length > 0)
        console.log(table.toString())
}

module.exports = handle
