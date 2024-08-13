import React, { useState, useEffect, useCallback } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faClipboard, faEnvelope, faCogs ,faBuilding} from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../components/layout/Footer';
import '../scss/pages/AdminDashboard.scss';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
import languageTestImg from '../assets/img/languages.jpeg';
import personalityTestImg from '../assets/img/personalitytest.jpeg';
import skillTestImg from '../assets/img/Competencetest.jpeg';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import LineChart from './courbetest'; 


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const AdminDashboard2 = () => {
    const [selected, setSelected] = useState('dashboard');
    const [stats, setStats] = useState({
      totalUsers: 0,
      totalAnnouncements: 0,
      totalApplications: 0,
      preselection: { conform: 0, nonConform: 0 },
      tests: { ras: 0, ok: 0, no: 0 },
      interviews: { retained: 0, notRetained: 0 },
      downloadedCVs: 0,
      profileViews: 0,
    });

    const [lineData, setLineData] = useState({
      labels: ['Loading...'],
      datasets: [
        {
          data: [0],
        },
      ],
    });
    
    const [barData, setBarData] = useState({
      labels: ['Loading...'],
      datasets: [
        {
          label: 'Applications',
          data: [0],
          backgroundColor: 'rgba(75,192,192,0.6)',
        },
      ],
    });
    const [doughnutData, setDoughnutData] = useState({
      labels: ['Loading...'],
      datasets: [
        {
          data: [0],
          backgroundColor: ['#36A2EB', '#FF6384'],
        },
      ],
    });

    const [profile, setProfile] = useState({
      username: '',
      email: '',
      password: ''
    });
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    

    const fetchData = useCallback(async () => {
      try {
        const data = {
         barLabels: ['2024-08-01', '2024-08-02', '2024-08-03', '2024-08-04', '2024-08-05'],
        barData: [20, 35, 45, 30, 25],
        doughnutLabels: ['Conform', 'Non-Conform'],
        doughnutData: [300, 150], 
        labels: ['2024-08-01', '2024-08-02', '2024-08-03', '2024-08-04', '2024-08-05'],
        datasets: [
          {
            data: [10, 25, 30, 20, 15], // Nombre d'entretiens programmés
          },
        ],
        }
        setLineData(data);

        setStats({
          totalUsers: data.totalUsers,
          totalAnnouncements: data.totalAnnouncements,
          totalApplications: data.totalApplications,
          preselection: data.preselection,
          tests: data.tests,
          interviews: data.interviews,
          downloadedCVs: data.downloadedCVs,
          profileViews: data.profileViews,
        });

        setBarData({
          labels: data.barLabels,
          datasets: [
            {
              label: 'Applications',
              data: data.barData,
              backgroundColor: 'rgba(75,192,192,0.6)',
            },
          ],
        });

        setDoughnutData({
          labels: data.doughnutLabels,
          datasets: [
            {
              data: data.doughnutData,
              backgroundColor: ['#46B8B2','#3e4a5a'],
            },
          ],
        });

        const profileResponse = await fetch('https://api.example.com/admin/profile');
        const profileData = await profileResponse.json();
        setProfile(profileData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, []);

    useEffect(() => {
      fetchData();
    }, [fetchData]);

    const handleProfileChange = (e) => {
      const { name, value } = e.target;
      setProfile(prevProfile => ({ ...prevProfile, [name]: value }));
    };

    const handleProfileSubmit = async (e) => {
      e.preventDefault();
      try {
        await fetch('https://api.example.com/admin/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(profile),
        });
        alert('Profile updated successfully!');
        setIsEditingProfile(false);
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    };

    const TestSection = () => {
      const [tests, setTests] = useState([
        { id: 1, title: 'Language Tests', description: 'Evaluate your language proficiency across various languages.', imgSrc: languageTestImg },
        { id: 2, title: 'Personality Tests', description: 'Discover your personality traits and how they influence your behavior.', imgSrc: personalityTestImg },
        { id: 3, title: 'Skill Tests', description: 'Assess your technical and professional skills with various tests.', imgSrc: skillTestImg },
      ]);
  
      const handleEditTest = (testId) => {
        alert(`Edit test with ID: ${testId}`);
      };
  
      const handleDeleteTest = (testId) => {
        setTests(tests.filter(test => test.id !== testId));
        alert(`Deleted test with ID: ${testId}`);
      };
  
      const Messages = () => {
        const [messages, setMessages] = useState([]);
        const [newMessage, setNewMessage] = useState('');
      
        useEffect(() => {
          // Charger les messages depuis le backend
          fetch('/api/messages')
            .then(response => response.json())
            .then(data => setMessages(data));
        }, []);
      
        const handleSendMessage = () => {
          fetch('/api/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: newMessage }),
          })
            .then(response => response.json())
            .then(message => {
              setMessages([...messages, message]);
              setNewMessage(''); 
            });
        };
      
        return (
          <div>
            <h2>Messages</h2>
            <ul>
              {messages.map(message => (
                <li key={message.id}>{message.text}</li>
              ))}
            </ul>
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Écrivez un message"
            />
            <button onClick={handleSendMessage}>Envoyer</button>
          </div>
        );
      };
      


      return (
        <div className="site-main">
          <section className="test-section">
            <div className="container">
              <div className="section-title">
                <div className="title-header">
                  <h2 className="title">Choose The  Test</h2>
                </div>
               
              </div>
  
              <div className="test-list">
                {tests.map(test => (
                  <div key={test.id} className="test-item">
                    <div className="test-thumbnail">
                      <img src={test.imgSrc} alt={test.title} />
                    </div>
                    <div className="test-content">
                      <div className="test-title">
                        <h4>{test.title}</h4>
                      </div>
                      <div className="test-desc">
                        <p>{test.description}</p>
                        <button className="btn-edit-test" onClick={() => handleEditTest(test.id)}>Edit Test</button>
                        <button className="btn-delete-test" onClick={() => handleDeleteTest(test.id)}>Delete Test</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    };
/*Messages*/

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Charger les messages depuis le backend
    fetch('/api/messages')
      .then(response => response.json())
      .then(data => setMessages(data));
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newMessage }),
      })
        .then(response => response.json())
        .then(message => {
          setMessages([...messages, message]);
          setNewMessage('');
        });
    } else {
      alert('Le message ne peut pas être vide');
    }
  };

  return (
    <div>
      <h2>Messages</h2>
      <ul>
<input type="text" placeholder='inser reciever name'></input>
      </ul>
      <textarea value={newMessage}onChange={(e) => setNewMessage(e.target.value)}  placeholder="Écrivez un message"
      />
      <button onClick={handleSendMessage}>Envoyer</button>
    </div>
  );
};



