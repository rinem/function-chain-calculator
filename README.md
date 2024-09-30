# Function chaining board

## Features

- Input an initial value and execute a sequence of functions on it.
- View the final output after all functions are applied in a specific order.
- Modify the equations for each function dynamically.
- Display the next function to be executed or the final output.

## Project Structure

```
/src
  ├── components
  │   ├── InputBox.tsx       
  │   ├── OutputBox.tsx      
  │   ├── FunctionCard.tsx   
  │   ├── ErrorMessage.tsx
  |   ├── Board.tsx              
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rinem/function-chain-calculator
   cd function-chain-calculator
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```

The app should now be running locally on `http://localhost:5173/`.

## Technologies Used

- **React**: JavaScript framework for building the user interface.
- **TypeScript**: For type safety and better development experience.
- **CSS (Tailwind CSS)**: For styling components with utility-first CSS classes.

## Future Improvements

- I could not make it completely as per design because of time constraints, so should make it more accurate with the design
- Add the ability to change the execution order dynamically.
- Save custom function equations and restore them on reload.
- Improve equation validation to handle more complex expressions.
