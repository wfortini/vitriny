import {auth, database, provider} from "../config/firebase";
import * as t from '../config/actionTypes';

import {AsyncStorage} from 'react-native';


export const modificaEmail = (texto) => {
    return {
        type: 'modifica_email',
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: 'modifica_senha',
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: 'modifica_nome',
        payload: texto
    }
}

//Register the user using email and password
export function register(data) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const {email, password, username} = data;
            auth.createUserWithEmailAndPassword(email, password)
                .then((resp) => {
                    let user = {username, uid: resp.user.uid}
                    const userRef = database.ref().child('users');

                    userRef.child(user.uid).update({...user})
                        .then(() => {
                            dispatch({type: t.LOGGED_IN, user});
                            resolve(user)
                        })
                        .catch((error) => reject({message: error}));
                })
                .catch((error) => reject(error));
        })
    };
}
