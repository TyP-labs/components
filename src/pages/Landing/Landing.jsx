import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import Button from '../../base/Button';
import Teacher from '../../assets/Teaching-amico.svg';
import Navbar from '../../components/Navbar';

import Card1 from '../../assets/Science-amico.svg';
import Card2 from '../../assets/Work time-amico.svg';
import Card3 from '../../assets/Book lover-amico.svg';

import Square1 from '../../assets/icons8-literature-96-white.png';
import Square2 from '../../assets/icons8-security-lock-96-white.png';
import Square3 from '../../assets/icons8-family-two-men-96-white.png';
import Square4 from '../../assets/icons8-secured-letter-96-white.png';

import Square5 from '../../assets/icons8-user-96.png';
import Square6 from '../../assets/icons8-security-lock-96.png';
import Square7 from '../../assets/icons8-reminder-96.png';
import InfoCard from './InfoCard';
import FloatingCard from './FloatingCard';
import Square from './Square';
import SelectionSquare from './SelectionSquare';

import SL1 from '../../assets/icons8-database-view-96.png';
import SL2 from '../../assets/icons8-design-96.png';
import SL3 from '../../assets/icons8-money-box-96.png';
import ScreenView from './ScreenView';

const Landing = () => {
  const history = useHistory();

  const url = useCallback((path) => {
    history.push(path);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing">
      <Navbar isWhite={true} />
      <div className="landing__container">
        <header className="landing__header">
          <div className="landing__header-text">
            <div className="landing__header-text--size">
              <h3 className="text__h3--white" style={{ margin: '0 0 10px 0' }}>
                Potenciamos la educación del futuro.
              </h3>
              <h1 className="text__h1--white">
                Gestiona tu comunidad educativa de la forma mejor manera.
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
          <h3 className="text__h3--black">
            Servicios de última tecnología al menor costo
          </h3>
          <h2 className="text__h1" style={{ fontWeight: 'bolder' }}>
            Automatiza y simplifica tareas
          </h2>
          <div className="landing__section-text-p">
            <p className="text__h3">
              Brinda una interfaz amigable y centrada en el individuo. Olvidate
              de funciones innecesarias y personaliza la gestión al máximo. Da
              el paso que tu comunidad necesita.
            </p>
          </div>
        </div>
      </div>

      <div className="landing__section--gray">
        <div className="landing__section--gray-text">
          <FloatingCard
            name="Joaquín P"
            division="2A - TM"
            imgCenter={Square5}
            leftText="Familiares"
            rightText="Asignaturas"
            rightImg={Square1}
            leftImg={Square3}
            leftTopImg={Square6}
            rigthBottomImg={Square7}
          />
          <div className="landing__section--gray-text-items">
            <h2 className="text__h2" style={{ fontWeight: 'bolder' }}>
              Gestiona mejor y más fácil a tus estudiantes.
            </h2>
            <p className="text__h6">
              Centraliza la información de divisiones, clases, profesores y
              estudiantes de forma segura y accede a ellas las 24h. Notifica a
              familiares, alumnos o profesores de forma masiva o individual,
              reduce errores y aumenta la satisfacción de toda tu comunidad.
            </p>
            <div className="landing__header-text-buttons">
              <div>
                <Button
                  value="Empezar Ahora"
                  handleClick={url.bind(this, '/crear-cuenta')}
                  isPrincipal={true}
                />
              </div>
              <div>
                <Button
                  value="Saber más"
                  handleClick={url.bind(this, '/crear-cuenta')}
                  isPrincipal={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing__selection">
        <div className="landing__selection-container">
          <div className="landing__section-text">
            <h3 className="text__h3--black">
              Servicios de última tecnología al menor costo
            </h3>
            <h2 className="text__h1" style={{ fontWeight: 'bolder' }}>
              Por qué elegirnos para tu comunidad?
            </h2>
          </div>

          <div className="landing__selection-items">
            <SelectionSquare title="Servicios Operativos 24/7" img={SL1} />
            <SelectionSquare
              title="Servicios de mensajería 24/7"
              img={Square4}
            />
            <SelectionSquare title="Simplicidad y Diseño" img={SL2} />
            <SelectionSquare
              title="Seguridad y Protección de datos"
              img={Square2}
            />
            <SelectionSquare
              title="Servicios económicos y de alta calidad"
              img={SL3}
            />
          </div>

          <div className="landing__selection-screen-view">
            <ScreenView/>
            <div className="landing__section--gray-text-items">
            <h2 className="text__h2" style={{ fontWeight: 'bolder' }}>
            Bienvenidos al mejor entorno de trabajo.
            </h2>
            <p className="text__h6">
            Brinda a estudiantes, padres, profesores y administradores un entorno 
            de trabajo de última generación adaptado a sus necesidades. 
            Sin vueltas ni comlicaciones.
            </p>
            <div className="landing__header-text-buttons">
              <div>
                <Button
                  value="Empezar Ahora"
                  handleClick={url.bind(this, '/crear-cuenta')}
                  isPrincipal={true}
                />
              </div>
              <div>
                <Button
                  value="Saber más"
                  handleClick={url.bind(this, '/crear-cuenta')}
                  isPrincipal={false}
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="landing__section" style={{ margin: '100px 0' }}>
        <div className="landing__section-text">
          <h3 className="text__h3--black">
            Servicios de última tecnología al menor costo
          </h3>
          <h2 className="text__h1" style={{ fontWeight: 'bolder' }}>
            Ramifica y distribuye tu Comunidad
          </h2>
          <div className="landing__section-text-p">
            <p className="text__h3">
              No importa que tan grande o pequeña sea tu comunidad, nosotros nos
              adaptamos a cualquier espacio. Distribuye divisiones, profesores y
              estudiantes, y crea clases puntuales para cada área.
            </p>
          </div>
        </div>
      </div>

      <div className="landing__section--gray">
        <div className="landing__section--gray-text">
          <div className="landing__section--gray-text-items">
            <h2 className="text__h2" style={{ fontWeight: 'bolder' }}>
              Delega tareas y simplifica la gestión de datos.
            </h2>
            <p className="text__h6">
              Distribuye la responsabilidad entre varios administrativos para
              encargarse del manejo del flujo de datos de toda la comunidad,
              permitéles crear notificaciones, divisiones, clases y modificar la
              estructura de la comunidad.
            </p>
            <div className="landing__header-text-buttons">
              <div>
                <Button
                  value="Empezar Ahora"
                  handleClick={url.bind(this, '/crear-cuenta')}
                  isPrincipal={true}
                />
              </div>
              <div>
                <Button
                  value="Saber más"
                  handleClick={url.bind(this, '/crear-cuenta')}
                  isPrincipal={false}
                />
              </div>
            </div>
          </div>

          <div className="landing__section--gray-text-pyramid">
            <div className="landing__section--gray-text-pyramid-row1">
              <div></div>
            </div>

            <div className="landing__section--gray-text-pyramid-row2">
              <div></div>
              <div></div>
            </div>

            <div className="landing__section--gray-text-pyramid-row3">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
