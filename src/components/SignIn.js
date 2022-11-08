import React, {useState} from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import FormGlass from '../elements/FormGlass'
import TextArea from '../elements/TextArea'
import Button from '../elements/Button'
import Alert from './../elements/Alert'
import {auth} from './../firebase/firebaseConfig'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import Figura from '../elements/Figura'
import { FaUser } from 'react-icons/fa'

const SignIn = () => {
  const navigate = useNavigate();
  const [name, changeName] = useState('');
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [password2, changePassword2] = useState('');
  const [stateAlert, changeStateAlert] = useState(false);
  const [alert, changeAlert] = useState('');

  const handleChange = async (e) => {
    switch(e.target.name){
      case 'name':
        changeName(e.target.value);
        break;
      case 'email':
        changeEmail(e.target.value);
        break;
      case 'password':
        changePassword(e.target.value);
        break;
      case 'password2':
        changePassword2(e.target.value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    changeStateAlert(false);
    changeAlert({});

    console.log(name, email, password, password2);
    if(name === '' || email === '' || password === '' || password2 === '')
    {
      changeStateAlert(true);
      changeAlert({
        type: 'error',
        message: 'Ingresa todos los datos.'
      })
      return;
    }
    if(password !== password2)
    {
      changeStateAlert(true);
      changeAlert({
        type: 'error',
        message: 'Las contrasenas no coinciden.'
      })
      return;
    }

    try{      
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {displayName: name});
      navigate('/');
      window.location.reload();
    }catch(error){
      changeStateAlert(true);
      
      let message;
      
      switch(error.code){
        case 'auth/invalid-password':
          message = 'La contrasena debe ser de al menos 6 caracteres';
          break;
        case 'auth/email-already-in-use':
          message = 'Ya existe una cuenta con el correo electronico proporcionado';
          break;
        case 'auth/invalid-email':
          message = 'El correo electronico no es valido';
          break;
        default:
          message = 'Hubo un error al intentar crear la cuenta';
          console.log(error.code);
          break;
      }
      changeAlert({type: 'error', message: message});
    }
  }
  
  return (
    <div style={{position:'relative', overflow:'hidden'}}>
      <TitlePage><h1>Registrar</h1></TitlePage>
      <Container>
        <Container Main>
          <Figura SignIn><FaUser className='icono'/></Figura>
          <FormGlass Registrar action='' onSubmit={handleSubmit}>
            
            <TextArea
                type="text"
                name="name"
                id="formName"
                value={name}
                onChange={handleChange}
                placeholder='Nombre completo'
                />
            <label className="form-label" htmlFor="formName">Nombre completo</label>

            <TextArea
                type="email"
                name="email"
                id="formEmail"
                value={email}
                onChange={handleChange}
                placeholder='Correo electronico'
                />
            <label className="form-label" htmlFor="formEmail">Correo electrónico</label>
          
            <TextArea
                type="password"
                name="password"
                id="formPassword"
                value={password}
                onChange={handleChange}
                placeholder='Contraseña'
                />
            <label className="form-label" htmlFor="formPassword">Contraseña</label>

            <TextArea
                type="password"
                name="password2"
                id="formPassword2"
                value={password2}
                onChange={handleChange}
                placeholder='Repetir contraseña'
                />
            <label className="form-label" htmlFor="formPassword2">Confirmar contraseña</label>

            <div style={{marginTop: '50px'}}>
              <Button Back to='/'>
                Regresar
              </Button>

              <Button Accept type="submit">
                Registrar
              </Button>
            </div>
              
          </FormGlass>

          <Alert
            type={alert.type}
            message={alert.message}
            stateAlert={stateAlert}
            changeStateAlert={changeStateAlert}  
          />
        </Container>
      </Container>
    </div>
  )
}

export default SignIn;