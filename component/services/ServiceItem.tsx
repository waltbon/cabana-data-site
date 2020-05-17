import React from 'react';
import { IServicio } from '../../lib/types/cms/servicio/servicio.interface';

interface Props {
    servicio: IServicio
}    


export default class extends React.Component<Props> {
    get servicio() {
        return this.props.servicio;
    }
    render() {
        const url = `/servicios/${this.props.servicio.slug}` ;
        return (
            <div className="post-item border">
                <div className="post-item-wrap">
                    <div className="post-image">
                        <a href={url}>
                            <img alt="" src={this.servicio.background.url} />
                        </a>
                        <span className="post-meta-category"><a href="">{this.servicio.nombre}</a></span>
                    </div>
                    <div className="post-item-description">
                        <span className="post-meta-date"><i className="fa fa-calendar-o" />Jan 21, 2017</span>
                        <span className="post-meta-comments"><a href=""><i className="fa fa-comments-o" />33 Comments</a></span>
                        <h2><a href="#">{this.servicio.nombre}
                  </a></h2>
                        <p>{this.servicio.descripcion}</p>
                        <a href="#" className="item-link">Read More <i className="fa fa-arrow-right" /></a>
                    </div>
                </div>
            </div>
        )
    }
}