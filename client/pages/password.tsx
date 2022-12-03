import Image from 'next/image';
import Link from 'next/link';

export default function Password() {
    return (
        <div style={{ position: 'absolute', zIndex: -100, width: '100vw', height: '100vh' }}>
            <Image
                src="/background.png"
                fill
                alt="background"
                style={{ backgroundSize: 'contain', objectFit: 'cover', zIndex: -100 }}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                <h1 style={{ fontSize: '5rem'}}>Unfortunate :(</h1>
            </div>
        </div>
    );
}
