import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import type { GetServerSideProps, NextPage } from 'next';
import Main from '@/components/Main';
import { fetchAllUsersFromAPI } from '@/libs/fetchAPIData';
import { User } from '@/types/user';
import GitHubIcon from '@/components/UI/Icons/GitHubIcon';

type PageProps = {
  allUsers: User[];
};

const Home: NextPage<PageProps> = ({ allUsers }: PageProps) => {
  var [totalUsers, setTotalUsers] = useState<User[]>(allUsers);

  return (
    <div className="flex flex-col items-center min-h-screen pt-4 overflow-auto font-sans">
      <Head>
        <title>Admin UI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Admin UI for an awsome Startup. Built with Next.JS and Tailwind CSS"
        />
      </Head>

      {/** Title */}
      <h2
        className={'w-11/12 lg:w-3/4 md:w-5/6 justify-start mb-2 relative'}
        id="title"
      >
        <span className="mr-2">
          <Image
            src={require('../public/admin.png')}
            height={25}
            width={25}
            alt=""
          />
        </span>
        <span className="text-3xl font-semibold font-sans text-purple-600">
          Admin UI
        </span>
        {/** Github Link */}
        <span
          className={
            'absolute right-0 h-10 w-10 p-2 rounded-full ' +
            'hover:bg-gray-100 cursor-pointer'
          }
          onClick={() =>
            window.open(
              'https://github.com/jyotiranjan97/admin-dashboard',
              '_blank',
              'noReferrer,noopener'
            )
          }
        >
          <GitHubIcon />
        </span>
      </h2>

      {/** Main */}
      <main
        className={
          'flex flex-col items-center justify-center lg:w-3/4 md:w-5/6 w-11/12 flex-1 text-center'
        }
        id="app"
      >
        <Main data={totalUsers} setData={setTotalUsers} />
      </main>

      {/** Footer */}
      <footer
        className="bg-purple-200 h-8 w-full flex justify-center"
        id="footer"
      >
        <span className="text-base font-medium p-1">
          Coding Challenge from{' '}
          <a
            href="https://www.geektrust.in/coding-problem/frontend/adminui"
            className="text-green-700 underline"
            target="_blank"
            rel="noReferrer noopener"
          >
            Geektrust
          </a>
        </span>
      </footer>
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
