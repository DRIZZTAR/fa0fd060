import React from 'react';
import Layout from './Layout';

function ErrorState({ message }) {
  return (
    <Layout>
      <div className="h-full flex items-center justify-center text-red-500">{message}</div>
    </Layout>
  );
}

export default ErrorState;

