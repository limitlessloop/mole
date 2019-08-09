// import Theme from './Theme'
import Outputs from './Outputs'
// import Model from './Model'
// import Template from './Template'
import Config from './Config'

/**
 * The main application
 */
class Mole {
	constructor() {
		// this.outputs = new Outputs()
		// this.files = parse()
	}

	// model(name, func) {
	// 	this.models = []
	// 	this.models.push(new Model(name, func))
	// }

	// template(name, func) {
	// 	this.templates.push(new Template(name, func))
	// 	this.files = this.genFiles()
	// }

	/**
	 * Renders the `templates` and `models` of the outputs
	 */
	render() {
		// for (let output of this.outputs) {
		// 	// render()
		// }
	}

	/**
	 * Builds the files from the outputs
	 * @tutorial Outputting build files
	 * @example
	 * // Example output
	 * build/
	 * 	css/
	 * 		styles.css
	 * 	ios/
	 * 		styles.h
	 * 	android/
	 * 		styles.xml
	 */
	build() {
		for (let file of this.files) {
			fs.outputFile(file.path, file.content, function(err) {
				if (err) console.log(err) // => null

				fs.readFile(file.path, 'utf8', function(err, data) {
					console.log(data) // => hello!
				})
			})
		}
	}
	/**
	 * Adds a new `model` or `template`
	 * @example
	 * // Adding a template dynamically to a named output of `css`
	 * mole.add('template', function('template-name', (data, theme) => {
	 * 	return // The string you'd like to return to be parsed
	 * }), 'css')
	 */
	add() {}
}

// function render() {}

export default Mole
