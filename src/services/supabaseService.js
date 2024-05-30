import supabase from './supabase';

export const saveProfileToSupabase = async (profile) => {
    // Assuming 'users' table holds basic user info and 'profiles' table holds extended info
    const { data: user, error: userError } = await supabase
        .from('users')
        .upsert({
            id: profile.user_id,
            email: profile.email,
            school: profile.school,
        }, { returning: 'minimal' });

    if (userError) console.error('Error updating/creating user', userError);

    const { data: userProfile, error: profileError } = await supabase
        .from('profiles')
        .upsert({
            user_id: profile.user_id,
            profile_picture_url: profile.profilePic,
            banner_url: profile.banner,
            bio: profile.bio
        }, { returning: 'minimal' });

    if (profileError) console.error('Error updating/creating profile', profileError);
};
