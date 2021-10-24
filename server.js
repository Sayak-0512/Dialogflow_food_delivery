'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
const PORT=process.env.PORT || 3001;
/**
 * List of all intents in the specified project.
 * @param {string} projectId The project to be used
 */

app.get('/get_intent_list',(req,res)=>{
  function main(projectId = 'food-delivery-gojr') {
    // [START dialogflow_list_intents]
  
    // Imports the Dialogflow library
    const dialogflow = require('@google-cloud/dialogflow');
  
    // Instantiates clients
    const intentsClient = new dialogflow.IntentsClient({
        keyFilename: "./food-delivery-gojr-e8a8c18cc3e7.json"
    });
  
    async function listIntents() {
      // Construct request
  
      // The path to identify the agent that owns the intents.
      const projectAgentPath = intentsClient.projectAgentPath(projectId);
  
      console.log(projectAgentPath);
  
      const request = {
        parent: projectAgentPath,
      };
      // Send the request for listing intents.

      await intentsClient.listIntents(request)
      .then(response=>res.json(response))
      .catch(err=>console.log(err));
    }
  
    listIntents();
  
    // [END dialogflow_list_intents]
  }
  main(...process.argv.slice(2));
})

if(process.env.NODE_ENV=="production"){
  app.use(express.static('frontend/build'))
}
app.listen(PORT,function(){ 
  console.log(`Server started on port ${PORT}`);
})