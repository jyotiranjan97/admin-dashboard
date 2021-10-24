import { useState } from 'react';
import Head from 'next/head';
import type { GetServerSideProps, NextPage } from 'next';
import Main from '@/components/Main';
import { fetchAllUsersFromAPI } from '@/libs/fetchAPIData';
import { User } from '@/types/user';

type PageProps = {
  allUsers: User[];
};

const Home: NextPage<PageProps> = ({ allUsers }: PageProps) => {
  var [totalUsers, setTotalUsers] = useState<User[]>(allUsers);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 font-sans">
      <Head>
        <title>Admin UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2
        className="text-xl font-semibold font-sans w-full justify-start"
        id="title"
      >
        Admin UI
      </h2>
      <main
        className={
          'flex flex-col items-center justify-center w-10/12 flex-1 px-20 text-center'
        }
        id="app"
      >
        <Main data={totalUsers} setData={setTotalUsers} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const allUsers = await fetchAllUsersFromAPI();
  return {
    props: {
      allUsers,
    },
  };
};

export default Home;
