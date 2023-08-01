import { getCars } from "@/app/lib/cars";
import { CarProps } from "@/types";
import CarsGrid from "@/components/cars/CarsGrid";
import { Suspense } from "react";

function Cars() {
  const cars: CarProps[] = getCars();
  return <CarsGrid cars={cars} />;
}

const CarsPage = () => {
  return (
    <>
      <div className=''>
        <div className='w-4/5 mx-auto text-center text-xl px-8 py-6 my-6 border-2 '>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            quo dicta dolorum id odit ab esse dolor saepe sed illo sunt
            doloribus consequatur facere sit nam, nulla ullam a magnam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            sunt nesciunt libero soluta perspiciatis reprehenderit molestias,
            impedit, molestiae placeat sit saepe beatae maiores tempora et
            dolores recusandae eveniet omnis expedita.
          </p>
        </div>
        <Suspense
          fallback={
            <p className='text-4xl text-center text-red-200'>Loading ...</p>
          }
        >
          <Cars />
        </Suspense>
      </div>
    </>
  );
};

export default CarsPage;
