import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from './Components/Input/Input';
import Button from './Components/Button/Button';
import Container from './Components/Container/Container';
import Section from './Components/Section/Section';
import { useState } from 'react';
import Balance from './Components/Balance/Balance';


const compoundInterest = (deposit, contribution, years, rate) => {
  //? Formula del interes Compueto
  let total = deposit
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1);
  };

  return Math.round(total)
};


function App() {

  const [balance, setBalance] = useState('');

  const handleSubmit = ( {deposit, contribution, years, rate } ) => {
    
    const val = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate));
    //console.log(val)

    setBalance(formatter.format(val))

  };

  //? Conviertiendo numeros a formato internacional de dolares
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  
  
  return (
    <>
      <Container>
        <Section>

          <Formik
            initialValues={{
              deposit: '',
              contribution: '',
              years: '',
              rate: ''
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
              deposit: Yup.number().required('Obligatorio').typeError('Debe ser un numero'),
              contribution: Yup.number().required('Obligatorio').typeError('Debe ser un numero'),
              years: Yup.number().required('Obligatorio').typeError('Debe ser un numero'),
              rate: Yup.number().required('Obligatorio').typeError('Debe ser un numero'),
            })}
          >

            <Form>
              <Input name="deposit" label="Deposito inicial" />
              <Input name="contribution" label="Contribucion anual" />
              <Input name="years" label="Años" />
              <Input name="rate" label="Interes Estimado" />
              <Button type='submit'>Calcular</Button>
            </Form>

          </Formik>
            {balance !== '' ? <Balance>Balance Final: {balance}</Balance> : null}
        </Section>
      </Container>
    </>
  )
};

export default App
