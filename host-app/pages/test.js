import dynamic from 'next/dynamic';
const Button = dynamic(() => import("remote/Button"), {
    ssr: false,
});

const Test = () => {
    return (
        <div>
            <div>Test Module Federation</div>
            <Button />
        </div>
    )
}

export default Test;