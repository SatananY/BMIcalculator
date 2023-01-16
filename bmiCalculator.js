const express =require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


 app.get("/BMI",(req,res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html");
 });

 app.post("/BMI",(req,res)=>{
    console.log(req.body.weight);
    console.log(req.body.hight);

    var w = Number(req.body.weight);
    var h = Number(req.body.hight);
    var BMI = w/Math.pow(h,2)
    BMI = Math.round(BMI)

    if(BMI<18.5){
       res.send("BMI is : "+ BMI + " คุณอยู่ในเกณฑ์ : ผอมเกินไป เสี่ยงต่อการได้รับสารอาหารไม่เพียงพอ");
    }
    else if (BMI>18.5 && BMI<22.9){
        res.send("BMI is : "+ BMI + " คุณอยู่ในเกณฑ์ : น้ำหนักปกติ เหมาะสม มีความเสี่ยงต่อโรคต่างๆน้อย");
    }
    else if (BMI>22.9 && BMI<24.9){
        res.send("BMI is : "+ BMI + " คุณอยู่ในเกณฑ์ : น้ำหนักเกิน ถือว่ามีความเสี่ยงต่อโรคต่างๆมากกว่าคนปกติ");
    }
    else if (BMI>24.9 && BMI<29.9){
        res.send("BMI is : "+ BMI + " คุณอยู่ในเกณฑ์ : อ้วน  มีความเสี่ยงต่อโรคต่างๆ");
    }
    else {
        res.send("BMI is : "+ BMI + " คุณอยู่ในเกณฑ์ : อ้วนมาก เสี่ยงต่อการเกิดโรค");
    }
 });

app.listen(3000, ()=>{
    console.log("Severs complete in port 3000");
});