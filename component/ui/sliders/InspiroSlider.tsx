import React from 'react';

interface Props {
    nombre: string;
    backgroundUrl: string;
}

export default class extends React.Component<Props> {
    render() {
        const backgroundUrl = `url("${this.props.backgroundUrl}")`;
        return (
            <div id="slider" className="inspiro-slider slider-halfscreen" data-height-xs={360}>
                <div className="slide" style={{ backgroundImage: backgroundUrl }}>
                    <div className="container">
                        <div className="slide-captions m-b-200 text-center text-light">
                            <h2>{this.props.nombre}</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}