const UserConnections = () => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    // Appel à l'API pour récupérer les données des connexions
    fetch('/api/user-connections')
      .then(response => response.json())
      .then(data => setConnections(data))
      .catch(error => console.error('Erreur lors de la récupération des connexions:', error));
  }, []);


  

  return (
    <div className="user-connections">
    <h2>Connection Traceability</h2>
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Login Time</th>
          <th>IP Address</th>
          <th>Status</th>
          <th>Session Duration</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            username: "john_doe",
            loginTime: "2024-08-12T09:15:30Z",
            ipAddress: "192.168.1.1",
            status: "Active",
            sessionDuration: "2 hours",
          },
          {
            username: "jane_smith",
            loginTime: "2024-08-12T10:30:45Z",
            ipAddress: "192.168.1.2",
            status: "Inactive",
            sessionDuration: "30 minutes",
          },
          {
            username: "alice_jones",
            loginTime: "2024-08-12T11:45:00Z",
            ipAddress: "192.168.1.3",
            status: "Active",
            sessionDuration: "1 hour 15 minutes",
          },
        ].map((connection, index) => (
          <tr key={index}>
            <td>{connection.username}</td>
            <td>{new Date(connection.loginTime).toLocaleString()}</td>
            <td>{connection.ipAddress}</td>
            <td>{connection.status}</td>
            <td>{connection.sessionDuration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};


/*setting uploadfil*/

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    await fetch('/upload', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div className="admin">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="settingBouttonFile">Télécharger</button>
    </div>
  );
};

/*settings text editor*/
const TextEditor = () => {
  const [content, setContent] = useState('');

  const handleChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  const handleSave = () => {
    // Enregistrer le contenu dans la base de données via une API
    console.log('Content:', content);
  };

  return (
    <div className="admin">
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onChange={handleChange}
      />
      <button onClick={handleSave} className="settingBouttonText">Enregistrer</button>
    </div>
  );
};




/*admin form */

const AddAdminForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez ici l'ajout de l'admin, par exemple en envoyant les données à une API
    console.log('Admin ajouté:', { username, email, password });
    
    // Réinitialisez le formulaire
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="admin">
        <div className="form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
      </div>
      <div className='admin'>
      <button type="submit">Ajouter Admin</button>
      </div>
    </form>
  );
};
/*cvtheque*/

