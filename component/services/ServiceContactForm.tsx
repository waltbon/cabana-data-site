import React from 'react';
import FormInput from '../ui/inputs/form-input';
import { executePost } from '../../lib/services/base/api-base';
import { IServiceModel } from '../../lib/types/cms/models/service.model';

interface IState {
    submitted: boolean,
    data: {
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        company: string;
        message: string;
    },
    errors: {
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        company: string;
        message: string;
    }
};

interface Props {
    service: IServiceModel;
}

class ServiceForm extends React.Component<Props, IState> {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            data: {
                firstname: '',
                lastname: '',
                email: '',
                company: '',
                phone: '',
                message: '',
            },
            errors: {} as any,
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
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

    get formIsValid(): boolean {
        return Object.keys(this.state.errors).length === 0 && this.state.errors.constructor === Object;
    }

    async onHandleSubmit(e) {
        e.preventDefault();
        this.checkForm();

        if (!this.formIsValid) {
            return;
        }

        const formData = {
            ...this.state.data,
            service: this.props.service
        }

        await executePost('/api/service', formData);
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

        if (!data.phone) {
            errors.phone = 'El teléfono es requerido';
        }

        if (!data.company) {
            errors.company = 'La compañía es requerida';
        }

        this.setState({
            errors
        });
    }

    render() {
        return (<>
            <form noValidate onSubmit={this.onHandleSubmit} className={`${this.state.submitted ? 'hidden':''}`}>
                <div className="row" >
                    <div className="col-sm-12 col-md-6">
                        <FormInput onChange={this.onHandleChange} name="firstname" required={true}
                            value={this.state.data.firstname} placeholder="Nombre" label="Nombre" error={this.state.errors.firstname} />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <FormInput onChange={this.onHandleChange} name="lastname" required={true}
                            value={this.state.data.lastname} placeholder="Apellidos" label="Apellidos" error={this.state.errors.lastname} />
                    </div>
                    <div className="col-sm-12">
                        <FormInput onChange={this.onHandleChange} name="email" required={true}
                            value={this.state.data.email} placeholder="Correo electrónico" label="Correo electrónico" error={this.state.errors.email} />
                    </div>
                    <div className="col-sm-12">
                        <FormInput onChange={this.onHandleChange} name="phone" required={true}
                            value={this.state.data.phone} placeholder="Teléfono" label="Teléfono" error={this.state.errors.phone} />
                    </div>
                    <div className="col-sm-12">
                        <FormInput onChange={this.onHandleChange} name="company" required={true}
                            value={this.state.data.company} placeholder="Compañía" label="Company" error={this.state.errors.company} />
                    </div>
                    <div className="col-md-12">
                        <textarea className="px-4" cols={10} rows={4} name="message" aria-required="true"
                            onChange={this.onHandleChange}
                            aria-invalid="false" placeholder="Mensaje" required defaultValue={""} />
                    </div>
                    <div className="col-md-12">
                        <button className="font-size-14 ltr-sp-2" type="submit" >Enviar</button>
                    </div>
                </div>
            </form>
            <div className="row"  hidden={!this.state.submitted}>
                <div className="col-sm-12">
                    <h4>Listo {this.state.data.firstname}!</h4>
                    <p className="pb-4">Hemos recibido tu solicitud, nos pondremos en contacto con usted lo más pronto posible</p>
                    <a href="/" className="">Ir a inicio</a>
                </div>
            </div>
        </>)
    }
}

export default ServiceForm;