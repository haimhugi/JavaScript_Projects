
function LoadTable() {


    //------------------------
            //קבלת הטבלה
        const tabledata = document.getElementById("tabledata");
        
        //מספר העמודות שיהיה בטבלה
        let tablecollen = 6;
    
    
        let newRow;     //משתנה השורה
        let newCell;     // משתנה התא
        let newText; // משתנה הערך בתוך התא
    
        for(let i = 0, z=0; i < (localStorage.length)/5; i++)
        {
            newRow = tabledata.insertRow(tabledata.rows.length); 
            newCell =  newRow.insertCell(0);
            newText = document.createTextNode(localStorage.getItem("Product Name:" + z));
            let savez0 = localStorage.getItem("Product Name:" + z);
            z++;
            newCell.appendChild(newText);
            newCell =  newRow.insertCell(1);
            newText = document.createTextNode(localStorage.getItem("Borrower Name:" + z));
            z++;
            newCell.appendChild(newText);
            newCell =  newRow.insertCell(2);
            newText = document.createTextNode(localStorage.getItem("Borrower Phone:" + z));
            let savez = localStorage.getItem("Borrower Phone:" + z);
            let newsavez = '972';
            newsavez += savez.slice(1,10);
            z++;
            newCell.appendChild(newText);
            newCell =  newRow.insertCell(3);
            newText = document.createTextNode(localStorage.getItem("Borrower Take Date:" + z));
            z++;
            newCell.appendChild(newText);
            newCell =  newRow.insertCell(4);
            newText = document.createTextNode(localStorage.getItem("Borrower Return Date:" + z));
            z++;
            newCell.appendChild(newText);
            newCell =  newRow.insertCell(5);
            newText = document.createElement('a');
            newText.innerHTML = `<a href='https://api.whatsapp.com/send?phone=${newsavez}&text=יכול בבקשה להחזיר לי את ה${savez0} שלקחת לי?'> <img src='http://cpa-harari.co.il/item/icons/whatsapp.png' width="20px" alt='W3Schools.com'> </a> `; 
            newCell.appendChild(newText);   
            
        }
    }
    
    
    
    
    const btn = document.getElementById('buttonsubmit');
    const pnameinput = document.getElementById('productname');
    const borrowernameinput = document.getElementById('borrowername');
    const borrowerphoneinput = document.getElementById('borrowerphone');
    const borroweringdateinput = document.getElementById('borroweringdate');
    const borroweringdatemeshuarinput = document.getElementById('borroweringdatemeshuar');
    
    
    
    btn.onclick = function() {
    
        const productnamevalue =pnameinput.value;
        const borrowernamevalue = borrowernameinput.value;
        const borrowerphonevalue = borrowerphoneinput.value;
        const borroweringdatevalue = borroweringdateinput.value;
        const borroweringdatemeshuarvalue = borroweringdatemeshuarinput.value;
    
     
        
        if(productnamevalue && borrowernamevalue && borrowerphonevalue && borroweringdatevalue && borroweringdatemeshuarvalue)
        {
            
            localStorage.setItem("Product Name:" + (localStorage.length), productnamevalue);
            localStorage.setItem("Borrower Name:" + (localStorage.length), borrowernamevalue);
            localStorage.setItem("Borrower Phone:" + (localStorage.length), borrowerphonevalue);
            localStorage.setItem("Borrower Take Date:" + (localStorage.length), borroweringdatevalue);
            localStorage.setItem("Borrower Return Date:" + (localStorage.length), borroweringdatemeshuarvalue);
        }
    
    }
    