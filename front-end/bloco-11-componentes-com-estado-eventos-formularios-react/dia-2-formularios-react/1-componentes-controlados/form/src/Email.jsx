import React from 'react';

class Email extends React.Component {
    render() {
        const { value, handleChange } = this.props;

        let error = undefined;
        if (value.length > 30) { error = 'E-mail muito longo'; }
        if (!value.match(/^\S+@\S+$/i)) { error = 'Favor verifique seu e-mail'}


        return (
            <label htmlFor="email">
                E-mail
                <input name="email" type="email" value={value} onChange={handleChange} />
                <span>{error ? error : ''}</span>
            </label>
        )
    }
}

export default Email;