# Calculator with randomize numbers
This calculator shows the number in randomize location, but the locations of buttons like operations, dot, clear entry, and delete, are fixed on their position

## NOTES:
- The user can't type can't display anything on the input using the keyboard keys on you machine.
- You can only use click the buttons for the calculator to function.
- The `solveExpression` works only for basic math
- Security risk is high when using `eval()` because it executes any string as JavaScript code.
- Floating Point Math Errors, e.g. `solveExpression("0.1 + 0.2")` will return `0.30000000000000004` instead of `0.3`.
- There are errors that shows `Infinity` or `Undifined` instead of `errors` because of compiler errors.

## Run locally:
```bash
npm start
```

