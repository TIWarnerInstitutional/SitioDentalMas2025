// Componente Button local
import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline";
	size?: "sm" | "md" | "lg";
}

export function Button({ variant = "default", size = "md", className = "", children, ...rest }: ButtonProps) {
	// Puedes personalizar las clases según el variant y size
	const variantClass = variant === "outline" ? "border border-green-500 text-green-600 hover:bg-green-50" : "bg-blue-600 text-white";
	const sizeClass = size === "sm" ? "px-2 py-1 text-sm" : size === "lg" ? "px-6 py-3 text-lg" : "px-4 py-2";
	return (
		<button className={`${variantClass} ${sizeClass} ${className}`} {...rest}>
			{children}
		</button>
	);
}
