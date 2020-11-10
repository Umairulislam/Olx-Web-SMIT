import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className="container2">

                {/*Modal: Login / Register Form*/}
                <div className="modal fade" id="modalLRForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog cascading-modal" role="document">
                        {/*Content*/}
                        <div className="modal-content">
                            {/*Modal cascading tabs*/}
                            <div className="modal-c-tabs">
                                {/* Nav tabs */}
                                <ul className="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                                    <li className="nav-item">
                                        <a id="open" className="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i className="fas fa-user mr-1" />
                          Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="open" className="nav-link" data-toggle="tab" href="#panel8" role="tab"><i className="fas fa-user-plus mr-1" />
                          Register</a>
                                    </li>
                                </ul>
                                {/* Tab panels */}
                                <div className="tab-content">
                                    {/*Panel 7*/}
                                    <div className="tab-pane fade in show active" id="panel7" role="tabpanel">
                                        {/*Body*/}
                                        <div className="modal-body mb-1">
                                            <div className="md-form form-sm mb-5">
                                                <i className="fas fa-envelope prefix" />
                                                <input type="email" id="modalLRInput10" className="form-control form-control-sm validate" />
                                                <label data-error="wrong" data-success="right" htmlFor="modalLRInput10">Your email</label>
                                            </div>
                                            <div className="md-form form-sm mb-4">
                                                <i className="fas fa-lock prefix" />
                                                <input type="password" id="modalLRInput11" className="form-control form-control-sm validate" />
                                                <label data-error="wrong" data-success="right" htmlFor="modalLRInput11">Your password</label>
                                            </div>
                                            <div className="text-center mt-2">
                                                <button className="btn btn-info">Log in <i className="fas fa-sign-in ml-1" /></button>
                                            </div>
                                        </div>
                                        {/*Footer*/}
                                        <div className="modal-footer">
                                            <div className="options text-center text-md-right mt-1">
                                                <p>Not a member? <a href="#" className="blue-text">Sign Up</a></p>
                                                <p>Forgot <a href="#" className="blue-text">Password?</a></p>
                                            </div>
                                            <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                    {/*/.Panel 7*/}
                                    {/*Panel 8*/}
                                    <div className="tab-pane fade" id="panel8" role="tabpanel">
                                        {/*Body*/}
                                        <div className="modal-body">
                                            <div className="md-form form-sm mb-5">
                                                <i className="fas fa-envelope prefix" />
                                                <input type="email" id="modalLRInput12" className="form-control form-control-sm validate" />
                                                <label data-error="wrong" data-success="right" htmlFor="modalLRInput12">Your email</label>
                                            </div>
                                            <div className="md-form form-sm mb-5">
                                                <i className="fas fa-lock prefix" />
                                                <input type="password" id="modalLRInput13" className="form-control form-control-sm validate" />
                                                <label data-error="wrong" data-success="right" htmlFor="modalLRInput13">Your password</label>
                                            </div>
                                            <div className="md-form form-sm mb-4">
                                                <i className="fas fa-lock prefix" />
                                                <input type="password" id="modalLRInput14" className="form-control form-control-sm validate" />
                                                <label data-error="wrong" data-success="right" htmlFor="modalLRInput14">Repeat password</label>
                                            </div>
                                            <div className="text-center form-sm mt-2">
                                                <button className="btn btn-info">Sign up <i className="fas fa-sign-in ml-1" /></button>
                                            </div>
                                        </div>
                                        {/*Footer*/}
                                        <div className="modal-footer">
                                            <div id="login" className="options text-right">
                                                <p className="pt-1">Already have an account? <a href="#" className="blue-text">Log In</a></p>
                                            </div>
                                            <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                    {/*/.Panel 8*/}
                                </div>
                            </div>
                        </div>
                        {/*/.Content*/}
                    </div>
                </div>




                {/*Modal: Login / Register Form*/}
                <div className="text-center">
                    <a href className="btn btn-default btn-rounded my-3" data-toggle="modal" data-target="#modalLRForm">LogIn</a>
                </div>

                <div>
                    {/* Modal */}
                    <div className="modal fade" id="elegantModalForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            {/*Content*/}
                            <div className="modal-content form-elegant">
                                {/*Header*/}
                                <div className="modal-header text-center">
                                    <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>Sign in</strong></h3>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                {/*Body*/}
                                <div className="modal-body mx-4">
                                    {/*Body*/}
                                    <div className="md-form mb-5">
                                        <input type="email" id="Form-email1" className="form-control validate" />
                                        <label data-error="wrong" data-success="right" htmlFor="Form-email1">Your email</label>
                                    </div>
                                    <div className="md-form pb-3">
                                        <input type="password" id="Form-pass1" className="form-control validate" />
                                        <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Your password</label>
                                        <p className="font-small blue-text d-flex justify-content-end">Forgot <a href="#" className="blue-text ml-1">
                                            Password?</a></p>
                                    </div>
                                    <div className="text-center mb-3">
                                        <button type="button" className="btn btn-block btn-rounded z-depth-1a">Sign in</button>
                                    </div>
                                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
                  with:</p>
                                    <div className="row my-3 d-flex justify-content-center">
                                        {/*Facebook*/}
                                        <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-facebook-f text-center" /></button>
                                        {/*Twitter*/}
                                        <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-twitter" /></button>
                                        {/*Google +*/}
                                        <button type="button" className="btn btn-white btn-rounded z-depth-1a"><i className="fab fa-google-plus-g" /></button>
                                    </div>
                                </div>
                                {/*Footer*/}
                                <div className="modal-footer mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">Not a member? <a href="#" className="blue-text ml-1">
                                        Sign Up</a></p>
                                </div>
                            </div>
                            {/*/.Content*/}
                        </div>
                    </div>
                    {/* Modal */}
                    <div id="sell" className="text-center">
                        <a href className="btn btn-default btn-rounded" data-toggle="modal" data-target="#elegantModalForm">Sell</a>
                    </div>
                </div>

            </div>


        )
    }
}

export default Login;