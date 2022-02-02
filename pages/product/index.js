import React from 'react';
import Link from 'next/link'

const Product = ({ productId = 100 }) => {
    return <div>
        <ul>
            <li><Link href='/product/1'><a>Product 1</a></Link></li>
            <li><Link href='/product/2'><a>Product 2</a></Link></li>
            <li><Link href='/product/3'><a>Product 3</a></Link></li>
            <li><Link href={`/product/${productId}`}><a>Product {productId}</a></Link></li>
        </ul>
    </div>;
};

export default Product;
