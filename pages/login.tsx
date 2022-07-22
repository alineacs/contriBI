import { NextPage } from 'next';
import Link from 'next/link';
import { useCallback, useContext, useState } from 'react';
import { userContext } from '../context/userContext';

type Props = {
  email: string;
  name: string;
  password: string;
};

const Login: NextPage = () => {
  const { localStorage } = useContext(userContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dados, setDados] = useState<Props>();
  const result = localStorage?.getItem('user1');

  const login = useCallback(async (event: any) => {
    event.preventDefault();
    result ? setDados(JSON.parse(result)) : null;
    if (dados?.email === email && dados?.password === password) {
      console.log('Login realizado com sucesso');
    } else {
      console.log('tente denovoS');
    }
  }, []);

  // useEffect(() => {
  //   document.title = 'Login';
  //   console.log(dados);
  // }, [dados]);

  return (
    <div className='container'>
      <h1> Contri BI </h1>
      <h2>Entrar</h2>
      <div className='wrap'>
        <div className='form_wrap'>
          <form onSubmit={login}>
            <div className='form_group'>
              <label htmlFor='mail'>Email</label>
              <input
                type='text'
                id='mail'
                name='user'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className='form_group'>
              <label htmlFor='pass'>Senha</label>
              <input
                type='password'
                id='pass'
                name='pass'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Link href='/'>Cancelar</Link>
              <button type='submit'>Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
