import FacebookIcon from '../Icons/FacebookIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';
import GithubIcon from '../Icons/GithubIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import GoogleIcon from '../Icons/GoogleIcon';
import TwitterIcon from '../Icons/TwitterIcon';

function Footer() {
  return (
    
    <div class="container my-5">
    
    <footer className="bg-light text-center text-white">
      <div className="container p-4 pb-0">
      <section className="mb-4">
      <a className="btn btn-primary btn-floating m-1" style={{borderRadius: '100px',backgroundColor:'#3b5998'}} 
      href="https://www.facebook.com"><FacebookIcon /></a>

      <a className="btn btn-primary btn-floating m-1" style={{borderRadius: '50%', backgroundColor:'#55acee'}} 
      href="https://www.twitter.com"><TwitterIcon /></a>

      <a className="btn btn-primary btn-floating m-1" style={{borderRadius: '50%', backgroundColor:'#dd4b39'}} 
      href="https://www.google.com"><GoogleIcon /></a>

     <a className="btn btn-primary btn-floating m-1" style={{borderRadius: '50%', backgroundColor:'#ac2bac'}} 
      href="https://www.instagram.com/"><InstagramIcon/></a>
      
      <a className="btn btn-primary btn-floating m-1" style={{borderRadius: '50%', backgroundColor:'#0082ca'}} 
      href="https://www.linkedin.com/"><LinkedinIcon /></a>

      <a className="btn btn-primary btn-floating m-1" style={{borderRadius: '50%', backgroundColor:'#333333'}} 
      href="https://www.gitHub.com/"><GithubIcon/></a>

        </section>
      </div>
      <div className="text-center p-3" style={{backgroundColor: '#023c59', height: '50px' }}>
        © 2022 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/"> Developer Carlos Figueroa</a>
      </div>
    </footer>
      
    </div>
  );
}


export default Footer;