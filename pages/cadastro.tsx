import type { NextPage } from 'next';
import Link from 'next/link';
import { useCallback, useContext, useEffect, useState } from 'react';
import { userContext } from '../context/userContext';
import { api } from '../services/api';

interface CheckboxProps {
  languages: {
    react: boolean;
    vue: boolean;
    angular: boolean;
  };
}

const Cadastro: NextPage = () => {
  useEffect(() => {
    document.title = 'Cadastro';
  }, []);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState<CheckboxProps>({
    languages: {
      react: false,
      vue: false,
      angular: false,
    },
  });

  const {
    email,
    name,
    password,
    setName,
    setEmail,
    setPassword,
    localStorage,
  } = useContext(userContext);

  const subscribe = useCallback(
    (event: any) => {
      api.get('').then(res => {});
      event.preventDefault();
      localStorage?.setItem('user1', JSON.stringify({ name, email, password }));
    },
    [email, name, password]
  );

  function handleChangeCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === 'React') {
      setIsChecked({
        languages: { ...isChecked.languages, react: e.target.checked },
      });
    }
    if (e.target.value === 'Vue') {
      setIsChecked({
        languages: { ...isChecked.languages, vue: e.target.checked },
      });
    }
    if (e.target.value === 'Angular') {
      setIsChecked({
        languages: { ...isChecked.languages, angular: e.target.checked },
      });
    }
  }

  console.log(isChecked);

  return (
    <div className='container'>
      <h1>Contri BI</h1>
      <p>App de BI coletivos</p>
      <h2>Cadastre-se</h2>

      <div className='wrap'>
        <form onSubmit={subscribe}>
          <div className='checkboxContainer' style={{ marginBottom: '10px' }}>
            <h2 style={{ fontWeight: 400, fontSize: '18px' }}>Skills:</h2>
            <label htmlFor='react'>
              <input
                type='checkbox'
                id='react'
                onChange={e => handleChangeCheckbox(e)}
                checked={isChecked.languages?.react}
                value='React'
              />{' '}
              React
            </label>
            <label htmlFor='vue'>
              <input
                type='checkbox'
                id='vue'
                onChange={e => handleChangeCheckbox(e)}
                checked={isChecked.languages?.vue}
                value='Vue'
              />{' '}
              Vue
            </label>
            <label htmlFor='angular'>
              <input
                type='checkbox'
                id='angular'
                onChange={e => handleChangeCheckbox(e)}
                checked={isChecked.languages?.angular}
                value='Angular'
              />{' '}
              Angular
            </label>
          </div>
          <div className='form_group'>
            <label htmlFor='name'>Usuário</label>
            <input
              id='name'
              type='text'
              name='user'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='form_group'>
            <label htmlFor='name'>Email</label>
            <input
              id='email'
              type='text'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='form_group'>
            <label htmlFor='name'>Senha</label>
            <input
              id='senha'
              type='password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Link href='/'>Cancelar</Link>
            <button type='submit'>Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
