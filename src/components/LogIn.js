import React, {useState} from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import FormGlass from '../elements/FormGlass'
import TextArea from '../elements/TextArea'
import Button from '../elements/Button'
import {useNavigate} from 'react-router-dom'
import {auth} from './../firebase/firebaseConfig'
import Alert from './../elements/Alert'
import { signInWithEmailAndPassword } from 'firebase/auth'


const LogIn = () =>
{
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stateAlert, changeStateAlert] = useState(false);
  const [alert, changeAlert] = useState('');

  const handleChange = (e) => {
    if(e.target.name === 'email'){
      setEmail(e.target.value);
    } else if (e.target.name === 'password'){
      setPassword(e.target.value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    changeStateAlert(false);
    changeAlert({});

    if( email === '' || password === '' )
    {
      changeStateAlert(true);
      changeAlert({
        type: 'error',
        message: 'Ingresa todos los datos.'
      })
      return;
    }

    try{      
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch(error){
      changeStateAlert(true);
      let message;
      switch(error.code){
        case 'auth/wrong-password':
          message = 'La contrasena no es correcta';
          break;
        case 'auth/user-not-found':
          message = 'No se encontro ninguna cuenta con este correo';
          break;
        default:
          message = 'Hubo un error al intentar acceder a la cuenta';
          break;
      }

      changeAlert({type: 'error', message: message});
    }
  }

  return (
    <>
      <TitlePage><h1>Ingresar</h1></TitlePage>
      <Container>
        <Container Main>
          <FormGlass action='' onSubmit={handleSubmit}>

            <TextArea
                type="email"
                name="email"
                id="formUser"
                placeholder='Correo electronico'
                value={email}
                onChange={handleChange}
                />
            <label htmlFor="formUser">Correo electronico</label>

            <TextArea
                type="password"
                name="password"
                id="formPassword"
                placeholder='Contraseña'
                value={password}
                onChange={handleChange}
                />
            <label htmlFor="formPassword">Contraseña</label>

            <div style={{marginTop: '50px'}}>
              <Button Back to={'/'}>
                Regresar
              </Button>

              <Button Accept type="submit">
                Ingresar
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
    </>
  )
}

export default LogIn;