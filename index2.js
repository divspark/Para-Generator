const input = document.getElementById("numOfWords");

const container = document.querySelector(".container");

const generateWord = (n) => {
    let text = "";

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

   for(let i=0;i<n;++i){

    const random = (Math.random() * (letters.length-1)).toFixed(0);

    text += letters[random];        //toFixed fix the position of decimal places in number


   }

  return text;
//     //  return Math.random();              //returns a random value in decimals between 0 and 1
//     //return Math.random() * 10;              //returns a random value in decimals between 1 and 10
//     //return text;
 };

//console.log(generateWord(9));


let numOfWords;
const generatePara = () => {
    numOfWords = Number(input.value);


    const para = document.createElement("p");

    let data="";

    for(let i = 0;i< numOfWords;++i){
        const randomNumber = (Math.random()*15).toFixed(0);
        data += generateWord(randomNumber);
        data += " ";

    }

    console.log(data);

    para.innerText = data;

    para.setAttribute("class","paras");

    container.append(para);
};
