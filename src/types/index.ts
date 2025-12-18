import React from 'react';

/**
 * Tipos para o portfólio
 */

export type Theme = 'dark' | 'light';

export interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export interface SectionProps {
  className?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export interface FormFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}
