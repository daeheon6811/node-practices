module.exports = {
    read: async (req , res , next ) => {
        const startNo = req.query.no || 0;           
        console.log(startNo);
        // sql:select .... that
        res.status(200).send({
            result: 'success',
            data:[{
                 no: 9,
                 name: '둘리',
                 message: '호이~',
                 regDate: new Date()

            }, { 
                no: 8,
                name: '마이콜',
                message: '구공탄~',
                regDate: new Date()
            }, {
                no: 7,
                name: '도우너',
                message: '둘리야',
                regDate: new Date()
            }],
            message : null
        });

    },
    delete:(req,res,next) => {
        console.log(req.params.no + ":" + req.body.password);
        // sql delete
        res.status(200).send({
            result: 'success',
            data: req.params.no,
            message:null
        });
    },
    create: async (req,res,next) => {
         console.log(req.body)
         res.status(200).send({
             result : "success",
             data: Object.assign(req.body, {
                    no: 10,
                    password: '',
                    regDate : new Date()
             }),
             message : null
         })
    },
}