import type { NextPage } from 'next';
import { useEffect } from 'react';

interface IBadgeStatus {
  children: React.ReactNode;
  isActive: boolean;
}
interface IProjetoType {
  nome: string;
  ativo: boolean;
  Companhia: string;
  tmp_desenvolvimento: string;
}

export function BadgeStatus({ isActive, children }: IBadgeStatus) {
  return (
    <span className={isActive ? 'badge_ativo' : 'badge_inativo'}>
      {children}
    </span>
  );
}

const Projetos: NextPage = () => {
  useEffect(() => {
    document.title = 'Projetos';
  }, []);

  const localStorage =
    typeof window !== 'undefined' ? window.localStorage : null;
  const projetos: IProjetoType[] = [
    {
      nome: 'Projeto Electik',
      ativo: true,
      Companhia: 'Electik inc',
      tmp_desenvolvimento: '15: 12: 10',
    },
    {
      nome: 'Hugs',
      ativo: true,
      Companhia: 'Soft hug',
      tmp_desenvolvimento: '05: 00: 00',
    },
    {
      nome: 'Somos Mais',
      ativo: true,
      Companhia: 'Somo Mais associados inc',
      tmp_desenvolvimento: '15: 12: 10',
    },
    {
      nome: 'ele e eles',
      ativo: false,
      Companhia: 'Todos juntos inc',
      tmp_desenvolvimento: '16: 04: 10',
    },
  ];
  return (
    <div className='container'>
      <h1 style={{ marginBottom: '16px;' }}>Bem vindo</h1>

      <div className='wrap_page'>
        {projetos.map(projeto => (
          <div className='card_project'>
            <BadgeStatus isActive={projeto.ativo}>
              {projeto.ativo ? 'Ativo' : 'inativo'}
            </BadgeStatus>
            <h2>{projeto.nome}</h2>
            <div className='info_wrap'>
              <span>Companhia:</span>
              <span>{projeto.Companhia} </span>
            </div>
            <div className='info_wrap'>
              <span>Tempo de desenvolvimento:</span>
              <span>{projeto.tmp_desenvolvimento}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projetos;
