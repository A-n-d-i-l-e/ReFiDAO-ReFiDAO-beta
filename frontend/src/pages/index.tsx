import { NextSeo } from 'next-seo';
import Layout from '@/layouts/_layout';
import type { NextPageWithLayout } from '@/types';

const EmptyPage: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="Empty"
        description="Empty"
      />
    </>
  );
};

EmptyPage.getLayout = function getLayout(page) {
  return (
    <Layout contentClassName="flex items-center justify-center">
      {page}
    </Layout>
  );
};

export default EmptyPage;
