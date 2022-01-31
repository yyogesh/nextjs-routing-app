import React from 'react';
import { useRouter } from 'next/router';

const ProductDetail = () => {
    const router = useRouter();
    const { productId } = router.query;
    return <div>ProductDetail page {productId}</div>;
};

export default ProductDetail;
