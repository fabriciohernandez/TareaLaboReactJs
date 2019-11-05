import React from 'react';
import ReactDOM from 'react-dom';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './index.css';

class RegisterForm extends React.Component {

  render() {
    return (
      <div className="container">
      <br/>
        <div className = "jumbotron">

          <h1>Registro de laboratorio</h1>

          <div className="form-group">
            <form>
              <label className="col-sm-2 col-form-label">
                Ingrese el carnet:
              </label>
              <input className="form-control" type="text" name="name" />
              <br/>
              <label for="schedule">Seleccione el horario:</label>
              <select name="schedule" class="form-control" id="schedule_field">
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
                    value="end"
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
