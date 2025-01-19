import React from 'react';

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none shadow-none";
  
  const variants = {
		default:
			'bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-950',
		ghost: 'hover:bg-gray-100 hover:text-gray-500',
  };

  const sizes = {
		default: 'h-10 py-2 px-4',
		sm: 'h-9 px-3',
		lg: 'h-11 px-8',
		icon: 'h-10 w-10',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className} appearance-none`}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export default Button;

