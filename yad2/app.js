function func(phone,id){
    phone = phone.replace("-","");
    newphone = phone.slice(1,10);
    api = `https://web.whatsapp.com/send?phone=+972${newphone}&text=%D7%A9%D7%9C%D7%95%D7%9D+%D7%9C%D7%92%D7%91%D7%99+%D7%94%D7%93%D7%99%D7%A8%D7%94+%D7%A9%D7%A4%D7%99%D7%A8%D7%A1%D7%9E%D7%AA+%D7%91%D7%99%D7%93+2`
    
    let elem = document.getElementById(`${id}`);
    window.open(api);
    elem.style.display = 'none';
}