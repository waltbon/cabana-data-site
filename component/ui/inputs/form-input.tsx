import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
    name,
    type,
    placeholder,
    onChange,
    className,
    required,
    value,
    defaultValue,
    error,
    colSize,
    colNumber,
    children,
    label,
}) => (
        <React.Fragment>
            {error && <small style={{color: '#f58982', fontSize: '14px'}}>{error}</small>}
            <input
                className={className}
                id={name}
                name={name}
                autoComplete="off"
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                required
                style={error && { borderBottom: 'solid 1px #f58982' } || {
                    color: '#a7a9b8'}}
            />
        </React.Fragment>
    )

FormInput.defaultProps = {
    type: 'text',
    className: "",
    colSize: 'lg',
    colNumber: '12',
    required: true
}

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    colSize: PropTypes.oneOf(['lg', 'sm', 'md']),
    colNumber: PropTypes.oneOf(['12', '8', '6']),
    className: PropTypes.string,
    defaultValue: PropTypes.any,
    children: PropTypes.any,
    onChange: PropTypes.func.isRequired
}

export default FormInput;