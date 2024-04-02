// Variant
export type Variant = 'contained' | 'outlined' | 'text';

// Color
export type Color = 'primary' | 'secondary' | 'secondary-light';

// Size
export type Size = 'sm' | 'md' | 'lg';

// Variantations styles including colors
export type VariationStyles = {
  [key in Color]: {
    [key in Variant]: string;
  };
};

// Size styles
export type SizeStyles = {
  [key in Size]: string;
};
