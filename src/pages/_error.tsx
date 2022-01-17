import type { NextPage } from 'next';

type ErrorPageProps = {
  statusCode: number;
};

const ErrorPage: NextPage<ErrorPageProps, {}> = (props) => {
  const { statusCode } = props;

  return <div>{statusCode}</div>;
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const errCode = err ? err.statusCode : 404;
  const statusCode = res ? res.statusCode : errCode;

  return { statusCode };
};

export default ErrorPage;
