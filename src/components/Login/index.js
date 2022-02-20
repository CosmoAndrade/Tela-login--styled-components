import { Button, Div, Input } from '../../styles/login-styles';
import './index.css'



function Login() {
    return (
        <>
            <Div>
                <form>
                    <Input type="email" placeholder='Digite seu email' />
                    <Input type="password" placeholder='Digite sua senha' />

                    <Button
                        width="90%"
                        padding="10px"
                        mt="10px"
                        bg="magenta"
                        color='#fff'
                    >Entrar </Button>
                </form>

            </Div>

        </>
    );
}

export default Login;