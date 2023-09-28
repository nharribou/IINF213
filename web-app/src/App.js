import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientList from './ClientList'; // Import the ClientList component
import './App.css'; // Import your custom CSS file (for styling)

function App() {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/clients')
            .then((response) => {
                setClients(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src="/logo.png" alt="Logo" className="App-logo" />
                <h1>Liste des Clients</h1>
            </header>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="ClientList-center"> {/* Add a container div */}
                    <ClientList clients={clients} />
                </div>
            )}
        </div>
    );
}

export default App;
