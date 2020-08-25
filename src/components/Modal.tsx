import React, { Component } from "react";

import { useTransition, animated } from "react-spring";

type ModalType = {
  children: any;
  isShow: boolean;
};

const Modal = ({ children, isShow }: ModalType) => {
  const props = useTransition(isShow, null, {
    from: { opacity: 0, marginTop: "-50px" },
    enter: { opacity: 1, marginTop: "0px" },
    leave: { opacity: 0, marginTop: "150px" },
  });

  const propsWrapper = useTransition(isShow, null, {
    from: { opacity: 0 },
    enter: { opacity: 0.4 },
    leave: { opacity: 0 },
  });
  return (
    <React.Fragment>
      {propsWrapper.map(({ item, styles, key }: any) => {
        return item ? (
          <animated.div key={key} style={styles} className="modal-wrapper">
            {props.map(({ item, props, key }: any) => {
              return item ? (
                <animated.div
                  key={key}
                  style={props}
                  className="modal__content"
                >
                  {children}
                </animated.div>
              ) : null;
            })}
          </animated.div>
        ) : null;
      })}
    </React.Fragment>
  );
};

export default Modal;
