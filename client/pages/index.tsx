import Image from 'next/image';
import Link from 'next/link';

import { initializeApp } from 'firebase/app';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import firebaseConfig from '../config.json';
import { useState } from 'react';
import { useRouter } from 'next/router';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Home() {
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const login = async () => {
        const q = query(collection(db, 'users'), where('username', '==', username));
        const querySnapshot = await getDocs(q);
        const user = querySnapshot.docs[0];

        if (user == null) {
            setError('Invalid username!');
            return;
        }

        if (password != user.get('password')) {
            setError('Invalid password!');
            return;
        }

        router.push(`/user?username=${username}`);
    };

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
                    <input
                        type="text"
                        style={{ fontSize: '2rem' }}
                        onChange={(v) => {
                            setUsername(v.target.value);
                        }}
                    />
                    <br />
                    <div style={{ height: '1rem' }}></div>
                    <label style={{ marginRight: '2rem', fontSize: '2rem' }}>Password:</label>
                    <input
                        type="password"
                        style={{ fontSize: '2rem' }}
                        onChange={(v) => {
                            setPassword(v.target.value);
                        }}
                    />
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
                <button onClick={login}>Login</button>
                <p style={{ color: '#B70000' }}>{error}</p>
            </div>
        </div>
    );
}
