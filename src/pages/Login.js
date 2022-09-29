import { Link } from 'react-router-dom';
import Button  from '../components/Button';
import Input from '../components/Input';
import Poster from '../components/Poster';
import login from '../img/Login.svg'

const Login = () => {
  return (
    <section className="container">
      <Poster
        url={login}
        alt="login"
      />
      <h1 className="title">Welcome Back!</h1>   
      <form>
        <Input className="input input_login" placeholder="example@email.com"/>
        <Input className="input input_pass" placeholder="password"/>
        <div className="link-block">
          <Link className="link" to="/password">
            Forgot password?
          </Link>
        </div>
        <Button className="btn" type="submit" name="Log in"/>
      </form>
      <div class="social-block">
        <span className="simple-text"> Or connect with social</span>
        <div class="btn-block">
          <Button className="btn btn_light-blue" url="" name="Facebook"/>
          <Button className="btn btn_red"  url="" name="Google"/>
        </div>
      </div>
    </section>
  );
};
export default Login;