import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { naverAction, naverDeleteAction } from "../store/navers/action";
import Header from "../components/Header";
import Modal from "../components/Modal";
import NaverDetail from "../components/NaverDetail";
import { useHistory } from "react-router-dom";
import Alert from "../components/Alert";

type Naver = {
  id: number;
  name: string;
  url: string;
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
};

const Home = ({ navers, naverAction, naverDeleteAction }: any) => {
  const history = useHistory();
  const [id, setId] = useState(0);
  const [typeModal, setTypeModal] = useState("");
  const [isShowContentButton, setIsShowContentButton] = useState(false);
  const [naversList, setNaversList] = useState([]);
  const [naverSeleted, setNaverSeleted] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    title: "",
    message: "",
  });

  useEffect(() => {
    naverAction();
    setNaversList(navers.data);
  }, [navers.data.length > 0]);

  useEffect(() => {
    if (navers.wasRaised) {
      setIsShowContentButton(true);
      setAlertInfo({
        title: "Naver excluído",
        message: "Naver excluído com sucesso!",
      });

      setTimeout(() => {
        setIsShowContentButton(false);
        setIsShowModal(false);
        history.push("/home");
      }, 2000);
    }
  }, [navers.wasRaised]);

  function deleteNaver(id: number) {
    setTypeModal("Alert");
    setId(id);
    setIsShowContentButton(true);
    setIsShowModal(true);
    setAlertInfo({
      title: "Excluir Nave",
      message: "Tem certeza que deseja excluir ester Naver ?",
    });
  }

  return (
    <>
      <div className="home-content container-fluid">
        <Header />

        <main className="main">
          <div className="navers-container">
            <div className="navers-inf">
              <h1>Navers</h1>
              <button onClick={() => history.push("/naver")}>
                Adicionar Naver
              </button>
            </div>

            <div className="navers-list row">
              {naversList.map((el: Naver, index) => {
                return (
                  <div
                    className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 naver-item"
                    key={el.id}
                  >
                    <img
                      src={el.url}
                      alt={el.name}
                      onClick={() => {
                        setNaverSeleted(el);
                        setTypeModal("NaverDetail");
                        setIsShowModal(!isShowModal);
                      }}
                    />
                    <h4 className="mt-4">{el.name}</h4>
                    <span className="mt-8">{el.job_role}</span>
                    <div className="action-container">
                      <img
                        onClick={() => deleteNaver(el.id)}
                        src={require("../assets/images/trash.svg")}
                        alt="Trash Icon"
                        className="trash-icon"
                      />
                      <img
                        onClick={() => history.push(`naver/${el.id}`)}
                        src={require("../assets/images/edit.svg")}
                        alt="Edit Icon"
                        className="edit-icon"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      <Modal isShow={isShowModal}>
        {typeModal == "NaverDetail" && (
          <NaverDetail
            naverSeleted={naverSeleted}
            onCancel={() => setIsShowModal(false)}
          />
        )}

        {isShowContentButton && typeModal === "Alert" && (
          <Alert
            title={alertInfo.title}
            message={alertInfo.message}
            onCancel={() => setIsShowModal(false)}
          >
            {!navers.wasRaised && (
              <div className="alert-btn">
                <button
                  className="cancel"
                  onClick={() => setIsShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className="delete"
                  onClick={() => {
                    naverDeleteAction(id);
                    setIsShowContentButton(false);
                  }}
                >
                  Excluir
                </button>
              </div>
            )}
          </Alert>
        )}
      </Modal>
    </>
  );
};

const mapStateToProps = ({ navers }: any) => {
  return { navers: navers };
};
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ naverAction, naverDeleteAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
