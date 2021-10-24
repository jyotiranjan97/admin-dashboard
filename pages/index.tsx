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
    <div className="flex flex-col items-center min-h-screen py-4 overflow-auto font-sans">
      <Head>
        <title>Admin UI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Admin UI for an awsome Startup. Built with Next.JS and Tailwind CSS"
        />
      </Head>
      <h2
        className={
          'text-3xl font-semibold font-sans w-11/12 lg:w-3/4 md:w-5/6 ' +
          'justify-start text-purple-600 ' +
          'mb-2'
        }
        id="title"
      >
        Admin UI
      </h2>
      <main
        className={
          'flex flex-col items-center justify-center lg:w-3/4 md:w-5/6 w-11/12 flex-1 text-center'
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
