const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('mssql');
const config = require('./dbConfig'); 

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à SQL Server
async function connectToDatabase() {
    try {
        await sql.connect(config);
        console.log('Connecté à SQL Server avec succès !');
    } catch (err) {
        console.error('Erreur de connexion à SQL Server :', err);
    }
}

connectToDatabase();

// Route d'inscription
app.post('/register', async (req, res) => {
    try {
        const { nom, prenom, email, mot_de_passe, phone, role } = req.body;

        // Vérifiez si l'email existe déjà
        const checkEmailQuery = 'SELECT * FROM users WHERE email = @email';
        const checkEmailRequest = new sql.Request();
        checkEmailRequest.input('email', sql.VarChar, email);
        const result = await checkEmailRequest.query(checkEmailQuery);
        
        if (result.recordset.length > 0) {
            return res.status(400).send({ message: 'Email déjà utilisé' });
        }

        // Insérer les données dans la table users
        const insertQuery = `
            INSERT INTO users (nom, prenom, email, mot_de_passe, phone, role)
            VALUES (@nom, @prenom, @email, @mot_de_passe, @phone, @role)
        `;
        const insertRequest = new sql.Request();
        await insertRequest
            .input('nom', sql.VarChar, nom)
            .input('prenom', sql.VarChar, prenom)
            .input('email', sql.VarChar, email)
            .input('mot_de_passe', sql.VarChar, mot_de_passe) // Stocké en texte clair
            .input('phone', sql.VarChar, phone)
            .input('role', sql.VarChar, role)
            .query(insertQuery);

        res.status(200).send({ message: 'Inscription réussie' });
    } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
        res.status(500).send({ message: 'Erreur lors de l\'inscription' });
    }
});

// Route de connexion
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const query = 'SELECT role, mot_de_passe FROM users WHERE email = @email';
        const request = new sql.Request();
        request.input('email', sql.VarChar, email);
        const result = await request.query(query);

        if (result.recordset.length > 0) {
            const user = result.recordset[0];
            if (user.mot_de_passe === password) {
                res.json({ role: user.role });
            } else {
                res.status(401).json({ error: 'Invalid email or password' });
            }
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        res.status(500).json({ error: 'Erreur lors de la connexion' });
    }
});

// Route pour récupérer le mot de passe
app.post('/ForgotPassword', async (req, res) => {
    const { email } = req.body;

    try {
        const query = 'SELECT mot_de_passe FROM users WHERE email = @email';
        const request = new sql.Request();
        request.input('email', sql.VarChar, email);
        const result = await request.query(query);

        if (result.recordset.length > 0) {
            const user = result.recordset[0];
            res.send({ mot_de_passe: user.mot_de_passe }); // Mot de passe en texte clair
        } else {
            res.status(404).send({ error: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Erreur du serveur' });
    }
});
app.get('/profile', async (req, res) => {
    try {
        const email = req.query.email; // Supposons que l'email de l'utilisateur soit passé en tant que paramètre de requête
        const query = 'SELECT * FROM users WHERE email = @Email';
        const request = new sql.Request();
        request.input('Email', sql.NVarChar, email);
        const result = await request.query(query);

        if (result.recordset.length > 0) {
            const user = result.recordset[0];
            res.render('profile', { user }); // Passer les données de l'utilisateur à la vue
        } else {
            res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération du profil :', error);
        res.status(500).json({ message: 'Erreur lors de la récupération du profil' });
    }
});
const multer = require('multer');

// Configuration du stockage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/cv/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// Route pour le téléchargement de CV
app.post('/upload_cv', upload.single('cv'), async (req, res) => {
    try {
        const filePath = req.file.path;
        console.log('File uploaded to:', filePath);

        // Enregistrer le chemin du fichier dans la base de données
        const email = req.body.email; // Supposons que l'email de l'utilisateur soit passé dans le corps de la requête
        const updateQuery = 'UPDATE users SET cv = @cv WHERE email = @email';
        const request = new sql.Request();
        await request
            .input('cv', sql.VarChar, filePath)
            .input('email', sql.VarChar, email)
            .query(updateQuery);

        res.send('File successfully uploaded');
    } catch (error) {
        console.error('Erreur lors du téléchargement du fichier :', error);
        res.status(500).send({ message: 'Erreur lors du téléchargement du fichier' });
    }
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
