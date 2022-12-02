import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div style={{ position: 'absolute', zIndex: -100, width: '100vw', height: '100vh' }}>
            <Image
                src="/background.png"
                fill
                alt="background"
                style={{ objectFit: 'cover', zIndex: -100 }}
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
                <h1 style={{ fontSize: '5rem' }}>Welcome to NuCo</h1>
                <div>
                    <label style={{ marginRight: '2rem', fontSize: '2rem' }}>Username:</label>
                    <input type="text" style={{ fontSize: '2rem' }} />
                    <br />
                    <div style={{ height: '1rem' }}></div>
                    <label style={{ marginRight: '2rem', fontSize: '2rem' }}>Password:</label>
                    <input type="password" style={{ fontSize: '2rem' }} />
                </div>
                <Link
                    href="/password"
                    style={{
                        textDecoration: 'underline',
                        color: '#DEDBFF',
                        marginLeft: '46.3%',
                        alignSelf: 'flex-start',
                        marginTop: '0.5rem',
                        marginBottom: '2rem',
                    }}
                >
                    Forgot Password?
                </Link>
                <button>Login</button>
            </div>
        </div>
    );
}
