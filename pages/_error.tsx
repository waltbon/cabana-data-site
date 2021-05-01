import { NextPage } from 'next';

const Error: NextPage<any> = () => {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
}

Error.getInitialProps = async () => {
    return {
      namespacesRequired: ['common']
    }
}

export default Error;