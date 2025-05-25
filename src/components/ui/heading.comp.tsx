// Heading.tsx
import React from "react";

// Definiere die möglichen Werte für `size` und `color` als Typen
type HeadingProps = {
  Titel: string; // Der Titeltext der Überschrift
  size?: "sm" | "md" | "lg"; // Die möglichen Größen für die Überschrift
  color?: "primary" | "secondary" | "tertiary" | "gray"; // Die möglichen Farben
  fontWeight?: "bold" | "regular" | "light"; // Die möglichen Schriftstile
};

const Heading: React.FC<HeadingProps> = ({
  Titel,
  size = "md",
  color = "primary",
  fontWeight = "bold", // Standardwert für Schriftstil
}) => {
  // Bestimme die Tailwind CSS-Klassen basierend auf den Props
  const sizeClasses = {
    sm: "text-lg", // Kleinere Überschrift
    md: "text-[64px]", // Mittlere Überschrift
    lg: "text-[92px]", // Größere Überschrift
  };

  const colorClasses = {
    primary: "text-gray-300", // Standardfarbe
    secondary: "text-green-600", // Sekundäre Farbe
    tertiary: "text-red-600", // Tertiäre Farbe
    gray: "text-gray-700", // Graue Farbe
  };

  const fontWeightClasses = {
    bold: "font-bold", // Fettdruck
    regular: "font-normal", // Regulär
    light: "font-light", // Leicht
  };

  return (
    <h1
      className={`${sizeClasses[size]} ${colorClasses[color]}  ${fontWeightClasses[fontWeight]}`}
    >
      {Titel}
    </h1>
  );
};

export default Heading;
