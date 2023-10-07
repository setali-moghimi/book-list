const addbut= document.querySelector('.btn')
const inyear= document.querySelector('#year')
const inauthor= document.querySelector('#author')
const intitle= document.querySelector('#title')
const table= document.querySelector('.table')
let listketab=JSON.parse(localStorage.getItem('listtt'))
if(!listketab){
    listketab=[]
}
addbut.addEventListener('click',addketab)
function addketab(event){
    event.preventDefault()
    let title ,author,year
    title=intitle.value
    author=inauthor.value
    year=inyear.value
    intitle.value=''
    inauthor.value=''
    inyear.value=''
    if(!title||!author||!year||isNaN(year)){
        alert('ashtebah')
        return
    }
    let obj={ti:title,
        au:author,
    ye:year
    }
    showvalue([obj])
    adkardan(obj)
    localStorage.setItem('listtt',JSON.stringify(listketab))
}
showvalue(listketab)
function adkardan(obj){
    listketab.push(obj)
}
function showvalue(listketab){
    console.log(listketab);
    listketab.forEach(function(a){
        let sot1=document.createElement('th')
        sot1.innerHTML=a.ti
        let sot2=document.createElement('th')
        sot2.innerHTML=a.au
        let sot3=document.createElement('th')
        sot3.innerHTML=a.ye
        let tr=document.createElement('tr')
        tr.append(sot1,sot2,sot3)
        let tbody=document.createElement('tbody')
        tbody.id='book-list'
        tbody.append(tr)
        table.append(tbody)
    })
}
