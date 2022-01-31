import { useRouter } from 'next/router';

function Doc() {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log('params', params);
    return <div>
        <h1>Docs home page </h1>
        {
            params.map((param, index) => <div key={index}>{param}</div>)
        }
    </div>
}

export default Doc;