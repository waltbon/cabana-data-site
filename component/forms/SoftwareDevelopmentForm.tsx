import React from 'react';
import FormInput from '../ui/inputs/form-input';
import ChooseProject from '../software-development/ChooseProject';
import { ProjectType } from '../../lib/types/cms/models/service-development.model';

interface IState {
    data: {
        selectedProjectType: string;
        firstname: string;
        lastname: string;
        email: string;
    },
    errors: {
        firstname?: string
        lastname?: string;
        email?: string;
    }
}

interface Props {
    projectTypes: ProjectType[]
}

export default class extends React.Component<Props, IState> {
    constructor(props) {
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.state = {
            data: {} as any,
            errors: {} as any
        };
    }

    get hasErrors(): boolean {
        return Object.keys(this.state.errors).length === 0 && this.state.errors.constructor === Object;
    }

    get hasProjectTypeSelected(): boolean {
        return !!this.state.data.selectedProjectType;
    }

    onHandleChange(e: any) {
        e.preventDefault();
        const { name, value } = e.target;
        const { data } = this.state;
        data[name] = value;
        this.setState({ data });
        this.checkForm();
    }

    onHandleSubmit(e) {
        e.preventDefault();
        this.checkForm();

        if (this.hasErrors) {
            return;
        }
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
        const hasProjectType = this.hasProjectTypeSelected;
        return (
            <>

                <div className="row" hidden={this.hasProjectTypeSelected}>
                    <ChooseProject projectTypes={this.props.projectTypes} />
                </div>
                <form noValidate hidden={!this.hasProjectTypeSelected}>
                    <div className="row d-flex flex-wrap">
                        <div className="lqd-column col-md-6 mb-20">
                            <div className="row">
                                <div className="col-sm-5 ">

                                    <FormInput onChange={this.onHandleChange} name="firstname" defaultValue={this.state.data.firstname} value={this.state.data.firstname} placeholder="Nombre" label="Nombre" error={this.state.errors.firstname} />
                                </div>
                                <div className="col-sm-6 col-md-offset-1">
                                    <FormInput onChange={this.onHandleChange} name="lastname" defaultValue={this.state.data.lastname} value={this.state.data.lastname} placeholder="Apellidos" label="Apellidos" error={this.state.errors.lastname} />

                                </div>
                            </div>
                            <FormInput onChange={this.onHandleChange} name="email" defaultValue={this.state.data.email} value={this.state.data.email} placeholder="Correo electrónico" label="Email" error={this.state.errors.email} />
                            <textarea cols={10} rows={6} name="message" aria-required="true" aria-invalid="false" placeholder="Message" required defaultValue={""} />
                        </div>{/* /.col-md-6 */}
                        <div className="lqd-column col-md-6 mb-10">
                            <div className="row">
                                {
                                    Array.isArray(this.props.projectTypes) && this.props.projectTypes.map(pt => {
                                        return (
                                            <div key={pt.value} className="fancy-box fancy-box-overlay shadowed scheme-light border-radius-3">
                                                <div className="cb-img-container border-radius-3">
                                                    <figure className="fancy-box-image border-radius-3" style={{ backgroundImage: `url(${pt.image.url})` }} data-liquid-blur="false" data-blur-options="{imgSrc:'backgroundImage', radius: 30, blurHandlerOn: 'static' }">
                                                        <img className="invisible" src='/assets/img/misc/shapes.jpg' crossOrigin="anonymous" alt={pt.image.alt} />
                                                    </figure>
                                                </div>{/* /.cb-img-container */}
                                                <span className="cb-overlay bg-gradient-secondary-br opacity-02" ></span>
                                                <div className="fancy-box-contents border-radius-3">
                                                    <div className="fancy-box-header">
                                                        {/* <span class="lb-cb-subtitle text-uppercase ltr-sp-2">Subtitle</span> */}
                                                        <h3 className="font-weight-bold">{pt.name}</h3>
                                                        <p>{pt.helpDescription}</p>
                                                    </div>{/* /.fancy-box-header */}
                                                    <div className="fancy-box-footer">
                                                        <a href="#" className="btn btn-xsm btn-underlined text-uppercase font-size-12 lh-15 btn-white text-white">
                                                            <span>
                                                                <span className="btn-txt">Discover one</span>
                                                            </span>
                                                        </a>
                                                    </div>{/* /.fancy-box-footer */}
                                                </div>{/* /.fancy-box-contents */}
                                                <a href="#" className="liquid-overlay-link" />
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="lqd-column col-md-6">
                            <p className="font-size-16 opacity-07"><em>We all know how important your information is. They are always safe with us.</em></p>
                        </div>{/* /.col-md-6 */}
                        <div className="lqd-column col-md-6 text-md-right">
                            <input type="submit" defaultValue="Send message" className="font-size-13 ltr-sp-1 font-weight-bold" />
                        </div>{/* /.col-md-6 */}
                    </div>{/* /.row */}
                </form>
            </>
        )
    }
}