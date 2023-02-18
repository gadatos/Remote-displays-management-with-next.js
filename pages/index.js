import { useRouter } from 'next/router';

export default function Home() {
  const HandleOnclick = () => {
    for (let i = 1; i < 6; i++) {
      window.open(`   /display/${i}`);
    }
  };

  const router = useRouter();
  return (
    <>
      <div className=" bg-gray-100 min-h-screen">
        <div className="w-full h-screen flex flex-col justify-center items-center">
          {' '}
          <div className="grid grid-row-2 gap-3">
            <button
              target="_blank"
              onClick={() => {
                router.push('admin');
              }}
              type="submit"
              className="cursor-pointer rounded-lg button bg-purple-700 hover:bg-purple-500 text-white font-bold px-4  py-4"
            >
              {' '}
              Panel Administracyjny
            </button>
            <button
              onClick={() => HandleOnclick()}
              type="submit"
              className="cursor-pointer rounded-lg button bg-red-700 hover:bg-red-500 text-white font-bold px-4  py-4"
            >
              {' '}
              Otwórz Karty
            </button>
          </div>
        </div>{' '}
      </div>
    </>
  );
}
