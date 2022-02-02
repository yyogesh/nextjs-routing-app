import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/product');
  }
  return <div>
    <h1>Home</h1>
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
    <div>
      <Link href="/product">
        <a>Product</a>
      </Link>
    </div>
    <div>
      <button onClick={handleClick}>Place order</button>
    </div>
  </div>;
};

export default Home;
