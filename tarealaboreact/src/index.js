import React from 'react';
import ReactDOM from 'react-dom';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './index.css';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {carnet: '',
                  schedule:'',
                  late:false};



    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let table_body = document.querySelector('#table_body');
    let new_row = document.createElement('tr');
    new_row.classList.add("table-active");

    let datetime = new Date();

    let islate="";
    if (this.state.late==false) {
      islate="NO"
    }else {
      islate="SI"
    }

    new_row.innerHTML = `
        <td>${this.state.carnet}</td>
        <td>${this.state.schedule}</td>
        <td>${datetime.toLocaleDateString()}</td>
        <td>${islate}</td>
        <td><input class="btn btn-danger" type="button" value="Eliminar" onclick="removeStudent(this)"></td>
    `

    table_body.appendChild(new_row);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
      <br/>
        <div className = "jumbotron">

          <h1>Registro de laboratorio</h1>

          <div className="form-group">
            <form onSubmit={this.handleSubmit}>
              <label className="col-sm-2 col-form-label">
                Ingrese el carnet:
              </label>
              <input className="form-control" type="text" placeholder="Carnet" name="carnet" value={this.state.carnet} onChange={this.handleInputChange} />
              <br/>
              <label for="schedule">Seleccione el horario:</label>
              <select name="schedule" class="form-control" value={this.state.schedule} onChange={this.handleInputChange}>
                  <option>Lunes de 9:00 a 11.00</option>
                  <option>Martes de 13:30 a 15:30</option>
                  <option>Miércoles de 9:00 a 11.00</option>
                  <option>Jueves de 13:30 a 15:30</option>
                  <option>Viernes de 9:00 a 11.00</option>
                  <option>Viernes de 15:30 a 17:30</option>
              </select>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel

                    control={<Switch color="primary" />}
                    label="¿Llegó tarde?"
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>
              <br/>
              <button type="submit" className="btn btn-danger" id="submit_btn">Ingresar</button>
            </form>
          </div>

        </div>
        <section>
            <table className="table table-hover">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">Carnet</th>
                        <th scope="col">Horario de laboratorio</th>
                        <th scope="col">Hora de ingreso</th>
                        <th scope="col">¿Tarde?</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody id="table_body">

                </tbody>
            </table>
        </section>
      </div>
    );
  }
}

ReactDOM.render(
  <RegisterForm />,
  document.getElementById('root')
);
