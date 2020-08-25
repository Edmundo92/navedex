import React, { useState, FC, useEffect } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import { Link, useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { naverCreateAction } from "../store/navers/action";
import { naverUpdateAction } from "../store/navers/action";
import { naverFindOneAction } from "../store/navers/action";
import Modal from "../components/Modal";
import Alert from "../components/Alert";
import { NaverCreate } from "../store/navers/types";
import { transformDate } from "../helpers/transformDate";

export type FormData = {
  id?: number;
  user_id?: string;
  name: string;
  url: string;
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
};

type CreateOrUpdateForm = {
  naver: Response;
  naverCreateAction: (data: FormData) => void;
  naverUpdateAction: (data: FormData, id: string) => void;
  naverFindOneAction: (id: string) => void;
};

type Response = {
  wasRaised: boolean;
  data: [];
};

const Form: FC<CreateOrUpdateForm> = ({
  naver,
  naverCreateAction,
  naverFindOneAction,
  naverUpdateAction,
}) => {
  const { id } = useParams();
  const [alertInfo, setAlertInfo] = useState({
    title: "",
    message: "",
  });
  const history = useHistory();
  const [isShowModal, setIsShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    admission_date: "",
    birthdate: "",
    job_role: "",
    project: "",
    url: "",
  });

  useEffect(() => {
    if (id) {
      naverFindOneAction(id);
    } else {
    }
  }, [id]);

  useEffect(() => {
    if (naver.data.length > 0 && id !== undefined) {
      const d: any = naver.data;

      let obj = d[0];
      for (let key in obj) {
        if (key == "admission_date") {
          obj[key] = transformDate(obj[key]);
        }
        if (key == "birthdate") {
          obj[key] = transformDate(obj[key]);
        }
      }
      setFormData(d[0]);
    }
  }, [id]);

  useEffect(() => {
    if (naver.wasRaised) {
      setIsShowModal(true);
      setTimeout(() => {
        setIsShowModal(false);
        history.push("/home");
      }, 2000);
    }
  }, [naver.wasRaised]);

  function handleEvent(e: any) {
    const { name, value } = e;
    setFormData((old) => ({ ...old, [name]: value }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (id) {
      setAlertInfo({
        title: "Naver atualizado",
        message: "Naver atualizado com sucesso!",
      });
      delete formData.id;
      delete formData.user_id;
      naverUpdateAction(formData, id);
    } else {
      setAlertInfo({
        title: "Naver criado",
        message: "Naver criado com sucesso!",
      });
      naverCreateAction(formData);
    }
  }

  return (
    <div className="container-fluid">
      <Header />
      <div className="form-container">
        <div className="form">
          <div className="title-content">
            <Link to="/home">
              <img src={require("../assets/images/chevronLeft.svg")} alt="" />
            </Link>
            <h4>Adicionar Naver</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <Input
                name="name"
                value={formData.name}
                type="text"
                label="Nome"
                placeholder="Nome"
                eventHandle={handleEvent}
              />
              <Input
                name="job_role"
                value={formData.job_role}
                type="text"
                label="Cargo"
                placeholder="Cargo"
                eventHandle={handleEvent}
              />
            </div>
            <div className="input-group">
              <Input
                name="birthdate"
                value={formData.birthdate}
                type="text"
                label="Idade"
                placeholder="Idade"
                eventHandle={handleEvent}
              />
              <Input
                name="admission_date"
                value={formData.admission_date}
                type="text"
                label="Tempo de Empresa"
                placeholder="Tempo de Empresa"
                eventHandle={handleEvent}
              />
            </div>
            <div className="input-group">
              <Input
                name="project"
                value={formData.project}
                type="text"
                label="Projetos que participou"
                placeholder="Projetos que participou"
                eventHandle={handleEvent}
              />
              <Input
                name="url"
                value={formData.url}
                type="text"
                label="URL da foto do Naver"
                placeholder="URL da foto do Naver"
                eventHandle={handleEvent}
              />
            </div>
            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
      <Modal isShow={isShowModal}>
        <Alert
          title={alertInfo.title}
          message={alertInfo.message}
          onCancel={() => setIsShowModal(false)}
        />
      </Modal>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { naver: state.navers };
};
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    { naverCreateAction, naverFindOneAction, naverUpdateAction },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Form);
