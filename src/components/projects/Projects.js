import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isEditing: false,
      currentProject: {
        name: '',
        description: ''
      }
    }

  }
  // This will generate random ID number
  generateId = () => {
    return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
  }

  // Take projects array from local storage
  componentDidMount() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    if (!projects) {
      localStorage.setItem('projects', JSON.stringify(this.state.projects));
    }
    this.setState({ projects });
  }

  // This will update the state with new values
  inputChange = (event) => {
    event.preventDefault();
    this.setState({
      currentProject: { ...this.state.currentProject, [event.target.name]: event.target.value } // dynamically update currentProject property
    });
  }

  // Take the values from input fields, push them to the locally, update the state
  addProject = (event) => {
    if (this.state.currentProject.name && this.state.currentProject.description !== "") {
      event.preventDefault();
      let projects = JSON.parse(localStorage.getItem('projects'));
      projects.push(
        {
          id: this.generateId(),
          name: this.state.currentProject.name,
          description: this.state.currentProject.description,
          hours: []
        }
      );
      localStorage.setItem('projects', JSON.stringify(projects));
      this.setState({ projects, currentProject: { name: '', description: '' } });
    }
    else {
      alert("Please fill up the form bellow.");
    }
  }

  // Set to edit mode
  updateProject = (project) => {
    this.setState({
      isEditing: true,
      currentProject: {
        id: project.id,
        name: project.name,
        description: project.description
      }
    });
  }

  // Save updated project
  saveProject = () => {
    let projects = JSON.parse(localStorage.getItem('projects'));
    const index = projects.findIndex((project) => project.id === this.state.currentProject.id);
    if (index !== -1) {
      projects[index] = { ...projects[index], name: this.state.currentProject.name, description: this.state.currentProject.description }
      localStorage.setItem('projects', JSON.stringify(projects));
      this.setState({ projects });
    }
    this.setState({ isEditing: false });
  }

  // Delete existing project
  deleteProject = (id) => {
    let projects = JSON.parse(localStorage.getItem('projects'));
    const index = projects.findIndex((project) => project.id === id);
    if (index !== -1) {
      projects.splice(index, 1);
      localStorage.setItem('projects', JSON.stringify(projects));
      this.setState({ projects });
    }
  }

  render() {
    return (
      <div className="contain">
        <header>
          <h1>Simple time tracking application</h1>
        </header>
        <div className="container">
          <form onSubmit={this.state.isEditing ? this.saveProject : this.addProject}>
            <span className="project-title">Project name:</span>
            <input
              type="text"
              name="name"
              value={this.state.currentProject.name}
              onChange={this.inputChange}
              className="project-item"
              autoComplete="off"
            />
            <span className="project-title">Project description:</span>
            <textarea
              name="description"
              value={this.state.currentProject.description}
              onChange={this.inputChange}
              className="project-description"
              placeholder="Please enter project description..."
            />
            <input type="submit" value={this.state.isEditing ? 'Save' : 'Add'} className="submit-btn" />
          </form>
          <div>
            {this.state.projects && this.state.projects.length > 0 && (<table className="table-container">
              <thead>
                <tr className='table-row'>
                  <th className="table-head">Project name</th>
                  <th className="table-head">Project description</th>
                  <th className="table-head">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.projects.map((project) =>
                    <tr key={project.id} className='table-row'>
                      <td className="table-data">{project.name}</td>
                      <td className="table-data">{project.description}</td>
                      <td className="table-data">
                        <button onClick={() => this.updateProject(project)} className="btn">Update</button>
                        <button className="btn"><Link to={`/project/${project.id}`}><span className="view-btn">View</span></Link></button>
                        <button onClick={() => this.deleteProject(project.id)} className="btn">Delete</button>
                      </td>
                    </tr>
                  )
                }
              </tbody>
              <div>
                <p>Total added projects: {this.state.projects.length}</p>
              </div>
            </table>)
            }
          </div>
          <div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
