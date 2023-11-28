class AuthService {

    static async authenticate(auth) {
        try {
            const response = await fetch('/users.json');
    
            if (!response.ok) {
                throw new Error(`Failed to fetch users`);
            }
        
            const userData = await response.json();
            const authData = JSON.parse(auth);
        
            const user = userData.find(user => user.username == authData.username);
        
            if (!user || user.password !== authData.password) {
                return false;
            }
        
            const token = Math.random().toString();
            user.token = token;
        
            return user;
        } catch (error) {
            console.error('Error fetching cart data:', error);
            throw error;
        }
    }

}

export default AuthService;