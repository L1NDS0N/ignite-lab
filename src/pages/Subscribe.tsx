import { gql, useMutation } from '@apollo/client';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION,
  );

  async function handleCreateSubscriber(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({ variables: { name, email } });
    clearForm();
    navigate('/event');
  }
  function clearForm() {
    setName('');
    setEmail('');
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px] ">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{' '}
            <strong className="text-blue-500"> aplicação completa</strong>, do
            zero, com
            <strong className="text-blue-500"> ReactJS</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border-gray-500 rounded">
          <strong className="block text-2xl mb-6">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleCreateSubscriber}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="bg-gray-900 rounded px-5 h-14"
              placeholder="Seu nome completo"
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="bg-gray-900 rounded px-5 h-14"
              placeholder="Digite seu e-mail"
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/codeMockup.png" className="mt-10" alt="" />
    </div>
  );
}