# Log

So far I have:

-   Created the folder structure
-   Implemented a compiler for ES6
-   Tested a simple function using template literals
-   Added loop through list of plugins functionality
-   Added function `lib/properties.js` which can create a property definition of CSS property given a name, or create your own:
    ```js
    {
      name: 'padding',
      abbr: 'p',
      children: [
        { name: 'top', abbr: 't', parent: 'padding' },
        { name: 'right', abbr: 'r', parent: 'padding' },
        { name: 'bottom', abbr: 'b', parent: 'padding' },
        { name: 'left', abbr: 'l', parent: 'padding' }
      ]
    }
    ```
    I chose not to include the full name or abbreviation of children so they could be created on by the author, but I'm not sure this is best.
-   Made it more explicit that CSS properties are being called in. Then in the future other properties can be added, and maybe merged etc.
-   I spent a lot of time trying to find an easy way for creators to create their own data schemas from tokens however it proved quite difficult to think of how to allow this. My main idea was to create an itterator which can create a data schema step by step using the `.next()` method but I struggled to conceptulise how I might get it to work.
-   I spent some more time trying to at least provide an option for creators to add their own data to the date processing. I was able to allow creators to pass in an object of key value pairs which will be added to each iteration of the token. I still wonder if I should explore the possibility of tokens holding meta data, but it's just decided what the format would be and how that would be processed.
-   Did a first draft of adding support for jsonnet files. Babel wasn't coppying the `.jsonnet` files across so I had to enable a flag in the CLI to copy all files. Will need to add support for checking for js, or jsonnet extensions. Also need to test imports. Ok, so `node-jsonnet` doesn't appear to support imports. Going to try `gopherjs` method next.
-   Need to learn how to write application in Go in order to use `gopherjs` method
-   Added support to lookup config file. `output()` will now look to global config first for template however this is hardcoded as `class` template. Need someway of it checking data structure and using correct template.
-   Had an issue importing the theme using a dynamic file path set in `config.js` because imports won't work on dynamically generated paths.
-   I don't think registering partials with the same name will work with handlebaars when it comes to importing a different template depending on the platform 
-   Implemented option to dynamically set the config location and theme