const CVTheque = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterField, setFilterField] = useState('name');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // Implement search logic here
  };

  const handleFilter = () => {
    console.log('Filtering by:', filterField);
    // Implement filter logic here
  };

  return (
    <div className="cvtheque">
      <h1 className="cvtheque__title">Resume Database</h1>

      <div className="cvtheque__search">
        <input
          type="text"
          placeholder="Looking for a resume..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="cvtheque__input"
        />
        <button type="button" onClick={handleSearch} className="cvtheque__button">
          Search
        </button>
      </div>

      <div className="cvtheque__filter">
        <h2>Filter Resumes</h2>
        <select
          id="field"
          value={filterField}
          onChange={(e) => setFilterField(e.target.value)}
          className="cvtheque__select"
        >
          <option value="name">Name</option>
          <option value="surname">lastName</option>
          <option value="experience">Experience</option>
          <option value="skills">Skills</option>
        </select>
        <button type="button" onClick={handleFilter} className="cvtheque__button">
          Filter
        </button>
      </div>

      <div className="cvtheque__results">
        <h2>Results</h2>
        {results.length === 0 ? (
          <p >No results found</p>
        ) : (
          <ul className="cvtheque__list">
            {results.map((result, index) => (
              <li key={index} className="cvtheque__item">{result}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};





    const renderContent = () => {
      switch (selected) {
        case 'manageCandidates':
          return (
            <div className="statsm">
            <div className="statm">
            <div className="stat total-users">
              <h2>Number of Users</h2>
              <p>{stats.totalUsers}</p>
              <p>Total number of registered users.</p>
              </div>
            <div className="stat total-users">
              <h2>Number of Recruiters</h2>
              <p>{stats.totalUsers}</p>
              <p>Total number of registered recruiters.</p>
            </div>
            <div className="stat total-users">
              <h2>Number of Candidates</h2>
              <p>{stats.totalUsers}</p>
              <p>Total number of registered candidates.</p>
            </div>
            </div>
          
              <div className="main-contentM">
                <h1>All Condidate</h1>
                <div className="user-section">
                 
                  <table className="table table-bordered user-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Rôle</th>
                        <th>Status</th>

                        <th>Actions</th>

                      </tr>
                    </thead>
                    <tbody id="user-table-body">
                      <tr>
                        <td>1</td>
                        <td>hafsa</td>
                        <td>hafsa.hh@example.com</td>
                        <td>Candidat</td>
                        <td>ccc</td>

                        <td>
                          <div className="user-actions">
                            <button className="btn-edit">Modifier</button>
                            <button className="btn-delete">Supprimer</button>
                            <button className="btn-block">Bloquer</button>
                            <button className="btn-duplicate">Dupliquer</button>
                            <button className="btn-substitute">Se substituer</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>khalid</td>
                        <td>khalid.hhhh@example.com</td>
                        <td>Candidat</td>
                        <td>ccc</td>

                        <td>
                          <div className="user-actions">
                            <button className="btn-edit">Modifier</button>
                            <button className="btn-delete">Supprimer</button>
                            <button className="btn-block">Bloquer</button>
                            <button className="btn-duplicate">Dupliquer</button>
                            <button className="btn-substitute">Se substituer</button>
                          </div>
                        </td>

                      </tr>
                      <tr>
                        <td>3</td>
                        <td>basma</td>
                        <td>basma.hhh@example.com</td>
                        <td>Condidate</td>
                        <td>ccc</td>

                        <td>
                          <div className="user-actions">
                            <button className="btn-edit">Modifier</button>
                            <button className="btn-delete">Supprimer</button>
                            <button className="btn-block">Bloquer</button>
                            <button className="btn-duplicate">Dupliquer</button>
                            <button className="btn-substitute">Se substituer</button>
                          </div>
                        </td>

                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div id="create-recruter">

<h4>Create  new Condidat</h4>
<form id="creatrecruter">
<div className="mb-3">
<label htmlFor="recrutername" className="form-label"> full name</label>
<input type="text" className="form-control" id="recrutername" name="recrutername" required />
</div>
<div className="mb-3">
<label htmlFor="e-mail" className="form-label">E-mail</label>
<textarea className="form-control" id="e-mail" name="annonceDescription" rows="3" required></textarea>
</div>
<button type="submit" className="btn-create">Create</button>
</form>
</div>
</div>
          );
          case 'manageRecruter':
            return (
              <div className="statsm">
              <div className="statm">
              <div className="stat total-users">
                <h2>Number of Users</h2>
                <p>{stats.totalUsers}</p>
                <p>Total number of registered users.</p>
                </div>
              <div className="stat total-users">
                <h2>Number of Recruiters</h2>
                <p>{stats.totalUsers}</p>
                <p>Total number of registered recruiters.</p>
              </div>
              <div className="stat total-users">
                <h2>Number of Candidates</h2>
                <p>{stats.totalUsers}</p>
                <p>Total number of registered candidates.</p>
              </div>
              </div>
            
                <div className="main-contentM">
                  <h1>All Recruter</h1>
                  <div className="user-section">
                   
                    <table className="table table-bordered user-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Role</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody id="user-table-body">
                        <tr>
                          <td>1</td>
                          <td>hafsa</td>
                          <td>hafsa.hh@example.com</td>
                          <td>Recruter</td>
                          <td>
                            <div className="user-actions">
                              <button className="btn-edit">Modifier</button>
                              <button className="btn-delete">Supprimer</button>
                              <button className="btn-block">Bloquer</button>
                              <button className="btn-duplicate">Dupliquer</button>
                              <button className="btn-substitute">Se substituer</button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>khalid</td>
                          <td>khalid.hhhh@example.com</td>
                          <td>Recruter</td>
                          <td>
                            <div className="user-actions">
                              <button className="btn-edit">Modifier</button>
                              <button className="btn-delete">Supprimer</button>
                              <button className="btn-block">Bloquer</button>
                              <button className="btn-duplicate">Dupliquer</button>
                              <button className="btn-substitute">Se substituer</button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>basma</td>
                          <td>basma.hhh@example.com</td>
                          <td>Recruter</td>
                          <td>
                            <div className="user-actions">
                              <button className="btn-edit">Modifier</button>
                              <button className="btn-delete">Supprimer</button>
                              <button className="btn-block">Bloquer</button>
                              <button className="btn-duplicate">Dupliquer</button>
                              <button className="btn-substitute">Se substituer</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="create-recruter">

                <h4>Create  new Recruiter</h4>
  <form id="creatrecruter">
    <div className="mb-3">
      <label htmlFor="recrutername" className="form-label"> full name</label>
      <input type="text" className="form-control" id="recrutername" name="recrutername" required />
    </div>
    <div className="mb-3">
      <label htmlFor="e-mail" className="form-label">E-mail</label>
      <textarea className="form-control" id="e-mail" name="annonceDescription" rows="3" required></textarea>
   </div>
    <button type="submit" className="btn-create">Create</button>
  </form>
</div>
</div>
            );
        case 'announcements':
          return (
            <div className="manage-announcements">
              <h3>Manage Recruitment Announcements</h3>
              <div className="mb-3">
                <button className="btn-custom" data-bs-toggle="collapse" data-bs-target="#create-annonce">Create Announcement</button>
                <button className="btn btn-delete" data-bs-toggle="collapse" data-bs-target="#delete-annonce">Delete Announcement</button>
                <button className="btn-custom" data-bs-toggle="collapse" data-bs-target="#modify-annonce">Modify Announcement</button>
              </div>

              <div className="table-container">
                <h4>All Announcements</h4>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Date Created</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Software Engineer Position</td>
                      <td>Looking for a skilled software engineer with experience in full-stack development.</td>
                      <td>2024-08-01</td>
                      <td>Active</td>
                      <td>
                        <div className="btn-group">
                          <button className="btn btn-custom">Edit</button>
                          <button className="btn btn-delete">Delete</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="collapse scrollable-section form-container" id="create-annonce">
  <h4>Create  new Recruiter</h4>
  <form id="createAnnonceForm">
    <div className="mb-3">
      <label htmlFor="annonceTitle" className="form-label">Title</label>
      <input type="text" className="form-control" id="annonceTitle" name="annonceTitle" required />
    </div>
    <div className="mb-3">
      <label htmlFor="annonceDescription" className="form-label">Description</label>
      <textarea className="form-control" id="annonceDescription" name="annonceDescription" rows="3" required></textarea>
    </div>
    <div className="mb-3">
      <label htmlFor="annonceStatus" className="form-label">Status</label>
      <select className="form-select" id="annonceStatus" name="annonceStatus" required>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
    <button type="submit" className="btn-custom">Create</button>
  </form>
</div>
<div className="collapse scrollable-section form-container" id="modify-annonce">
  <h4>Modify Recruitment Announcement</h4>
  <form id="modifyAnnonceForm">
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" className="form-control" id="title" name="title" required />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <textarea className="form-control" id="description" name="description" rows="3" required></textarea>
    </div>
    <div className="mb-3">
      <label htmlFor="status" className="form-label">Status</label>
      <select className="form-select" id="status" name="status" required>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
    <button type="submit" className="btn btn-custom">Update</button>
  </form>
</div>
<div className="collapse scrollable-section form-container" id="delete-annonce">
  <h4>Delete Recruitment Announcement</h4>
  <form id="deleteAnnonceForm">
    <div className="mb-3">
      <label htmlFor="announcementId" className="form-label">Announcement ID</label>
      <input type="number" className="form-control" id="announcementId" placeholder="Enter ID of announcement to delete" />
    </div>
    <button type="button" className="btn btn-delete">Delete</button>
  </form>
</div>
 </div>  );


case 'tests':            
            return <TestSection />;
          
        case 'profile':
          return (
            <div className="profile-section-A">
              <h2> My Profile</h2>
              <form onSubmit={handleProfileSubmit} className='Form-Admin'>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={profile.username}
                    onChange={handleProfileChange}
                    readOnly={!isEditingProfile}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    readOnly={!isEditingProfile}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={profile.password}
                    onChange={handleProfileChange}
                    readOnly={!isEditingProfile}
                  />
                </div>
                {isEditingProfile ? (
                  <button type="submit" className="btn btn-primary-A">Save</button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-custom"
                    onClick={() => setIsEditingProfile(true)}
                  >
                    Edit Profile
                  </button>
                )}
              </form>
            </div>
          );

          
          case 'messages':
            return  (
              <div className="messages-content">
              <h2>My Messages</h2>
              <ul className="message-list">
                <li className="message-item">
                  <h3>Recruter name</h3>
                  <p><small>2024-08-01</small></p>
                  <p>hhhhhhh</p>
                </li>
                <li className="message-item">
                  <h3>HR</h3>
                  <p><small>2024-08-03</small></p>
                  <p>hhhhhhhhhhhh</p>
                </li>
                <li className="message-item">
                  <h3>Condidat name</h3>
                  <p><small>2024-08-05</small></p>
                  <p>hhhhhhhhhhhhhhhhhh</p>
                </li>
              </ul>
            <Messages />
          </div>
            );
            case 'userConnections':
              return <UserConnections />;
              case 'cvTheque':
                return <CVTheque/>
case 'settings':
  return (
    <div className='settings'>
      <h1 >My settings </h1>
      <h2>Text Editor</h2>
          <TextEditor/>
      <h2>Documents</h2>
      <FileUpload/>
      <h2>Add Admin</h2>
      <AddAdminForm/>
      

    </div>
  )
      default:
          return (
            <div className="dashboardA">
              <div className="statsA">
                <div className="stat total-users-A">
                  <h2>Total Users</h2>
                  <p>{stats.totalUsers}</p>
                  <p>Total registered users.</p>
                </div>
                <div className="stat total-announcements-A">
                  <h2>Total Announcements</h2>
                  <p>{stats.totalAnnouncements}</p>
                  <p>Total recruitment announcements.</p>
                </div>
                <div className="stat total-applications-A">
                  <h2>Total Applications</h2>
                  <p>{stats.totalApplications}</p>
                  <p>Total applications received.</p>
                </div>
              </div>

              <div className="chartsA">
                <div className="bar-chart">
                  <Bar data={barData} />
                </div>
                <div className="doughnut-chartA">
                  <Doughnut data={doughnutData} />
                </div>
               
              </div>
              <div className='line-chart'>
                <LineChart data={lineData} />

                </div>
             
          
              
            </div>
          );
      }
    };

    return (
      <div className="site-mainA">
      <div className="dashboardA">
        <aside className="sidebarA">
          <div className="sidebar-headerA">
            <h2>Hello Admin Name</h2>
          </div>
          <div className="sidebar-menuA">
            <ul>
              <li onClick={() => setSelected('dashboardA')}>
                <FontAwesomeIcon icon={faTachometerAlt} />
                Dashboard
              </li>
              <li onClick={() => setSelected('profile')}>
                <FontAwesomeIcon icon={faUser} />
                Profile
              </li>
              <li onClick={() => setSelected('announcements')}>
                <FontAwesomeIcon icon={faClipboard} />
                Announcements
              </li>
              <li onClick={() => setSelected('manageCandidates')}>
                <FontAwesomeIcon icon={faUser} />
                Manage Candidates
              </li>
              <li onClick={() => setSelected('manageRecruter')}>
                <FontAwesomeIcon icon={faUser} />
                Manage Recruter
              </li>
              <li onClick={() => setSelected('messages')}>
                <FontAwesomeIcon icon={faEnvelope} />
                Messages
              </li>
              <li onClick={() => setSelected('tests')}>
                <FontAwesomeIcon icon={faEnvelope} />
                Tests
              </li>
              <li onClick={() => setSelected('userConnections')}>
    <FontAwesomeIcon icon={faUser} /> User Connections
  </li>
  <li className={selected === 'cvTheque' ? 'active' : ''} onClick={() => setSelected('cvTheque')}>
                <FontAwesomeIcon icon={faBuilding} /> My CVTHEQUE
              </li>
              <li onClick={() => setSelected('settings')}>
                <FontAwesomeIcon icon={faCogs} />
                Settings
              </li>
            </ul>
          </div>
        </aside>
        <div className="content">
          {renderContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AdminDashboard2;

