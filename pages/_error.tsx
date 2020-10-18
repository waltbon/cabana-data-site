import { NextPage } from 'next';
import i18n from '../i18n';

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

export default i18n.withTranslation('common')(Error);