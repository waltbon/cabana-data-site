import React from 'react';
import FormInput from '../ui/inputs/form-input';
import { executePost } from '../../lib/services/base/api-base';

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

interface Props {
    // onFormSubmmited: Function
}

export default class extends React.Component<Props, IState> {
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
            <div className="contactform- contact-form-inputs-filled contact-form-button-block">
                {/* <div dangerouslySetInnerHTML={{__html: this.getCrmHtml()}}></div> */}
                <form noValidate onSubmit={this.onHandleSubmit} className={`${this.state.submitted ? 'hidden' : ''}`}>
                    <div className="row" >
                        <div className="col-sm-12 col-md-6">
                            <FormInput onChange={this.onHandleChange} name="firstname"
                                value={this.state.data.firstname} className="bg-gray text-dark" placeholder="Nombre" label="Nombre" error={this.state.errors.firstname} />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <FormInput onChange={this.onHandleChange} name="lastname"
                                value={this.state.data.lastname} placeholder="Apellidos" label="Apellidos" error={this.state.errors.lastname} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <FormInput onChange={this.onHandleChange} name="email"
                                value={this.state.data.email} placeholder="Correo electrónico" label="Correo electrónico" error={this.state.errors.email} />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <FormInput onChange={this.onHandleChange} name="phone"
                                value={this.state.data.phone} placeholder="Número de teléfono" label="Número de teléfono" error={this.state.errors.phone} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <FormInput onChange={this.onHandleChange} name="company"
                                value={this.state.data.company} placeholder="Nombre de la compañía" label="Compañía" error={this.state.errors.company} />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <FormInput onChange={this.onHandleChange} name="website"
                                value={this.state.data.website} placeholder="Sitio web" label="Sitio web" error={this.state.errors.website} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 ">
                            <textarea className="px-4 bg-gray text-dark" cols={10} rows={4} name="message" aria-required="true"
                                onChange={this.onHandleChange}
                                aria-invalid="false" placeholder="Cuéntenos aquí de su proyecto" required defaultValue={""} />
                        </div>

                        <div className="col-md-12">
                            <button className="btn btn-success font-size-14 ltr-sp-2" type="submit" >Enviar</button>
                        </div>
                    </div>
                </form>
                <div className="row" hidden={!this.state.submitted}>
                    <div className="col-sm-12">
                        <h4>Listo {this.state.data.firstname}!</h4>
                        <p className="pb-4">Hemos recibido tu solicitud, nos pondremos en contacto con usted lo más pronto posible</p>
                        <a href="/" className="">Ir a inicio</a>
                    </div>
                </div>
            </div>
        )
    }
}