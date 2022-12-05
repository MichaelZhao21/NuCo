import Image from 'next/image';
import Link from 'next/link';

import { initializeApp } from 'firebase/app';
import { getFirestore, query, collection, where, getDocs, addDoc } from 'firebase/firestore';
import firebaseConfig from '../../config.json';
import { useState } from 'react';
import { useRouter } from 'next/router';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Home() {
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const router = useRouter();

    const newUser = async () => {
        if (password != passwordAgain) {
            setError('Passwords do not match!');
            return;
        }

        await addDoc(collection(db, 'users'), {
            username,
            password,
            role: 'user',
        });

        router.push('/admin');
    };

    return (
        <div style={{ position: 'absolute', zIndex: -100, width: '100vw', height: '100vh' }}>
            <Image
                src="/background.png"
                fill
                alt="background"
                style={{ backgroundSize: 'contain', zIndex: -100 }}
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
                <h1 style={{ fontSize: '5rem' }}>Add a User</h1>
                <div>
                    <label style={{ marginRight: '10.4rem', fontSize: '2rem' }}>Username:</label>
                    <input
                        type="text"
                        style={{ fontSize: '2rem' }}
                        onChange={(v) => {
                            setUsername(v.target.value);
                        }}
                    />
                    <br />
                    <div style={{ height: '1rem' }}></div>
                    <label style={{ marginRight: '10.4rem', fontSize: '2rem' }}>Password:</label>
                    <input
                        type="password"
                        style={{ fontSize: '2rem' }}
                        onChange={(v) => {
                            setPassword(v.target.value);
                        }}
                    />
                    <br />
                    <div style={{ height: '1rem' }}></div>
                    <label style={{ marginRight: '2rem', fontSize: '2rem' }}>
                        Retype Password:
                    </label>
                    <input
                        type="password"
                        style={{ fontSize: '2rem' }}
                        onChange={(v) => {
                            setPasswordAgain(v.target.value);
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
                <button onClick={newUser}>Add User</button>
                <p style={{ color: '#B70000' }}>{error}</p>
            </div>
        </div>
    );
}
