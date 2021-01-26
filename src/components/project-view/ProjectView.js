import React from 'react';
import './ProjectView.css';
import { Link } from 'react-router-dom';

class ProjectView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      totalHours: 0,
      currentProjectHours: {
        amount: '',
        description: ''
      }
    }
    this.generateId = this.generateId.bind(this);

  }
  // This will generate random ID number
  generateId = () => {
    return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
  }

  // Take the value fron input forms
  componentDidMount() {
    const id = this.props.match.params.id;
    const projects = JSON.parse(localStorage.getItem('projects'));
    const project = projects.find((project) => project.id === parseInt(id));
    this.setState({ project });
    this.countTotalHours(project);
  }

  countTotalHours = (project) => {
    let totalHours = 0;
    project.hours.map((hour) => totalHours += parseInt(hour.amount));
    this.setState({ totalHours });
  }

  // This will update the project hours with new values
  inputChange = (event) => {
    event.preventDefault();
    this.setState({
      currentProjectHours: { ...this.state.currentProjectHours, [event.target.name]: event.target.value } // dynamically update currentProjectHours property
    });
  }

  // This will add time to the project
  addTime = (event) => {
    if (this.state.currentProjectHours.amount && this.state.currentProjectHours.description) {
      event.preventDefault();
      let project = this.state.project;
      project.hours.push(
        {
          id: this.generateId(),
          amount: this.state.currentProjectHours.amount,
          description: this.state.currentProjectHours.description,
        }
      );
      this.updateProjectsHours(project);
      this.setState({ project });
    }
    else {
      alert("Please fill up the form bellow.");
    }
  }

  // This will update projects hours
  updateProjectsHours = (currentProject) => {
    let projects = JSON.parse(localStorage.getItem('projects'));
    const index = projects.findIndex((project) => project.id === currentProject.id);
    if (index !== -1) {
      projects[index] = { ...projects[index], hours: currentProject.hours }
      localStorage.setItem('projects', JSON.stringify(projects));
      this.countTotalHours(currentProject);
      this.setState({ projects, currentProjectHours: { amount: '', description: '' } });
    }
  }

  // This will delete hours from project
  deleteTime = (id) => {
    let project = this.state.project;
    const index = project.hours.findIndex((hour) => hour.id === id);
    if (index !== -1) {
      project.hours.splice(index, 1);
      this.setState({ project });
      this.updateProjectsHours(project);
    }
  }

  render() {
    return (
      <div>
        <header>
          <h2>Add hours</h2>
        </header>
        <div className="container">
          <form onSubmit={this.addTime}>
            <span className="project-title">Amount:</span>
            <input
              type="number"
              name="amount"
              min="1"
              value={this.state.currentProjectHours.amount}
              onChange={this.inputChange}
              className="project-item"
              autoComplete="off"
            />
            <br></br>
            <span className="project-title">Description:</span>
            <textarea
              name="description"
              value={this.state.currentProjectHours.description}
              onChange={this.inputChange}
              className="project-description"
              placeholder="Please enter product time description..."
            />
            <input type="submit" value="Add" className="submit-btn" />
          </form>
          <div>
            <button className="back-button">
              <Link to="/">
                <span className="back-button-span">Back</span>
              </Link>
            </button>
            <div>
              <strong>Name: </strong>{this.state.project.name}
            </div>
            <div>
              <strong>Description: </strong>{this.state.project.description}
            </div>
            <div>
              <strong>Total hours: </strong>{this.state.totalHours}
            </div>
          </div>
          <div>
            {this.state.project.hours && this.state.project.hours.length > 0 && (<table className="table-container">
              <thead>
                <tr className='table-row'>
                  <th className="table-head">Amount</th>
                  <th className="table-head">Description</th>
                  <th className="table-head">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.project.hours.map((hour) =>
                    <tr key={hour.id} className='table-row'>
                      <td className="table-data">{hour.amount}</td>
                      <td className="table-data">{hour.description}</td>
                      <td className="table-data">
                        <button onClick={() => this.deleteTime(hour.id)} className="btn">Delete</button>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>)}
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectView;
