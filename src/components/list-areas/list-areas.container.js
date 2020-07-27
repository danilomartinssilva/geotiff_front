import React from "react";
import { compose, withState, withHandlers, lifecycle } from "recompose";
import { connect } from "react-redux";
import api from "../../services/ApiService";
import { getUser } from "../../services/auth";
import { loadAreasSuccess, loadAreasFailed } from "../../actions/areas-actions";
import ListAreasComponent from "./list-areas.component";
const user = JSON.parse(getUser());

const mapStateToProps = (state) => ({
  areas: state.areas,
});

const handleListAreasRequest = (dispatch) => {
  console.log("Dispatch", dispatch);
  try {
    api.get(`list-areas?user_id=${user.id}`).then((response) => {
      console.log(response);
      dispatch(loadAreasSuccess(response.data.result));
    });
  } catch (err) {
    dispatch(loadAreasFailed("Erro ao listar: " + err));
  }
};

const mapDispatchToProps = (dispatch) => ({
  handleListAreasRequest: () => handleListAreasRequest(dispatch),
});

const ListAreasContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    list: ({ handleListAreasRequest }) => () => {
      return handleListAreasRequest();
    },
  }),
  lifecycle({
    componentDidMount(props) {
      this.props.list();
    },
  })
)(ListAreasComponent);
export default ListAreasContainer;
