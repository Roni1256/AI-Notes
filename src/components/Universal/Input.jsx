import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onKeyDown,
  label,
  isVerified,
  icon: Icon,
  className,
  required = false,
  error,

  ...props
}) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className={isVerified?"h-5 w-5 text-green-400":"h-5 w-5 text-gray-400"} />
          </div>
        )}
        
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          required={required}
          className={`
            w-full text-neutral-800 rounded-md border border-gray-300 
            shadow-sm px-4 py-2 bg-white 
            placeholder-gray-400 focus:outline-none 
            focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500
            ${Icon ? 'pl-10' : ''}
            ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
            ${className || ''}
          `}
          {...props}
        />
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  label: PropTypes.string,
  icon: PropTypes.elementType,
  className: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string
};

export default Input;