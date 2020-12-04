import React from "react";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeEdit.css";
// import swal from "sweetalert";
// import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeEdit extends React.Component {
  //levantar estado de BadgeForm a la pagina Badge New

  //inicializar un estado en BadgeEdit
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      //las datos que se pasan por la ruta en este caso el id para editar
      //se puede obtener en el objeto params
      const badgeId = this.props.match.params.badgeId;
      const data = await api.badges.read(badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  //declarar un manejador para el evento change
  handleChange = (e) => {
    // esta forma sobreescribe los valores, se debe crear una copia del estado
    //o dejar caer todos los elementos y agregar uno nuevo
    // this.setState({
    //   form: {
    //     [e.target.name]: e.target.value,
    //   },
    // });

    //creando una copia del state
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;

    // this.setState({
    //   form: nextForm,
    // });

    //usando el operador spread
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  //manejar el evento submit y eviar loas datos del form al Api
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    //una vez realizado el post se le pasa a la rect router en su prop history
    //la ruta a la que va a regresar o donde se va a relozalizar
    // this.props.history.push("/badges");

    try {
      //update recibe el badgeId que va en params y la informacion a modificar que va en state.form
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      // swal("Good job!", "Your Badge Was Created!", "success");
      // alert("Your Badge Was Created");
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
      // swal("Oops!", "Your Badge was not Created!", "error");
    }
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <div className="BadgeEdit__hero">
          <img src={header} className="img-fluid" alt="Header Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                // firstName="Carlos"
                // lastName="Madrigal"
                // avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                // jobTitle="Developer"
                // twitter="kikemadrigal"
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                email={this.state.form.email || "Email"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                twitter={this.state.form.twitter || "Twitter"}
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>

            {/* se para el estad de BadgeEdit como prop a BadgeForm para que lea la informacion */}
            {/* Pasar los valores a form como prop paraq que los pueda utilizar  */}
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
