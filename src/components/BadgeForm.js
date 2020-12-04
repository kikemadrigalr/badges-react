import React from "react";
// import swal from "sweetalert";

class BadgeForm extends React.Component {
  //inicializar el state
  // state = {};
  /*
  //manejador del evento onChange del input
  handleChange = (e) => {
    // console.log({ name: e.target.name, value: e.target.value });´

    //setState permite asignar el valor ingresado en los input al estado del componente
    //para ser utilizado y enviado a otros componentes
    this.setState({
      //se asigna cada valor del input a un elemento del objeto state
      // firstname: e.target.value,

      //de esta forma dependiendo del input que dispare el evento, se guarda
      //esa informacion en una llave para ese elemento
      [e.target.name]: e.target.value,
    });
  };
*/
  //manejador del evento click
  handleClick = (e) => {
    console.log("Button was click");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Button was click, submit");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}> */}
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            {/* al teclear en un input se genera un evento onChange */}
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              // value={this.state.firstName} //con el prop value convertimos el form de no controla a controlado lo cual permite tener una sola fuente de informacion para manipular el estado
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              // value={this.state.lastName}
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="email"
              // value={this.state.email}
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Job Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              // value={this.state.jobTitle}
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              // value={this.state.twitter}
              value={this.props.formValues.twitter}
            />
          </div>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Save
          </button>

          {/* mostrar un elemento html de manera condicional 
          si existe un error este mensaje sera mostrado bajo 
          el formulañrio*/}
          {
            this.props.error && (
              <p className="text-danger">{this.props.error.message}</p>
            )
            // swal("Oops!", "Your Badge was not Created!", "error")
          }
        </form>
      </div>
    );
  }
}

export default BadgeForm;
