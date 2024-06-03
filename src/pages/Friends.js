import React, { useState, useEffect } from 'react';
import supabase from '../services/supabase'; // Ensure this path is correct

function Friends() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [schoolName, setSchoolName] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (!schoolName) return;

        const fetchUsersBySchool = async () => {
            setLoading(true);
            setError(null);
            setUsers([]); // Clear previous users before a new search

            try {
                const { data: schoolData, error: schoolError } = await supabase
                    .from('schools')
                    .select('id')
                    .ilike('name', schoolName)
                    .single();

                if (schoolError) throw schoolError;
                if (!schoolData) {
                    setError('Sorry, no users found at the specified school.');
                    return;
                }

                const { data: userData, error: userError } = await supabase
                    .from('users')
                    .select('*')
                    .eq('school_id', schoolData.id)
                    .limit(10);

                if (userError) throw userError;
                if (userData.length === 0) {
                    setError('Sorry, no users found at the specified school.');
                    return;
                }

                setUsers(userData);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('No School Found, Try Again');
            } finally {
                setLoading(false);
            }
        };

        fetchUsersBySchool();
    }, [schoolName]);

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the form from causing a page reload
        setSchoolName(search); // Trigger the useEffect to run the two-step query
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search for schools..."
                    style={{ width: '50%', padding: '10px', margin: '20px 0' }}
                />
                <button type="submit">Search</button>
            </form>
            {loading ? <div>Loading...</div> : error ? <div>{error}</div> : (
                <div>
                    <h1>Users at {schoolName}</h1>
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>{user.email} - {user.school_id}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Friends;
