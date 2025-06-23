const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let priceElem=document.querySelectorAll(".price");
	let sum=0;
	
	priceElem.forEach((elem)=>{
		sum=sum+parseFloat(elem.textContent);
	});
     let totalrow= document.createElement("tr");
	let totalcell= document.createElement("td");
	totalcell.setAttribute("id", "ans"); 
	totalcell.style.fontWeight="bold";
	totalcell.textContent = `Total Price: Rs ${sum}`;
	totalrow.appendChild(totalcell);
	document.querySelector("table").appendChild(totalrow);
};

getSumBtn.addEventListener("click", getSum);

