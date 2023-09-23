import './App.css'
import { cardComponent } from './components/cardComponent';

function App() {

  //cards img
  const ivImg = './src/assets/IV.png';
  const fbImg = './src/assets/Updateincomes.png';
  const dpImg = './src/assets/Dp.png';

  //cards title
  const ivTitle = "Infinity Vault";
  const fbTitle = "Familiar Budget";
  const dpTitle = "DpCalc";

  //cards text
  const ivText = "Um gerenciador de senhas poderoso que armazena senhas criptografadas em um cofre digital. Autopreenchimento de senhas, acesso offline e suporte a biometria são apenas algumas funções";
  const fbText = "API para registro de receitas e despesas em java feita para um dos challenges da Alura";
  const dpText = "Calculadora de desvio padrão para as aulas da UNISA, baseada na forma de cálculo do professor Glaucos";

  //cards link
  const ivLink = 'https://github.com/aetussilicon/InfinityV'
  const fbLink = 'https://github.com/aetussilicon/FamiliarBudget'
  const dpLink = 'https://github.com/aetussilicon/GlaucoDP'

  return (
    <>
      <body>
        <section id="apresentation">
          <img className="apresentationImage" src='./src/assets/me.jpg' alt='Foto de Artur' />
          <div className='apresentationDiv'>
            <h1 className='apresentationTitle'>Olá, me chamo Artur, Desenvolvedor Fullstack</h1>
            <p className='apresentationParagraph'>Sou desenvolvedor fullstack com vasto conhecimentos em
              tecnologias back e front-end, sendo elas: Java, Spring
              Framework, Python, JavaScript, HTML, CSS, ReactJS, MySQL.
            </p>
            <div className='socialButtons'>
              <a href='https://github.com/aetussilicon' target='_blank' rel="noopener noreferrer"><img src='./src/assets/SocialMedia/Github.png' alt='Github'/></a>
              <a href='https://www.linkedin.com/in/artur-olivr/' target='_blank' rel="noopener noreferrer"><img src='./src/assets/SocialMedia/Linkedin.png' alt='Linkedin'/></a>
              <a href='https://www.instagram.com/aetusartur/' target='_blank' rel="noopener noreferrer"><img src='./src/assets/SocialMedia/Instagram.png' alt='Instagram'/></a>            </div>
            <a href='./src/files/Currículo.pdf' download><button className='apresentationButton'>Baixar Currículo</button></a>
          </div>
          
        </section>
        <section id="projects">
          <h1 className='projectsTitle'>Projetos</h1>
          <div className='projectsCards'>
            {cardComponent({img: ivImg, title: ivTitle, text: ivText, link: ivLink})}
            {cardComponent({img: fbImg, title: fbTitle, text: fbText, link: fbLink})}
            {cardComponent({img: dpImg, title: dpTitle, text: dpText, link: dpLink})}
          </div>
        </section>
        <section id='footer'>
          <p>Desenvolvido por Artur Oliveira</p>
        </section>
      </body>
    </>
  );
}

export default App;
