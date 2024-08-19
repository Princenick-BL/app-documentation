import Layout from '@/layouts/BaseLayout'
import React from 'react'

type Props = {}

export default function Documentation({}: Props) {
  return (
    <Layout title='Documentation'>
      <div>Documentation</div>
    </Layout>
  )
}


export const getServerSideProps = async ({ params }:{params:any}) => {

  return {
    redirect: {
      destination: '/dev/overview',
      permanent: false,
    },
  };
};