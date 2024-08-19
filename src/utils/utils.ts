export function generateHexColor(letter:string) {
    // Ensure the letter is a single character
    const sanitizedLetter = letter.charAt(0).toUpperCase();
  
    // Get the ASCII code of the letter
    const asciiCode = sanitizedLetter.charCodeAt(0);
  
    // Map the ASCII code to a color value
    const colorValue = (asciiCode % 26) * 10; // Adjust for a range of colors
  
    // Convert the color value to a hex code
    const hexColor = colorValue.toString(16);
  
    // Ensure the hex code has two digits
    const paddedHexColor = hexColor.length === 1 ? `0${hexColor}` : hexColor;
  
    // Return the hex color code
    return `#${paddedHexColor}0000`; // Add some fixed values to ensure a distinguishable color
  }
  