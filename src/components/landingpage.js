import React, { Component } from 'react';
import { Grid, Cell, Button, ProgressBar } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Interests from './interests';
import Idioms from './idioms';
import Activities from './activities';
import Form from './form';
import Footer from './footer';
import Profile from './profile';
import ScrollableAnchor from 'react-scrollable-anchor';
import Projects from './projects';




class Landing extends Component {
  onSubmit = fields =>{
    console.log("App comp got: ", fields);
  };



  render() {
    return(
      <wrapper>
        <ScrollableAnchor id={'section1'}>
          <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
              <Cell col={12}>
                <Profile />
                
                <div className="banner-text">
                  <h1>Chuks Ricardo Iloegbunam</h1>
                  <hr/>
                  

                  <a href="./curriculo.pdf" download="curriculo.pdf" onclick="this.href='curriculo.pdf';">
                  <Button raised>Baixar <i>curriculo.pdf</i></Button>
                  </a>              

                  <div className="social-links">
                  {/* Github */}
                  <a href="https://github.com/ChuksII" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>

                  
                </div>
              </div>
            </Cell>
          </Grid>
        </div>
      </ScrollableAnchor>



      <ScrollableAnchor id={'section2'}>
        <div>
          <Grid>
            <Cell col={4}>
              <div style={{textAlign: 'center'}}>
                <Profile />
              </div>

              <h2 style={{paddingTop: '2em'}}>Chuks Ricardo Iloegbunam</h2>
              <h4 style={{color: 'grey'}}>Programador (tentando ser...)</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <p>Olá, sou Chuks. estudante, nasci em Franca– SP, e atualmente estou morando em Cornélio Procópio – PR. :(</p>
            
              </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2>Interesses</h2>
              <Interests
                schoolDescription="Desenvolvimento web"
              />
              <Interests
                schoolDescription="Mineração de dados"
              />
              <Interests
                schoolDescription="Aplicativos Mobile"
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Idiomas</h2>
              <Idioms
                schoolName="Português"
                schoolDescription="Nativo"       
              />
              <Idioms
                schoolName="Inglês"
                schoolDescription="Avançado"       
              />       
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Formação</h2>
              <Education
                startYear={2014}
                schoolName="UTFPR - Universidade Tecnológica Federal do Paraná"
                schoolDescription="Bararelado em Engenharia de Software"
              />
              <Education
                startYear={2010}
                endYear={2012}
                schoolName="E.E. Dr. Carlos Augusto de Freitas Villalva Júnior"
                schoolDescription="Ensino Médio"              
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Atividades Desenvolvidas</h2>
              <Activities
                schoolDescription="Desenvolvimento de Sistemas Web"  
              />
              <Activities
                schoolDescription="Desenvolvimento de Sistemas Mobile Nativo"  
              />
              <Activities
                schoolDescription="Desenvolvimento em Java"  
              />            
              <Activities
                schoolDescription="Desenvolvimento em C++"  
              />
          </Cell>
        </Grid>
      </div>
      </ScrollableAnchor>      
      
      <section>
      <Grid className="landing-alt-color">
        <Cell col={12}>
          <h2>Skills</h2>
          <h5>Esssas são algumas das minhas skills, mas não me julgue hein :/</h5>
          <Skills
            skill="javascript"
            progress={70}
          />
          <Skills
            skill="HTML/CSS"
            progress={80}
          />
          <Skills
            skill="React"
            progress={60}
          />
          <Skills
            skill="NodeJS"
            progress={50}
          />          
          <Skills
            skill="MongoDB"
            progress={50}
          />
          
          <Skills
            skill="Java"
            progress={65}
          />
          <Skills
            skill="C++"
            progress={69}
          />
        </Cell>
      </Grid>      
      </section>
      
      <section>
        <div className="landinga-alt-color2">
          <h1>Mais Informações</h1>
          <Grid className="contact-grid">
            <Cell col={6}>
              <h3>Biografia</h3>
              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Sou de Franca-Sp (Mais conhecido como a terra do calçado) morei lá até meus 15 anos, dai decidi me mudar pra São Paulo morei lá até meus 19 anos (eu acho não sou muito bom com datas enfim...). Em 2014 iniciei o curso superior de Engenharia de Software na UTFPR, onde eu fiz um estágio na própria Universidade e até comecei uma iniciação cientifica em mineração de dados (infelizmente não foi pra frente :/). Atualmente eu sou o diretor de RH da Unect jr e eu acho que é isso...</p>
            </Cell>
            <Cell col={6}>
              <h3>Profissão</h3>
              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Desde a pré-adolecencia eu tive contato com computadores mas nunca foi uma obsessão minha, eu preferia jogar futebol sabe... Mas em 2013 eu tive meu 1° smartphone android e as coisas mudaram, todas as possibilidades de customização que o Android me ofereciam acabou fazendo com que eu ficasse apaixonado por tecnologia: troca de kernels, overclocking, custom Roms, e com isso tudo alguns soft e hard brick heheh. Bem a partir dai o meu interesse por outras tecnolôgias cresceu e bem hoje eu estou aqui...</p>
            </Cell>
          </Grid>        
        </div>
        </section>
        
        <section>
        <Grid className="landing-alt-color">
        <Cell col={12}>
        <h1>Contato</h1>
        <Form onSubmit={fields => this.onSubmit(fields)}/>
        </Cell>
        </Grid>
       
      </section>

      <section>
      <h1>Projetos</h1>
        <Projects />


      </section>
      <section>
        <Footer />
      </section>

      </wrapper>
    )
  }
}

export default Landing;
