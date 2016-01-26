var express = require('express');
var agentParser = require('user-agent-parser');
var app = express();
var visit = {
	mobile:0,
	other:0
};

app.use(function(req,res,next){
	req.agent = agentParser(req.headers['user-agent']|| '');
	next();
})

app.get('/',function(req,res){
	if( req.agent.device.type == 'mobile' ){
		visit.mobile ++;
	} else {
		visit.other ++;
	}
	res.send(visit);
})

app.listen(8080);