import { Formik, Form } from 'formik'
import Input from './Components/Input/Input';
import Button from './Components/Button/Button';
import Container from './Components/Container/Container';
import Section from './Components/Section/Section';


function App() {

  const handleSubmit = () => {

  };
  
  

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
          >

            <Form>
              <Input name="deposit" label="Deposito inicial" />
              <Input name="contribution" label="Contribucion anual" />
              <Input name="years" label="Años" />
              <Input name="rate" label="Interes Estimado" />
              <Button>Calcular</Button>
            </Form>

          </Formik>

        </Section>
      </Container>
    </>
  )
};

export default App
