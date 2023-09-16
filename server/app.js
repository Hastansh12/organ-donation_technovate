const express = require('express');
const db = require('./utilities/connection');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

//requiring routes
const user = require('./Routes/user.routes');
// Initializing an express app
const app = express();

// Server Port
const PORT = process.env.PORT;

// Formatting incoming data and allowing cross origin requests
app.use(cors({origin: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Logging incoming requests
app.use(morgan('dev'));

// //Model Testing
// const qna = require('@tensorflow-models/qna');
// const passage = "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet."
// const question = "Who is the CEO of Google?"

//      qna.load()
//          .then(model=>{
//          model.findAnswers(question,passage)
//             .then(answers=>{
//              console.log(answers);
//                 })
//         })
    


    
    


// API Routes
app.use('/user', user);


// Error Handling for Multer
app.use((error, req, res, next) => {
	console.log('This is the rejected field ->', error.field);
});

// Test API
app.get('/api', (req, res) => {
	res.status(200).json({
    	name: `${process.env.APP_NAME} API`,
    	apiVersion: JSON.parse(fs.readFileSync('./package.json').toString()).version
  	});
});

// Listening on the port
app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});