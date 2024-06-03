import React from 'react';
import supabase from '../services/supabase.js';

function Match() {
    // Function to add a new user to the 'users' table
    const addUser = async () => {
        const { data, error } = await supabase
            .from('users')
            .insert([
                { email: 't@example.com', school: 'Test School' } // Modify with desired default or test values
            ]);

        if (error) {
            console.error('Error inserting new user:', error.message);
        } else {
            console.log('User created successfully:', data);
        }
    };

    return (
        <div>
            Match
            <button onClick={addUser}>Create New User</button>
        </div>
    );
}

export default Match;
