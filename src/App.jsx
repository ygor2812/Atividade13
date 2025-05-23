// App.jsx
import { AuthProvider } from './context/AuthContext'; 
import Rotas from './routes';

export default function App() {
    return (
        <AuthProvider>
            <Rotas />
        </AuthProvider>
    );
}