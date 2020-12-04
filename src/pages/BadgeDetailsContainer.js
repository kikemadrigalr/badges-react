import React, { Component } from "react";
import api from "../api";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "../pages/BadgeDetails";

export class BadgeDetailsContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteBadge = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      const badgeId = this.props.match.params.badgeId;
      await api.badges.remove(badgeId);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.setState.error) {
      return <PageError error={this.state.error} />;
    }

    // const badge = this.state.data;

    //badgeDetailsContainer como es el componente que maneja estado, manejara
    //el estado del modal para abrirlo y cerrarlo
    //este estado sera pasado a badgeDetails y este a se vez lo pasa al
    //compenente modal
    return (
      <BadgeDetails
        badge={this.state.data}
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        onDeleteBadge={this.handleDeleteBadge}
        modalIsOpen={this.state.modalIsOpen}
      />
    );
  }
}

export default BadgeDetailsContainer;
