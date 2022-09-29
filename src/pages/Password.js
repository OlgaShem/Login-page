import Button from '../components/Button';
import Input from '../components/Input';
import Poster from '../components/Poster';
import password from '../img/Password.svg'
import { Link } from 'react-router-dom';

const Password = () => {
  return (
    <section className='container'>
      <Poster
        url={password}
        alt="login"
      />
      <h1 class="title">Forgot Password</h1>
      <form>
        <Input className="input input_login" placeholder="example@email.com"/>
        <div class="btn-block">
          <Button className="btn" type="reset" name="Reset"/>
        </div>
      </form>
      <div className="text-block">
        <span className="simple-text">Already have an account? </span>
        <Link className="link" to="/">
            Login here
        </Link>
      </div>
    </section>
  );
};
export default Password;
