import React from 'react';
import './App.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import recepies from './data.json';

function App() {
  const [value, setValue] = React.useState('dog');
  const [data, setData] = React.useState(recepies);
  const [food, setFood] = React.useState(-1); 
  const [nom, setNom] = React.useState(0); 
  const handleChange = (event) => {
    setValue(event.target.value);
    setFood(-1)
    setNom(0)
  };
  const handleFood = (event) => {
    setFood(event.target.value)
  };
  const handleNom = (event) => {
    setNom(event.target.value)
  };
  console.log(data)
  console.log(data[value])
  const food_option = (
    <select name="brand" onChange = {handleFood} defaultValue = "-1">
      <option disabled value="-1">Select Pet Food Brand</option>
      {
        data[value].map((values, index) => (
          <option disabled="" value={index}>{values.Name}</option>
        ))
      }
    </select>
  ) 

  const nom_option = (
    <select name="recipe" onChange = {handleNom} defaultValue = "0">
      {
        data[value+'_nom'].map((values, index) => (
          <option disabled="" value={index}>{values.Name}</option>
        ))
      }
    </select>
  ) 
  

  return (
    <div className="App">
      <header className="App-header">
          <div className="nutrient-calculator-container container-margined container-medium padding-top-medium">
          <h1 className="padding-bottom-medium color-biscuit">Comparison calculator</h1>
            <div className="color-bg-light-gray padding-top padding-left padding-right padding-bottom margin-bottom-small">
              <div className="avatar-card">
                <div>
                  <img src="headshot_caitlyn.jpg" alt="Dr. Caitlyn Getty" className="avatar science-headshot"/>
                </div>
                <div className="description">
                  <p> Percentages on commercial pet food labels are not reliable because they are based on weight, not calories, and the values are affected by many factors, including moisture, fiber and minerals. Use this calculator to get a more accurate picture of how another pet food brand compares with Nom Nom. </p>
                  <div className="bold">Dr. Caitlyn Getty</div>
                  <div>
                    <em>Scientific Affairs Veterinarian</em>
                  </div>
                </div>
              </div>
            </div>
          <div id="react-container-nutrient-calculator">
            <form>
              <div className="container-flex flex-justify-start padding-top padding-bottom">
                <FormControl component="fieldset">
                  <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="dog" control={<Radio />} label="Compare dog recipes" />
                    <FormControlLabel value="cat" control={<Radio />} label="Compare cat recipes" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="container-flex padding-bottom-small">
                <div className="padding-bottom-small padding-right-small">
                  <label className="label">Name of pet food brand</label>
                  {food_option}
                </div>
                <div className="padding-bottom-small padding-right-small">
                  <label className="label">Compare with Nom Nom</label>
                  {nom_option}
                </div>
              </div>
              <div>
                <div className="react-opacity-transition-enter-done">
                  <div className="padding-bottom-small">
                    <span className="text-smallest">
                      {food != -1 && data[value][food].Summary}
                    </span>
                  </div>
                  <div className="centered color-bowl">
                    <h4>
                      <div>
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
                          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                        </svg>
                      </div>
                    </h4>
                  </div>
                  <div className="color-bowl">
                    {food != -1 ?
                      <div className="container-flex nowrap results padding-bottom-medium">
                        <div>
                          <div className="brand"></div>
                          <img src={food != -1 && data[value][food].Img} className="food-brand padding-bottom-small"/>
                          {food != -1 && data[value][food].Protein ?
                            <div>
                              <label className="label">Protein</label>
                              <h2>{food != -1 && data[value][food].Protein}</h2>
                            </div>
                          : ''}
                          {food != -1 && data[value][food].Protein ?
                            <div>
                              <label className="label">Fat</label>
                              <h2>{food != -1 && data[value][food].Fat}</h2>
                            </div>
                          : ''}
                          {food != -1 && data[value][food].Protein ?
                            <div>
                              <label className="label">Carbohydrate</label>
                              <h2>{food != -1 && data[value][food].Carbohydrate}</h2>
                            </div>
                          : ''}
                        </div>
                        <div>
                          {food != -1 ? 
                            <div>
                              <img src="nom_nom_straight.svg" className="logo"/>
                              <div className="brand">
                                <h3 className="color-biscuit druk">Turkey Fare</h3>
                              </div>    
                            </div>
                          : ''}
                          
                          <img src={food != -1 && data[value+'_nom'][nom].Img} className="food-brand padding-bottom-small"/>

                          {food != -1 && data[value+'_nom'][nom].Protein ?
                            <div>
                              <label className="label">Protein</label>
                              <h2 className="color-carrot">{food != -1 && data[value+'_nom'][nom].Protein}</h2>
                            </div>
                          : ''}
                          {food != -1 && data[value+'_nom'][nom].Protein ?
                            <div>
                              <label className="label">Fat</label>
                              <h2 className="color-chew-toy">{food != -1 && data[value+'_nom'][nom].Fat}</h2>
                            </div>
                          : ''}
                          {food != -1 && data[value+'_nom'][nom].Protein ?
                            <div>
                              <label className="label">Carbohydrate</label>
                              <h2 className="color-tennis-ball">{food != -1 && data[value+'_nom'][nom].Carbohydrate}</h2>
                            </div>
                          : ''}
                        </div>
                      </div>
                     : ''}
                    <div className="container-flex">
                      <div className="flex-item--bordered">
                        <h3>Protein</h3>
                        <p>Not all proteins are created equal. Kibble and other more processed foods can use less digestible, lower quality protein.</p>
                      </div>
                      <div className="flex-item--bordered">
                        <h3>Fat</h3>
                        <p>Fat can oxidize over time, causing issues with digestion. We monitor our fresh diets for oxidation, and the fats are healthier since they are fresh.</p>
                      </div>
                      <div className="flex-item--bordered">
                        <h3>Carbohydrate</h3>
                        <p>Nom Nom uses only whole food sources of carbohydrates - no grain byproducts, sugars, or starches added.</p>
                      </div>
                    </div>
                  </div>
                  <div className="padding-top padding-bottom text-smallest color-bowl">
                    <p>* All units above are given in grams per 1000 calories (g/kcal).</p>
                    <p>The information for other brands' foods should be used as a guide only, albeit one that is in most cases better than the percentage. Actual values should be available from the manufacturer. Nom Nom is not liable for any misuse, inaccuracy, or other legal shenanigans related to the above.</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
