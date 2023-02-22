import React from 'react';
import FormInput from '../ui/inputs/form-input';
import { executePost } from '../../lib/services/base/api-base';
import { WithTranslation, withTranslation } from 'next-i18next';
import { NavigationLink, TranslateLink } from '../common';

interface IState {
    submitted: boolean,
    data: {
        firstname: string;
        lastname: string;
        email: string;
        message: string;
        company: string;
        website: string;
        phone: string;
    },
    errors: {
        firstname: string;
        lastname: string;
        email: string;
        message: string;
        company: string;
        website: string;
        phone: string;
    }
};

interface Props extends WithTranslation {}

class ContactForm extends React.Component<Props, IState> {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            data: {
                firstname: '',
                lastname: '',
                email: '',
                message: '',
                company: '',
                phone: '',
                website: '',
            },
            errors: {} as any,
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    get formIsValid(): boolean {
        return Object.keys(this.state.errors).length === 0 && this.state.errors.constructor === Object;
    }

    onHandleChange(e) {
        // e.preventDefault();
        const { name, value } = e.target;
        const { data } = this.state;
        data[name] = value;
        this.setState({
            submitted: false,
            data
        });
    }

    async onHandleSubmit(e) {
        e.preventDefault();
        this.checkForm();

        if (!this.formIsValid) {
            return;
        }

        await executePost('/api/contact-us', this.state.data);
        this.setState({
            submitted: true
        })
    }

    checkForm() {
        const { data } = this.state;
        const errors = {} as any;

        if (!data.firstname) {
            errors.firstname = 'Nombre requerido';
        }

        if (!data.lastname) {
            errors.lastname = 'Apellido es requerido';
        }

        if (!data.email) {
            errors.email = 'El correo electrónico es requerido';
        }

        this.setState({
            errors
        });
    }

    render() {
        return (
            <>
                <form noValidate onSubmit={this.onHandleSubmit} className={`contact-form ${this.state.submitted ? 'hidden' : ''}`}>
                    <div className="row" >
                        <div className="col-sm-12 col-md-12">
                            <label htmlFor="firstname">{this.props.t('contact_form_fullname')}</label>
                            <FormInput onChange={this.onHandleChange} name="firstname"
                                value={this.state.data.firstname} placeholder={this.props.t('contact_form_fullname')} label="Nombre" error={this.state.errors.firstname} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="firstname">{this.props.t('contact_form_email')}</label>
                            <FormInput onChange={this.onHandleChange} name="email"
                                value={this.state.data.email} placeholder={this.props.t('contact_form_email')} label="Correo electrónico" error={this.state.errors.email} />
                        </div>
                        <div className="col-sm-12 col-md-6">
                        <label htmlFor="firstname">{this.props.t('contact_form_phone')}</label>
                            <FormInput onChange={this.onHandleChange} name="phone"
                                value={this.state.data.phone} placeholder={this.props.t('contact_form_phone')} label="Número de teléfono" error={this.state.errors.phone} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="company">{this.props.t('contact_form_company')}</label>
                            <FormInput onChange={this.onHandleChange} name="company"
                                value={this.state.data.company} placeholder={this.props.t('contact_form_company')} label="Compañía" error={this.state.errors.company} />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="website">{this.props.t('contact_form_website')}</label>
                            <FormInput onChange={this.onHandleChange} name="website"
                                value={this.state.data.website} placeholder={this.props.t('contact_form_website')} label="Sitio web" error={this.state.errors.website} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 ">
                            <label htmlFor="message">{this.props.t('contact_form_message')}</label>
                            <textarea className="px-4 bg-gray text-dark" cols={10} rows={4} name="message" aria-required="true"
                                onChange={this.onHandleChange}
                                aria-invalid="false" placeholder={this.props.t('contact_form_message_placeholder')} required defaultValue={""} />
                        </div>

                        <div className="col-md-12">
                            <button type="submit">{this.props.t('contact_form_send_button')}</button>
                        </div>
                    </div>
                </form>
                <div className="row" hidden={!this.state.submitted}>
                    <div className="col-sm-12">
                        <h4>
                            {this.props.t('contact_form_sent_title')}
                        </h4>
                        <p className="pb-4">
                            {this.props.t('contact_form_sent_message')}
                        </p>
                        <NavigationLink locale={this.props.i18n.language} to="/">
                            {this.props.t('contact_form_go_home_button')}
                        </NavigationLink>
                    </div>
                </div>
            </>
        )
    }
}

export default withTranslation('contact')(ContactForm)