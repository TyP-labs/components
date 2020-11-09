import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Button from '../base/Button';
import Teacher from '../assets/Teaching-amico.svg';
import Navbar from '../components/Navbar';

import Card1 from '../assets/Science-amico.svg';
import Card2 from '../assets/Work time-amico.svg';
import Card3 from '../assets/Book lover-amico.svg';

import Square1 from '../assets/icons8-literature-96-white.png';
import Square2 from '../assets/icons8-security-lock-96-white.png';
import Square3 from '../assets/icons8-family-two-men-96-white.png';
import Square4 from '../assets/icons8-secured-letter-96-white.png';

import Square5 from '../assets/icons8-user-96.png';

/**
 * InfoCard Landing UI Component
 * @param {string} title card title string
 * @param {string} paragraph card paragraph string
 * @param {img} img card img
 */
const InfoCard = (props) => {
  const { title, paragraph, img } = props;

  return (
    <div className="info-card">
      <div className="info-card__container">
        <img src={img} alt="info card" />
        <h3 className="text__h3--black">{title}</h3>
        <p className="text__p--black" style={{ margin: '20px 0 0 0' }}>
          {paragraph}
        </p>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
};

const Square = (props) => {
  const { img } = props;

  return (
    <div className="square">
      <img src={img} alt="icon" className="square__img" />
    </div>
  );
};


const FloatingCard = props => {

  const { name, division, imgCenter, leftText, rightText, leftImg, rightImg, leftTopImg, rigthBottomImg } = props

  return(
    <div className="floating-card">
      <div className="floating-card__circle">
        <div className="floating-card__square">
            <img src={imgCenter} alt="icon" className="floating-card__square-img"/>
            <h3 className="text__h3--black">{name}</h3>
            <span className="text__span">{division}</span>
        </div>
      </div>

      <div className="floating-card__cards">
        <div className="floating-card__cards-item1">
          <div className="floating-card__cards__item--green">
            <img src={leftImg} alt="icon" className="floating-card__cards__item--img"/>
            <span className="text__h3--white">{leftText}</span>
          </div>
        </div>

        <div className="floating-card__cards-item2">
          <div className="floating-card__cards__item--violet">
            <img src={rightImg} alt="icon" className="floating-card__cards__item--img"/>
            <span className="text__h3--white">{rightText}</span>
          </div>
        </div>
      </div>

      <div className="floating-card__icons">
        <div className="floating-card__square--item1">
          <div className="floating-card__square--white">
            <img src={leftTopImg} alt="icon" className="floating-card__square--img"/>
          </div>
        </div>

        <div className="floating-card__square--item2">
          <div className="floating-card__square--white">
            <img src={rigthBottomImg} alt="icon" className="floating-card__square--img"/>
          </div>
        </div>
      </div>
    </div>
  )
}

const Landing = () => {
  const history = useHistory();

  const url = (path) => {
    history.push(path);
  };

  return (
    <div className="landing">
      <Navbar isWhite={true} />
      <div className="landing__container">
        <header className="landing__header">
          <div className="landing__header-text">
            <div className="landing__header-text--size">
              <h3 className="text__h3--white" style={{ margin: '0 0 10px 0' }}>
                Potenciá la educación del futuro.
              </h3>
              <h1 className="text__h1--white">
                Gestiona tu comunidad educativa y los canales de comunicación.
              </h1>
            </div>

            <div className="landing__header-text-buttons">
              <div>
                <Button
                  value="Empezar Ahora"
                  handleClick={url.bind(this, '/crear-cuenta')}
                  isPrincipal={true}
                  isWhite={true}
                />
              </div>
              <div>
                <Button
                  value="Saber más"
                  handleClick={url.bind(this, '/crear-cuenta')}
                  isPrincipal={false}
                  isWhite={true}
                />
              </div>
            </div>
          </div>

          <img src={Teacher} className="landing__header-img" />
        </header>

        <div className="landing__container-cards">
          <InfoCard
            title="Explota el poder de los datos"
            paragraph="Entiende de forma sencilla, donde tu comunidad presenta problemas, donde sobresale y que aspectos mejorar y utilízalos para potenciar tu forma de enseñar."
            img={Card1}
          />
          <div className="landing__container-cards--up">
            <InfoCard
              title="Mantén a tu comunidad onLine"
              paragraph="Trabaja en tiempo real y envía notificaciones en cualquier momento del día de forma ágil y sencilla."
              img={Card2}
            />
          </div>
          <InfoCard
            title="Crea historiales únicos"
            paragraph="Sigue el desempeño académico de cada individuo, crea observaciones personalizadas y permite a su familia acceder a sus calificaciones"
            img={Card3}
          />
        </div>

        <div className="landing__squares">

          <div className="landing__squares-item1">
            <Square img={Square1} alt="icon" />
          </div>

          <div className="landing__squares-item2">
            <Square img={Square2} alt="icon" />
          </div>

          <div className="landing__squares-item3"> 
            <Square img={Square3} alt="icon" />
          </div>

          <div className="landing__squares-item4">
            <Square img={Square4} alt="icon" />
          </div>

        </div>
      </div>

      <div className="landing__section">
          <div className="landing__section-text">
            <h3 className="text__h3--black">Servicios de última tecnología al menor costo</h3>
            <h2 className="text__h1" style={{fontWeight: 'bolder'}}>Automatiza y simplifica tareas</h2>
            <div className="landing__section-text-p">
              <p className="text__h3">Brinda una interfaz amigable y centrada en el individuo. Olvidate de funciones innecesarias y personaliza la gestión al máximo. Da el paso que tu comunidad necesita.</p>
            </div>
          </div>
      </div>

      <div className="landing__Section--gray">
        <div>
          <FloatingCard name="Joaquín Perez" division="2A - TM" imgCenter={Square5} leftText="Familiares" rightText="Asignaturas" rightImg={Square1} leftImg={Square3}/>
        </div>
      </div>

    </div>
  );
};

export default Landing;