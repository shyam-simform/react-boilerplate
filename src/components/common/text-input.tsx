import React, { forwardRef } from 'react';
import type { TextInputProps } from '../../types';

const TextInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextInputProps>(
  ({ label, name, type = 'text', placeholder, required = false, error, rows, ...props }, ref) => {
    const baseClasses = `
      w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
      ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
    `;

    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        {type === 'textarea' ? (
          <textarea
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
            id={name}
            name={name}
            rows={rows || 3}
            placeholder={placeholder}
            required={required}
            className={baseClasses}
            {...props}
          />
        ) : (
          <input
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            required={required}
            className={baseClasses}
            {...props}
          />
        )}

        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';

export default TextInput;
