import './App.css';
import StepForm1 from '../src/components/Step1/step-form1';
import StepForm2 from '../src/components/Step2/step-form2';
import StepForm3 from'../src/components/Step3/step-form3';
import StepForm4 from'../src/components/Step4/step-form4';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StepForm1 />}/>
        <Route path='/step2' element={<StepForm2 />}/>
        <Route path='/step3' element={<StepForm3 />}/>
        <Route path='/step4' element={<StepForm4 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
