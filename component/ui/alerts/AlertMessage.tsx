import React from 'react';

export default class extends React.Component<{
    message: string;
    type: 'danger'|'info'|'success'; 
    title?: string
}> {
    render() {
        const fa = this.props.type === 'danger' ? 'warning' :
                    this.props.type === 'info' ? 'info' : 
                    this.props.type === 'success' ? 'check' : '';
        return (
            <React.Fragment>
                <div role="alert" className={`alert alert-${this.props.type} alert-dismissible`}>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span> </button>
                    {
                        this.props.title &&
                        <strong><i className={`fa fa-${fa}`}></i> {this.props.title}</strong>
                    }
                    {this.props.message}
                </div>
            </React.Fragment>
        )
    }
}