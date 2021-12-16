import {Button} from 'react-bootstrap';
import './Home.css';
import AuthContext from '../store/auth-context';

function Home() {
    
    const ctx = useContext(AuthContext);
    return ( 
        <div className="home">
            <h1>
                Bem vindo a aplicação de Cadastro de Alunos
            </h1>
            <p><Button onClick={ctx.onLogin}>Login</Button></p>
        </div>
     );
}

export default Home;