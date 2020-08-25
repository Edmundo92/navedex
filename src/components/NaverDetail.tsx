import React from "react";
import { calcAgeOrYear } from "../helpers/calc";

type Detail = {
  naverSeleted: any;
  onCancel: () => void;
};

const NaverDetail = ({ naverSeleted, onCancel }: Detail) => {
  return (
    <div className="naver-detail-content">
      <img src={naverSeleted.url} className="left" alt="" />
      <div className="right">
        <span className="close" onClick={onCancel}>
          X
        </span>
        <div className="">
          <div className="right-content">
            <h4>{naverSeleted.name}</h4>
            <span>{naverSeleted.job_role}</span>
          </div>
          <div className="right-content">
            <h6>Idade</h6>
            <span>{calcAgeOrYear(naverSeleted.birthdate)} anos</span>
          </div>
          <div className="right-content">
            <h6>Tempo de empresa</h6>
            <span>{calcAgeOrYear(naverSeleted.admission_date)} anos</span>
          </div>
          <div className="right-content">
            <h6>Projetos que participou</h6>
            <span>{naverSeleted.project}</span>
          </div>
        </div>

        <div className="action-container">
          <img
            src={require("../assets/images/trash.svg")}
            alt=""
            className="trash-icon"
          />
          <img
            src={require("../assets/images/edit.svg")}
            alt=""
            className="edit-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default NaverDetail;
