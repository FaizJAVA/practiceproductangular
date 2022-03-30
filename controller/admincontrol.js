const adminM=require('../model/adminmodel');
const {validationResult}=require('express-validator');


exports.SignUp=(request,response)=>{
    let a=request.body.name;
    let b=request.body.email;
    let c=request.body.password;
    const error=validationResult(request);

    if(!error.isEmpty()){
        return response.status(403).json({error:error.array()});
    }

    adminM.create({name:a,email:b,password:c}).then(result=>{
        return response.status(201).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error:'Failed'});
    })
}

exports.View=(request,response)=>{
    adminM.find().then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error:'Failed'});
    })
}

exports.SignIn=(request,response)=>{
    let b=request.body.email;
    let c=request.body.password;

    adminM.findOne({email:b,password:c}).then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error:'Failed'});
    })
}
