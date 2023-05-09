import { Component } from 'react';
import styles from "./EditUserForm.module.css";
import UserForm from "../../../modules/UserForm/UserForm";
import User from '../../../model/classes/User';
import UserService from '../../../services/UserService/UserService';
import { Navigate } from "react-router-dom";
import { Session } from "../../../model/utils/Session";
import MainHeader from '../../../components/MainHeader/MainHeader';

interface EditUserPageProp { }

interface EditUserPageState { }

class EditUserForm extends Component<EditUserPageProp, EditUserPageState> {
    handleEditUser = async (
        nomeCompleto: string,
        cpf: string,
        nomeDoUsuario: string,
        tipoDoUsuario: string,
        email: string,
        senha: string,
        confirmarSenha: string,
    ) => {

        let usuario: User = new User(nomeDoUsuario, nomeCompleto, cpf, email, senha, true);

        let validacao = await UserService.editUser(usuario);

        if (validacao) {
            alert("Usuário Editado com Sucesso!")
        } else {
            alert("Erro ao editar usuário.")
        }

    };

    render() {
        const breadcrumbList = [{ name: "Home" }, { name: "Gerenciamento de usuário" }, { name: "Adicionar Usuários" }];
        const session = Session();
        if (session.profile.type === 1) {
            return (
                <div className={styles.content}>
                    <MainHeader title="Edição de Usuário" area="Gerenciamento" pages={[ "Usuário" ]} />
                    <div className={styles.container}>
                        <UserForm onSubmit={this.handleEditUser} />
                    </div>
                </div>
            );
        } else {
            return <Navigate to="/initialuser" />;
        }
    }
}

export default EditUserForm;
