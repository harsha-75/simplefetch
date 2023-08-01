console.log('test..');
document.getElementById('btn').addEventListener('click',loaddata);
function loaddata()
{
    console.log('entered the function..');
    const xhr =new XMLHttpRequest();
    const getdata=document.getElementById('data');
    xhr.open('GET','data.json',true);
    xhr.onload= function(){
        if(xhr.status==200)
        {
             const data= JSON.parse(xhr.responseText);
             console.log(data);
             const rollno=document.getElementById('rollno').value;
             var getdat='';
             var flag=0;
             data.forEach(function(student)
             {
                
                if(rollno==`${student.rollno}`)
                {
                    flag=1;
                    getdat=`<ul>
                    <li>${student.name}</li>
                    <li>${student.place}</li>
                    <li>${student.dob}</li>
                    <li>${student.major}</li>
                    </ul>`;
                }
             });
            if(flag==0)
            {
                getdat=`<h3>did not find data</h3>`;
            }
            document.getElementById('data').innerHTML=getdat;
        }
    }
    xhr.send();
}