import React, { useState } from 'react';
import Button from '../base/Button';
import Card from '../base/Card';
import FloatButton from '../base/FloatButton';
import Logo from '../base/Logo';
import Textbox from '../base/Textbox';
import Secure from '../assets/icons8-security-lock-96.png';
import User from '../assets/icons8-user-96.png';
import Linker from '../base/Linker';
import Navbar from '../components/Navbar';
import Selector from '../base/selector';
import StateBar from '../base/StateBar';
import Footer from '../components/Footer.jsx';

const Landing = () => {
  const [text, setText] = useState('');
  let [value, setValue] = useState(1);

  return (
    <div>
      <Navbar />
      <Navbar isWhite={true} />
      <Logo isWhite={true} />
      <Logo />
      <div>
        <Linker value="Linker" />
        <Linker value="Linker" isWhite={true} />
      </div>
      <div
        style={{
          width: '420px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '10px 0',
        }}
      >
        <div style={{ width: '200px' }}>
          <Button value="Iniciar Sesión" />
        </div>
        <div style={{ width: '200px' }}>
          <Button
            value="Crear Cuenta"
            isPrincipal={true}
            handleClick={alert.bind(this, text)}
          />
        </div>
      </div>

      <div
        style={{
          width: '420px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '10px 0',
        }}
      >
        <div style={{ width: '200px' }}>
          <Button value="Iniciar Sesión" isWhite={true} />
        </div>
        <div style={{ width: '200px' }}>
          <Button
            value="Crear Cuenta"
            isPrincipal={true}
            isWhite={true}
            handleClick={alert.bind(this, text)}
          />
        </div>
      </div>

      <div style={{ width: '420px', margin: '10px 0' }}>
        <Card>
          <h2 className="text__h2">Prueba</h2>
          <p className="text__p">prueba</p>
        </Card>
      </div>

      <div
        style={{
          width: '420px',
          height: '300px',
          margin: '10px 0',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <Textbox
          title="Correo Electrónico *"
          placeholder="ej: usuario@ejemplo.com"
          handleChange={setText.bind(this)}
          alt="xd"
          img={User}
        />
        <Textbox
          title="Contraseña *"
          placeholder="*********"
          handleChange={setText.bind(this)}
          alt="xd"
          img={Secure}
          isPassword={true}
        />
        <Textbox
          title="Contraseña *"
          placeholder="*********"
          handleChange={setText.bind(this)}
        />
        <Textbox
          title=""
          placeholder="*********"
          handleChange={setText.bind(this)}
        />
      </div>

      <FloatButton value="Esto es una prueba" />

      <div style={{ width: '420px', margin: '0 0 10px 0' }}>
        <Selector value="nuevo elemento" />
      </div>

      <div style={{ margin: '10px 0' }}>
        <div style={{ width: '420px', margin: '0 0 10px 0' }}>
          <Button value="continue" handleClick={() => setValue((value += 1))} />
        </div>

        <StateBar length={3} actual={value} />
      </div>

      <div>
        <Footer list={['Políticas de privacidad']} />
      </div>
    </div>
  );
};

export default Landing;
