import React from 'react';
import { IImage } from '../../lib/types/cms/models/common/image.interface';

interface ProjectType {
    name: string;
    value: string;
    helpDescription: string;
    description: string;
    image: IImage;
}

interface Props {
    projectTypes: ProjectType[]
}

interface State {
    selected: ProjectType;
}

export default class extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.onSelectionChanged = this.onSelectionChanged.bind(this);
        this.state = {
            selected: props.projectTypes[0],
        }
    }

    onSelectionChanged(value) {
        this.setState({
            selected: this.props.projectTypes.find(p => p.value === value)
        })
    }

    render() {
        return (
            <div className="row">
                <div className="lqd-column col-md-12 pb-20 text-center">
                    <h2 className="mt-0 mb-3">Total Design Freedom</h2>
                    <h6 className="font-size-16 opacity-06">Free lifetime updates, and bonus plugins included in the package!</h6>
                </div>{/* /.col-md-12 */}
                <div className="lqd-column col-md-12">
                    <div className="tabs tabs-nav-side tabs-nav-side-alt tabs-nav-side-block">
                        <ul className="nav tabs-nav" role="tablist">
                            {
                                Array.isArray(this.props.projectTypes) && this.props.projectTypes.map(pt => {
                                    return (
                                        <li key={pt.value} role="presentation" className={pt.value === this.state.selected.value ? 'active' : ''}>
                                            <a data-value={pt.value} href={`#${pt.value}`} aria-controls="ld-tab-pane-48" role="tab" data-toggle="tab" onClick={() => this.onSelectionChanged(pt.value)}>
                                                {pt.name}
                                                <span>{pt.helpDescription}</span>
                                            </a>
                                        </li>)
                                })
                            }
                        </ul>
                        <div className="tabs-content">
                            <div role="tabpanel" className="tabs-pane fade active in" id="ld-tab-pane-48">
                                <div className="fancy-box fancy-box-case-study scheme-light" data-hover3d="true" style={{ height: '500px' }}>
                                    <div className="fancy-box-contents border-radius-5" data-stacking-factor="0.5">
                                        <div className="cb-img-container border-radius-5">
                                            <figure className="fancy-box-image border-radius-5 loaded" data-responsive-bg="true">
                                                <img className="" src={`${this.state.selected.image.url}?fit=crop&w=500&h=500`} alt={this.state.selected.image.alt} />
                                            </figure>
                                        </div>
                                        <div className="fancy-box-header">
                                            <span className="ld-cb-icon"><i className="icon-weather_cloud_lightning" /></span> <span className="ld-cb-cat font-weight-medium text-uppercase ltr-sp-15">
                                                {this.state.selected.helpDescription}
                                            </span>
                                            <h3>{this.state.selected.name}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 pt-10">
                                        <div dangerouslySetInnerHTML={{ __html: this.state.selected.description }}></div>
                                    </div>
                                </div>
                            </div>{/* /.tab-pane */}
                            <div className="row text-center mt-30">
                                <p>Hablemos sobre sus proyectos</p>
                                <div className="row">
                                    <a className="btn btn-primary border-thin mt-20" href="/contact-us">
                                        <span className="btn-txt">
                                            Contáctenos
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>{/* /.tabs-content */}
                    </div>{/* /.tabs */}
                </div>{/* /.col-md-12 */}
            </div>
        )
    }
}