import React, {Component} from 'react';

class Login extends Component {
    render() {
        return(
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                    {this.props.action}
                </button>

                <div className="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalScrollableTitle">{this.props.action}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input type="text" class="form-control" id="unameBar"  placeholder="Username"/>
                        <input type="text" class="form-control" id="emailBar"  placeholder="E-mail"/>
                        <input type="text" class="form-control" id="passBar"  placeholder="Password"/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Login;
