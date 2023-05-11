import React from "react";
import styles from "./InitialUser.module.css";
import Navbar from "../../modules/Navbar/Navbar";
import { Session } from "../../model/utils/Session";

class InitialUser extends React.Component {
  render() {
    const breadcrumbList = [{ name: "Painel do Usuário" }];
    const session = Session();
    return (
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <Navbar pathList={breadcrumbList} />
        </div>
        <div className={styles.container}>
          <div className={styles.containerTitle}>Informações pessoais</div>
          <div className={styles.gridContainer}>
            <div>
              <div className={styles.inputLabel}>Usuário</div>
              <div className={styles.inputValue}>{session.userName}</div>
            </div>
            <div>
              <div className={styles.inputLabel}>Nome</div>
              <div className={styles.inputValue}>{session.fullName}</div>
            </div>
            <div>
              <div className={styles.inputLabel}>E-mail</div>
              <div className={styles.inputValue}>{session.email}</div>
            </div>
            <div>
              <div className={styles.inputLabel}>CPF</div>
              <div className={styles.inputValue}>{session.cpf}</div>
            </div>
            <div>
              <div className={styles.inputLabel}>ID</div>
              <div className={styles.inputValue}>{session.id}</div>
            </div>
          </div>
          <button type="button" className={styles.editBtn}>
            Editar
          </button>
        </div>
      </div>
    );
  }
}

export default InitialUser;
